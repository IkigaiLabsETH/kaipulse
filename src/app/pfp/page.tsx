import { Layout } from '@/components/ui';
import { PFPGridClient } from '@/components/curated/PFPGridClient';
import { CollectionTabs } from '@/components/collection/CollectionTabs';
import { Suspense } from 'react';

export default function PFPPage() {
  return (
    <Layout>
      <section className="bg-black py-8">
        <div className="px-4">
          <CollectionTabs
            defaultTab="pfp"
            tabs={[{
              id: 'pfp',
              label: 'PFP Collections',
              content: (
                <Suspense fallback={<div className="py-16 text-center text-white/60">Loading PFP collections...</div>}>
                  <h1 className="text-4xl font-bold text-yellow-400 mb-8 tracking-tight font-epilogue">
                    Curated PFP Collections
                  </h1>
                  <PFPGridClient />
                </Suspense>
              )
            }]}
          />
        </div>
      </section>
    </Layout>
  );
}
