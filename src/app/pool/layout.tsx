export const dynamic = 'force-static';
export const revalidate = 3600;

export default function PoolLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-black">
      {children}
    </div>
  );
} 