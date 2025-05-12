// Collections Layout with cache control
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export const metadata = {
  alternates: {
    canonical: './collections',
  },
};

export default function CollectionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 