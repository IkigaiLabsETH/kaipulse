import { Layout } from '@/components/ui';
import { CollectionsGridClient } from '@/components/curated/CollectionsGridClient';
import { CollectionTabs } from '@/components/collection/CollectionTabs';
import { Suspense } from 'react';

export default function CollectionsPage() {
  return (
    <Layout>
      <section className="bg-black py-8">
        <div className="px-4">
          <CollectionTabs
            defaultTab="curated"
            tabs={[{
              id: 'curated',
              label: 'Curated',
              content: (
                <Suspense fallback={<div className="py-16 text-center text-white/60">Loading collections...</div>}>
                  <h1 className="text-4xl font-bold text-yellow-400 mb-8 tracking-tight font-epilogue">
                    21 Curated Collections
                  </h1>
                  <CollectionsGridClient />
                </Suspense>
              )
            }]}
          />
        </div>
      </section>
    </Layout>
  );
} 