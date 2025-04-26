-- CreateTable
CREATE TABLE "Invoice" (
    "id" TEXT NOT NULL,
    "payment_hash" TEXT NOT NULL,
    "amount_sats" BIGINT NOT NULL,
    "memo" TEXT,
    "status" TEXT NOT NULL,
    "expires_at" TIMESTAMP(3) NOT NULL,
    "settled_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Invoice_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Invoice_payment_hash_key" ON "Invoice"("payment_hash");

-- CreateIndex
CREATE INDEX "Invoice_status_created_at_idx" ON "Invoice"("status", "created_at");

-- CreateIndex
CREATE INDEX "Invoice_expires_at_idx" ON "Invoice"("expires_at");
