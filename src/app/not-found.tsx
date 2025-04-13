import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="bg-zinc-900 p-8 rounded-lg border border-yellow-500/20 max-w-lg w-full text-center">
        <h2 className="text-2xl font-bold text-yellow-400 mb-4">Page Not Found</h2>
        <p className="text-yellow-100/80 mb-6">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block bg-yellow-400 text-black px-4 py-2 rounded-lg hover:bg-yellow-500 transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
} 