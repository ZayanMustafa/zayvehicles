import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-yellow-50 p-6 text-center">
      <div className="max-w-2xl space-y-6">
        {/* Big 404 Text */}
        <div className="relative">
          <h1 className="text-[120px] md:text-[200px] font-bold text-yellow-200 tracking-tight">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-3xl md:text-5xl font-bold text-yellow-800">
              Page Not Found
            </h2>
          </div>
        </div>

        {/* Message */}
        <p className="text-lg md:text-xl text-yellow-600 max-w-lg mx-auto">
          Oops! The page you&apos;re looking for doesn&apos;t exist or may have been moved.
        </p>

        {/* Home Button */}
        <div className="pt-8">
          <Link
            href="/"
            className="inline-block px-8 py-3 bg-yellow-800 text-white font-medium rounded-lg hover:bg-yellow-700 transition-colors duration-200"
          >
            Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}