"use client";

import config from "@/Json/JsonBackend";

const ICONS = [
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"
    />
  </svg>,
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
    />
  </svg>,
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
    />
  </svg>,
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
    />
  </svg>,
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
    />
  </svg>,
  // Lock
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
    />
  </svg>,
];

export default function AboutPage() {
  const about = config.data[2].AboutPage;

  return (
    <div className="bg-white text-gray-800">
      {/* HERO */}
      <section className="hero-bg section">
        <div className="container-main flex-center flex-col text-center">
          <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 shadow-soft">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            {about.hero.badge}
          </span>

          <h1 className="title-xl max-w-4xl">{about.hero.title}</h1>
          <p className="text-lg text-muted max-w-2xl mx-auto mt-4">
            {about.hero.tagline}
          </p>

          <p className="text-muted mt-6 max-w-2xl text-lg leading-relaxed">
            {about.hero.description}
          </p>

          <div className="flex flex-wrap justify-center gap-3 mt-10">
            {about.hero.pills.map((pill, i) => (
              <span
                key={i}
                className="bg-white border border-gray-200 text-gray-700 text-sm font-medium px-5 py-2 rounded-full shadow-soft hover:-translate-y-0.5 transition-transform duration-200"
              >
                {pill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="section-light section">
        <div className="container-main">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {about.stats.map((s, i) => (
              <div
                key={i}
                className="card text-center hover:-translate-y-1 hover:shadow-md transition-all duration-300 group"
              >
                <p className="text-4xl font-extrabold bg-gradient-to-br from-blue-600 to-blue-400 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                  {s.value}
                </p>
                <p className="font-semibold text-gray-800 mt-2 text-sm">
                  {s.label}
                </p>
                <p className="text-muted text-xs mt-1">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRIMARY FEATURES */}
      <section className="section">
        <div className="container-main">
          <div className="text-center mb-14">
            <h2 className="title-lg">Core Platform Features</h2>
            <p className="text-muted mt-3 max-w-xl mx-auto">
              Everything your team needs to work smarter and move faster.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {about.primaryFeatures.map((f, i) => (
              <div
                key={i}
                className="card group hover:-translate-y-1 hover:shadow-md transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-blue-50 flex-center text-blue-600 mb-5 group-hover:bg-blue-100 transition-colors duration-200">
                  {ICONS[i % ICONS.length]}
                </div>
                <h3 className="title-md">{f.title}</h3>
                <p className="text-muted mt-2 text-sm leading-relaxed">
                  {f.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section-light section">
        <div className="container-main">
          <div className="text-center mb-14">
            <h2 className="title-lg">Why Teams Choose Axiomos</h2>
            <p className="text-muted mt-3 max-w-xl mx-auto">
              Built for modern legal teams that demand precision and speed.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {about.whyFeatures.map((f, i) => (
              <div
                key={i}
                className="card hover:-translate-y-1 hover:shadow-md transition-all duration-300 flex gap-4 items-start"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-600 flex-center text-white flex-shrink-0">
                  {ICONS[(i + 2) % ICONS.length]}
                </div>
                <div>
                  <h3 className="title-md">{f.title}</h3>
                  <p className="text-muted mt-1 text-sm leading-relaxed">
                    {f.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*HOW IT WORKS */}
      <section className="section">
        <div className="container-main">
          <div className="text-center mb-14">
            <h2 className="title-lg">{about.howItWorks.title}</h2>
            <p className="text-muted mt-3 max-w-xl mx-auto">
              A seamless workflow from intake to resolution.
            </p>
          </div>

          <div className="relative max-w-3xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-blue-200 via-blue-400 to-blue-200 hidden md:block" />

            <div className="space-y-8">
              {about.howItWorks.steps.map((step, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 flex-center text-white font-bold text-sm shadow-soft z-10 group-hover:bg-blue-700 transition-colors duration-200">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="card flex-1 hover:-translate-y-0.5 hover:shadow-md transition-all duration-300">
                    <h3 className="title-md">{step.label}</h3>
                    <p className="text-muted mt-1 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECURITY */}
      <section className="section-light section">
        <div className="container-main">
          <div className="text-center mb-14">
            <h2 className="title-lg">{about.security.title}</h2>
            <p className="text-muted mt-3 max-w-xl mx-auto">
              Enterprise-grade protection at every layer.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {about.security.items.map((item, i) => (
              <div
                key={i}
                className="card hover:-translate-y-1 hover:shadow-md transition-all duration-300 flex items-start gap-3"
              >
                <span className="w-5 h-5 rounded-full bg-blue-100 flex-center flex-shrink-0 mt-0.5">
                  <svg
                    className="w-3 h-3 text-blue-600"
                    viewBox="0 0 12 12"
                    fill="currentColor"
                  >
                    <path d="M10.28 2.28a.75.75 0 00-1.06 0L4.5 7l-1.72-1.72a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.06 0l5.25-5.25a.75.75 0 000-1.06z" />
                  </svg>
                </span>
                <p className="text-sm text-gray-700 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROADMAP */}
      <section className="section">
        <div className="container-main">
          <div className="text-center mb-14">
            <h2 className="title-lg">{about.roadmap.title}</h2>
            <p className="text-muted mt-3 max-w-xl mx-auto">
              Our commitment to continuous improvement and innovation.
            </p>
          </div>

          <div className="relative max-w-2xl mx-auto space-y-6">
            {about.roadmap.items.map((r, i) => (
              <div key={i} className="flex gap-5 group">
                <div className="flex flex-col items-center gap-1 flex-shrink-0">
                  <div className="w-10 h-10 rounded-full border-2 border-blue-500 bg-white flex-center group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-300">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-500 group-hover:bg-white transition-colors duration-300" />
                  </div>
                  {i < about.roadmap.items.length - 1 && (
                    <div className="w-px flex-1 min-h-[1.5rem] bg-blue-100" />
                  )}
                </div>
                <div className="card flex-1 mb-0 hover:-translate-y-0.5 hover:shadow-md transition-all duration-300">
                  <span className="inline-block text-xs font-bold text-blue-600 bg-blue-50 border border-blue-100 px-3 py-0.5 rounded-full mb-2">
                    {r.label}
                  </span>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {r.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container-main">
          <div className="gradient-primary rounded-2xl px-8 py-16 text-center text-white shadow-soft overflow-hidden relative">
            {/* Decorative blobs */}
            <div className="absolute -top-10 -left-10 w-48 h-48 rounded-full bg-white opacity-5 blur-2xl pointer-events-none" />
            <div className="absolute -bottom-10 -right-10 w-64 h-64 rounded-full bg-white opacity-5 blur-2xl pointer-events-none" />

            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              {about.cta.title}
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-blue-100 text-base leading-relaxed">
              {about.cta.description}
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
              <button className="bg-white text-blue-700 hover:bg-blue-50 font-semibold px-8 py-3 rounded-lg shadow-soft transition-all duration-200 hover:-translate-y-0.5">
                {about.cta.primaryButtonLabel}
              </button>
              <a
                href={about.cta.secondaryButtonHref}
                className="border border-white/60 text-white hover:bg-white/10 font-medium px-8 py-3 rounded-lg transition-all duration-200 hover:-translate-y-0.5"
              >
                {about.cta.secondaryButtonLabel}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
