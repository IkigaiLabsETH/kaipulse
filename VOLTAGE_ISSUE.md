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

## Next Actions
- [ ] Restart the node from the Voltage dashboard and monitor for successful peer connections.
- [ ] Verify network/firewall settings to ensure the node can reach DNS seeds and peers.
- [ ] Double-check that all credentials (`VOLTAGE_LND_CERT`, `VOLTAGE_LND_MACAROON`, `VOLTAGE_LND_SOCKET`) are correct and up to date.
- [ ] If the issue persists, contact Voltage support for further assistance.

---

## References
- [Voltage Documentation](https://docs.voltageapi.com/)
- [Voltage Cloud Support](https://app.voltage.cloud/)

---

*Last updated: <!-- Add date here -->* 