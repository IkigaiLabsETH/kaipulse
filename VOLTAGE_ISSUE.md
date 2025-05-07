# Voltage Lightning Node Connectivity Issue

## Summary
Our application is experiencing 500 Internal Server Errors on the `/api/lightning/create-invoice` endpoint. Investigation reveals that the root cause is connectivity issues with the Voltage-hosted Lightning node.

---

## Symptoms
- API requests to `/api/lightning/create-invoice` return HTTP 500 errors.
- Application logs show failures when attempting to create Lightning invoices.
- Voltage node logs display repeated errors:
  - `SRVR: Unable to retrieve initial bootstrap peers: no addresses found`
  - `DISC: Attempting to bootstrap with: BOLT-0010 DNS Seed...`
  - `GOBN: (server) Error sending FIN: error calling sendToStream: context canceled`
  - `AUTO: could not revoke session ... rpc error: code = Canceled desc = context canceled`

---

## Investigation Steps
1. **Checked API error logs:** Confirmed 500 errors originate from failed `createInvoice` calls.
2. **Reviewed environment variables:** Verified `VOLTAGE_LND_CERT`, `VOLTAGE_LND_MACAROON`, and `VOLTAGE_LND_SOCKET` are set.
3. **Inspected Voltage node logs:** Found repeated bootstrap and peer connection errors, indicating the node is not fully online.
4. **Confirmed node status in Voltage dashboard:** Node is not connecting to peers and may be offline or misconfigured.

---

## Root Cause
The Voltage Lightning node is unable to connect to the Lightning Network due to peer discovery/bootstrap failures. This prevents the backend from creating invoices or processing Lightning payments.

---

## Remediation: Fallback Logic Added
To improve reliability and aid debugging, we updated the `/api/lightning/create-invoice` endpoint with a fallback mechanism:

- The API first attempts to create an invoice using the `ln-service` library (gRPC/REST abstraction).
- If this fails (e.g., due to library or connection issues), it automatically attempts a direct REST call to the Voltage LND node using the documented API (`/v1/invoices`), passing the macaroon in the header.
- The response now includes a `usedFallback` field to indicate which method succeeded.
- If both methods fail, a 500 error is returned and the error is logged for further investigation.

**Benefits:**
- Helps isolate whether issues are with the node, credentials, or the `ln-service` library.
- Provides a backup path for invoice creation, improving reliability during node or library issues.
- Improves error logging and observability for future troubleshooting.

---

## Certificate Handling Update
We've simplified our certificate handling based on Voltage's use of CA certificates:

- Removed explicit certificate usage since Voltage nodes use browser-trusted CA certificates
- Updated all `getLnd()` functions to use an empty string for the `cert` field
- Maintained the existing REST API fallback which was already correctly not using certificates
- Removed unused `VOLTAGE_LND_CERT` environment variable references

This change aligns with Voltage's documentation and should improve connection reliability by:
- Simplifying the authentication process
- Reducing potential points of failure
- Leveraging browser-trusted certificates for REST API calls
- Maintaining compatibility with both gRPC and REST interfaces

The changes have been applied to:
- `/api/lightning/balance/route.ts`
- `/api/lightning/pay/route.ts`
- `/api/lightning/create-invoice/route.ts`

---

## Frontend Error Handling Improvement
To address the `Unexpected end of JSON input` error when the backend returns an empty or invalid response, we updated the LightningPaymentWidget fetch logic:

- The widget now reads the response as text and only attempts to parse it as JSON if there is content.
- If the backend returns an error or empty body, the widget displays a user-friendly error message instead of crashing.
- This makes the UI more robust and helps surface backend issues to the user for easier debugging.

**Relevant file:**
- `src/components/LightningPaymentWidget.tsx`

This change ensures that even if the backend fails to return a valid JSON response (e.g., due to node connectivity issues), the frontend will not throw a parsing error and will instead show a clear error message to the user.

---

## Troubleshooting: Macaroon Encoding/Hex Error

### Symptom
- API requests to `/api/lightning/create-invoice` fail with:
  - `REST fallback failed: 500 Internal Server Error - {"code":2, "message":"encoding/hex: invalid byte: U+0067 'g'", "details":[]}`

### Root Cause
- The `VOLTAGE_LND_MACAROON` environment variable was not a valid hex string.
- This can happen if:
  - The macaroon file contents were pasted directly (binary, not hex)
  - A placeholder or example value was used
  - Extra characters, spaces, or line breaks were present
  - The hex string included non-hex characters (e.g., 'g')

### Resolution
1. Download the `admin.macaroon` file from the Voltage dashboard.
2. Convert it to a hex string using:
   ```sh
   xxd -ps -u -c 1000 admin.macaroon
   ```
3. Copy the output (should only contain 0-9, a-f, A-F).
4. Set the environment variable in `.env.local`:
   ```
   VOLTAGE_LND_MACAROON=<hex-string>
   ```
5. Ensure there are no spaces, newlines, or extra characters.
6. Restart the Next.js dev server.

### Result
- The encoding/hex error is resolved and the API can authenticate with the Voltage node.

---

## How to Convert a Base64 Macaroon to Hex

If you have a base64-encoded macaroon string (e.g., from the Voltage dashboard or a previous export), you must convert it to hex before using it as the `VOLTAGE_LND_MACAROON` environment variable. Using base64 directly will cause authentication errors.

### Steps
1. **If you have the original `admin.macaroon` file:**
   - Run:
     ```sh
     xxd -ps -u -c 1000 admin.macaroon
     ```
   - Copy the output (hex string) and use it for your environment variable.

2. **If you only have a base64 string:**
   - Convert it to hex with:
     ```sh
     echo '<your-base64-string-here>' | base64 -d | xxd -ps -u -c 1000
     ```
   - Replace `<your-base64-string-here>` with your actual base64 macaroon.
   - Copy the output (hex string) and use it for your environment variable.

3. **Set your environment variable in `.env.local`:**
   ```
   VOLTAGE_LND_MACAROON=<hex-string>
   ```
   (No spaces, newlines, or extra characters.)

4. **Restart your Next.js dev server.**

### Note
- **Do not use the base64 string directly** for `VOLTAGE_LND_MACAROON`. It must be a hex string.
- The hex string will only contain the characters 0-9 and a-f (or A-F).

---

## Next Actions
- [ ] Restart the node from the Voltage dashboard and monitor for successful peer connections.
- [ ] Verify network/firewall settings to ensure the node can reach DNS seeds and peers.
- [ ] Double-check that all credentials (`VOLTAGE_LND_CERT`, `VOLTAGE_LND_MACAROON`, `VOLTAGE_LND_SOCKET`) are correct and up to date.
- [ ] If the issue persists, contact Voltage support for further assistance.

---

## References
- [Voltage Documentation](https://docs.voltageapi.com/)
- [Voltage Cloud Support](https://app.voltage.cloud/)
- [Voltage REST API Examples](https://docs.voltage.cloud/rest-api-examples)

---
