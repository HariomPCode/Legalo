import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900">
      <nav className="w-full bg-white/80 backdrop-blur border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <h1 className="text-lg font-semibold tracking-tight text-indigo-600">
            LegaloAI
          </h1>

          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition"
            >
              Login
            </Link>

            <Link
              href="/register"
              className="px-4 py-2 rounded-md text-sm font-medium bg-indigo-600 text-white
                         hover:bg-indigo-700 transition"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6">
        <section className="min-h-[calc(100vh-64px)] flex items-center">
          <div className="max-w-2xl">
            <span
              className="inline-block mb-3 text-xs font-medium uppercase tracking-wide 
                             text-indigo-600"
            >
              AI Legal Intelligence
            </span>

            <h2 className="text-4xl md:text-5xl font-semibold leading-tight text-slate-900">
              Legal clarity,
              <span className="text-indigo-600"> simplified</span>.
            </h2>

            <p className="mt-4 text-base md:text-lg text-slate-600 leading-relaxed">
              Analyze legal documents, identify risks, and extract insights with
              AI-powered precision — built for speed and accuracy.
            </p>

            <div className="mt-8 flex gap-4">
              <Link
                href="/register"
                className="px-6 py-3 rounded-md bg-indigo-600 text-white text-sm font-medium
                           hover:bg-indigo-700 transition"
              >
                Start Free Trial
              </Link>

              <Link
                href="/login"
                className="px-6 py-3 rounded-md border border-slate-300 text-sm font-medium
                           text-slate-700 hover:border-indigo-600 hover:text-indigo-600 transition"
              >
                Sign In
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
