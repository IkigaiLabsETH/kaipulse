import { Layout } from '@/components/ui/layout';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Grid } from '@/components/ui/grid';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

export default function StacksPage() {
  return (
    <Layout>
      <div className="py-16">
        <div className="mb-10 text-center">
          <Badge className="mb-4 bg-yellow-500 text-black text-base px-4 py-2">Bitcoin Layer 2</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-boska font-pixeled">What is Stacks?</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto font-epilogue">
            Stacks is a unique Bitcoin Layer 2 that brings smart contracts and decentralized apps to Bitcoin, while preserving its security, decentralization, and immutability.
          </p>
        </div>
        <Grid columns={3}>
          <Card>
            <CardHeader>
              <CardTitle>Bitcoin Connection</CardTitle>
              <CardDescription>Secured by Bitcoin</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-2 text-gray-200">
                Stacks settles its transactions on Bitcoin, leveraging Bitcoin&apos;s security as the foundational layer. All Stacks blocks are ultimately anchored to the Bitcoin blockchain.
              </p>
              <Badge variant="secondary">Decentralized</Badge>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Smart Contracts</CardTitle>
              <CardDescription>Clarity Language</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-2 text-gray-200">
                Stacks enables expressive smart contracts and dApps using the Clarity language, making Bitcoin programmable without modifying its base layer.
              </p>
              <Badge variant="secondary">Programmable</Badge>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Unique Token Model</CardTitle>
              <CardDescription>STX & sBTC</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-2 text-gray-200">
                Stacks uses its own token (STX) to incentivize honest block production and a separate Bitcoin-pegged asset (sBTC) for DeFi and other use cases.
              </p>
              <Badge variant="secondary">Incentivized</Badge>
            </CardContent>
          </Card>
        </Grid>
        <div className="my-12">
          <Separator />
        </div>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 font-boska">The Stacks Way</h2>
          <p className="text-lg text-gray-300 mb-6 font-epilogue">
            Stacks takes a layered approach: Bitcoin remains the simple, secure settlement layer, while Stacks adds scalability and new functionality on top. This separation of concerns allows for innovation without compromising Bitcoin&apos;s core properties.
          </p>
          <Button asChild size="lg" className="bg-yellow-500 text-black font-bold mt-4 hover:bg-yellow-400" variant="default">
            <a href="https://docs.stacks.co/concepts/stacks-101/what-is-stacks" target="_blank" rel="noopener noreferrer">
              Learn More at Stacks Docs
            </a>
          </Button>
        </div>
        <div className="mt-16 text-center text-xs text-gray-500">
          Source: <a href="https://docs.stacks.co/concepts/stacks-101/what-is-stacks" className="underline hover:text-yellow-500" target="_blank" rel="noopener noreferrer">docs.stacks.co</a>
        </div>
      </div>
    </Layout>
  );
}
