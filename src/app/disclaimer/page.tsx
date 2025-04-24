"use client";

import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function DisclaimerPage() {
  return (
    <div className="container mx-auto py-8 px-4 pt-24">
      <h1 className="text-3xl font-bold mb-6">Legal Disclaimer and Regulatory Notice</h1>
      
      <Card className="p-6">
        <ScrollArea className="h-[70vh]">
          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-semibold mb-3">Educational Purpose Only</h2>
              <p className="mb-4">
                This platform is provided for educational and informational purposes only. We do not:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide investment advice or recommendations</li>
                <li>Offer trading services or facilities</li>
                <li>Act as a financial advisor or broker</li>
                <li>Execute trades or handle user funds</li>
              </ul>
              <p className="mt-4 font-medium">
                Users should not interpret any information presented on this platform as financial advice. All decisions related to investments should be made after consulting with qualified financial professionals.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">MiCA Compliance Statement</h2>
              <p className="mb-4">
                This platform operates in accordance with the Markets in Cryptoasset Regulation (EU) 2023/1114 (MiCA). We are committed to full compliance with all applicable EU regulations governing cryptoassets and related services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Service Classification</h2>
              <p className="mb-4">
                Under MiCA regulations, we explicitly clarify that:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>We are an educational platform only and do not provide any regulated cryptoasset services</li>
                <li>We do not facilitate trading, exchange, or custody of any cryptoassets</li>
                <li>We do not provide services related to financial instruments as defined under MiFID II</li>
                <li>Our platform does not deal with security tokens or other regulated financial instruments</li>
                <li>Any calculators, tools, or simulations provided are for educational purposes only</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Risk Disclosure</h2>
              <p className="mb-4">
                In compliance with Article 66(3) of MiCA, we hereby inform users that:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Cryptoassets are highly volatile and risky investments</li>
                <li>You may lose your entire investment</li>
                <li>Cryptoassets may not be suitable for all investors</li>
                <li>Past performance is not indicative of future results</li>
                <li>The value of cryptoassets can fluctuate significantly</li>
                <li>Any examples or simulations shown are hypothetical and not guarantees of future results</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Consumer Protection Notice</h2>
              <p className="mb-4">
                In accordance with Article 66(1) of MiCA, we are committed to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Acting honestly, fairly, and professionally in the best interests of our clients</li>
                <li>Providing clear, accurate, and non-misleading information</li>
                <li>Maintaining transparent communication about risks and costs</li>
                <li>Implementing robust security measures to protect client assets</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Geographical Restrictions</h2>
              <p className="mb-4">
                Our services are intended for users within the European Union and other jurisdictions where such services are permitted by law. Users from other jurisdictions should verify their local regulations before using our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Market Abuse Prevention</h2>
              <p className="mb-4">
                We maintain strict policies against market abuse, including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Prohibition of insider trading</li>
                <li>Prevention of market manipulation</li>
                <li>Monitoring of suspicious transactions</li>
                <li>Reporting of potential market abuse</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Data Protection and Privacy</h2>
              <p className="mb-4">
                We process personal data in accordance with the General Data Protection Regulation (GDPR) and applicable EU data protection laws.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Changes to Terms</h2>
              <p className="mb-4">
                We reserve the right to update this disclaimer to reflect changes in regulations, our services, or legal requirements. Users will be notified of any material changes.
              </p>
            </section>

            <section className="border-t pt-6">
              <p className="text-sm text-gray-600">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </section>
          </div>
        </ScrollArea>
      </Card>
    </div>
  );
}
