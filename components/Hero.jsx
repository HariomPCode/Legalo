import Link from "next/link";

function Hero() {
  return (
    <section className="hero-bg section overflow-hidden relative min-h-[92vh] flex items-center">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[700px] opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #3b82f6 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-blue-500 opacity-[0.08] blur-[140px]" />
        <div className="absolute top-1/2 left-[15%] w-[300px] h-[300px] rounded-full bg-indigo-400 opacity-[0.06] blur-[100px]" />
        <div className="absolute top-1/3 right-[10%] w-[250px] h-[250px] rounded-full bg-blue-300 opacity-[0.05] blur-[90px]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent" />
      </div>

      <div className="container-main flex-center flex-col text-center relative z-10 py-8">
        <div className="inline-flex items-center gap-2.5 bg-white border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-full mb-8 shadow-soft">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-60" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600" />
          </span>
          AI-Powered Legal Intelligence
          <span className="w-px h-3 bg-blue-200" />
          <span className="text-blue-400 normal-case font-medium tracking-normal">
            Now in GA
          </span>
        </div>

        <h1 className="title-xl max-w-[15ch] leading-[1.08] tracking-tight">
          Legal Work at <br className="hidden sm:block" />
          <span className="relative inline-block mt-1">
            <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
              Machine Speed
            </span>
            <svg
              className="absolute -bottom-2 left-0 w-full"
              viewBox="0 0 300 12"
              fill="none"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M2 8.5C50 3.5 100 1 150 1.5C200 2 250 5 298 9"
                stroke="url(#heroUnderlineGrad)"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient
                  id="heroUnderlineGrad"
                  x1="0"
                  y1="0"
                  x2="300"
                  y2="0"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#3b82f6" />
                  <stop offset="1" stopColor="#6366f1" />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </h1>

        <p className="text-muted mt-8 max-w-xl text-lg leading-[1.75]">
          LegaloAI transforms how legal teams operate — from contract review and
          compliance monitoring to deep legal research. Reduce risk, save time,
          and focus on work that matters.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-3 mt-10">
          <Link
            href="/contact"
            className="btn-primary group flex items-center gap-2.5 px-8 py-3.5 text-sm font-semibold shadow-soft hover:-translate-y-0.5 hover:shadow-md transition-all duration-200"
          >
            Start Free Trial
          </Link>
          <Link
            href="/services"
            className="btn-outline group flex items-center gap-2 px-8 py-3.5 text-sm font-semibold hover:-translate-y-0.5 transition-all duration-200"
          >
            Explore Features
            <i className="fas fa-arrow-right text-xs group-hover:translate-x-1 transition-transform"></i>
          </Link>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 mt-10">
          <div className="flex -space-x-2.5">
            {[
              "bg-blue-600",
              "bg-indigo-500",
              "bg-violet-500",
              "bg-blue-400",
              "bg-sky-500",
            ].map((color, i) => (
              <div
                key={i}
                className={`w-7 h-7 rounded-full ${color} border-2 border-white flex-center text-white text-[9px] font-bold shadow-sm`}
              >
                {["SC", "JW", "PN", "ML", "AT"][i]}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-3.5 h-3.5 text-amber-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-xs text-gray-500 font-medium">
              Trusted by{" "}
              <span className="text-gray-800 font-semibold">500+</span> legal
              teams at leading firms
            </p>
          </div>
        </div>

        <div className="mt-16 w-full max-w-4xl mx-auto rounded-2xl border border-gray-200/80 bg-white overflow-hidden shadow-[0_8px_60px_-12px_rgba(59,130,246,0.18),0_4px_24px_-8px_rgba(0,0,0,0.08)]">
          <div className="bg-gray-50/80 border-b border-gray-100 px-5 py-3 flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-400" />
              <span className="w-3 h-3 rounded-full bg-yellow-400" />
              <span className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <div className="flex-1 flex justify-center">
              <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-md px-4 py-1 text-xs text-gray-400 font-mono max-w-xs w-full">
                <svg
                  className="w-3 h-3 text-green-500 flex-shrink-0"
                  viewBox="0 0 12 12"
                  fill="currentColor"
                >
                  <path d="M6 1a5 5 0 100 10A5 5 0 006 1zm0 9a4 4 0 110-8 4 4 0 010 8z" />
                </svg>
                app.legaloai.com — Contract Analysis
              </div>
            </div>
          </div>

          <div className="p-6 bg-gray-50/40">
            <div className="flex items-center justify-between mb-5">
              <div>
                <p className="text-sm font-semibold text-gray-800">
                  Contract Review
                </p>
                <p className="text-xs text-gray-400 mt-0.5">
                  NDA_Acme_Corp_v3.pdf · Analyzed 2 min ago
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 text-xs font-medium bg-green-50 text-green-700 border border-green-200 px-3 py-1 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  Low Risk
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100 px-3 py-1 rounded-full">
                  98% Confidence
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  label: "Clause Risk Detection",
                  color: "bg-green-500",
                  badge: "3 clauses",
                  badgeColor: "bg-green-50 text-green-700 border-green-100",
                  bars: [88, 60, 95, 45],
                  barColor: "bg-green-400",
                },
                {
                  label: "Party Obligations",
                  color: "bg-blue-500",
                  badge: "7 obligations",
                  badgeColor: "bg-blue-50 text-blue-700 border-blue-100",
                  bars: [75, 50, 85, 38],
                  barColor: "bg-blue-400",
                },
                {
                  label: "Key Dates & Deadlines",
                  color: "bg-amber-500",
                  badge: "4 dates",
                  badgeColor: "bg-amber-50 text-amber-700 border-amber-100",
                  bars: [90, 65, 55, 80],
                  barColor: "bg-amber-400",
                },
              ].map((card, i) => (
                <div
                  key={i}
                  className="rounded-xl bg-white border border-gray-100 p-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${card.color}`} />
                      <span className="text-xs font-semibold text-gray-700">
                        {card.label}
                      </span>
                    </div>
                    <span
                      className={`text-[10px] font-medium border px-2 py-0.5 rounded-full ${card.badgeColor}`}
                    >
                      {card.badge}
                    </span>
                  </div>
                  <div className="space-y-2">
                    {card.bars.map((w, j) => (
                      <div key={j} className="flex items-center gap-2">
                        <div className="flex-1 h-1.5 rounded-full bg-gray-100 overflow-hidden">
                          <div
                            className={`h-full rounded-full ${card.barColor} opacity-70`}
                            style={{ width: `${w}%` }}
                          />
                        </div>
                        <span className="text-[9px] text-gray-300 w-6 text-right">
                          {w}%
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom status row */}
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
              <div className="flex items-center gap-4 text-xs text-gray-400">
                <span className="flex items-center gap-1.5">
                  <i className="fas fa-clock text-yellow-400"></i>
                  Processed in 1.2s
                </span>
                <span className="flex items-center gap-1.5">
                  <i className="fas fa-shield-check text-green-400"></i>
                  SOC 2 Compliant
                </span>
              </div>
              <span className="text-[10px] text-gray-300">
                Powered by LegaloAI v3.1
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
