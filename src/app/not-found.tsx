import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="cont text-center">
        {/* Card */}
        <div className="card p-10 max-w-xl mx-auto">
          {/* 404 */}
          <h1 className="text-[clamp(6rem,15vw,10rem)] font-bold text-white leading-none">
            404
          </h1>

          {/* Title */}
          <h2 className="about-h2 mt-4">Page not found</h2>

          {/* Description */}
          <p className="pp max-w-md mx-auto">
            The page you are looking for doesn’t exist or has been moved. Let’s
            get you back on track.
          </p>

          {/* Actions */}
          <div className="btn-div mt-8 flex-wrap">
            <Link href="/" className="btn-con">
              Back to Home
            </Link>

            <Link href="/contact" className="btn-out">
              Contact Support
            </Link>
          </div>
        </div>

        {/* Footer hint */}
        <p className="text-secondary text-sm mt-8">
          Error code: 404 • SaaS Analytics Platform
        </p>
      </div>
    </main>
  );
}
