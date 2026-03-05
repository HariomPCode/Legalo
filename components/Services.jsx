import SERVICES from "@/data/Services";
import Link from "next/link";

function Services() {
  return (
    <section className="section">
      <div className="container-main">
        <div className="text-center mb-14">
          <p className="text-xs font-bold tracking-widest uppercase text-blue-600 mb-3">
            What We Do
          </p>
          <h2 className="title-lg">Legal AI for every workflow</h2>
          <p className="text-muted mt-4 max-w-xl mx-auto">
            From intake to close, our platform handles the heavy lifting so your
            legal team can focus on strategy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((s, i) => (
            <div
              key={i}
              className="card group hover:-translate-y-1 hover:shadow-md transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-blue-50 flex-center text-blue-600 mb-5 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                {s.icon}
              </div>
              <h3 className="title-md mb-2">{s.title}</h3>
              <p className="text-muted text-sm leading-relaxed flex-1">
                {s.description}
              </p>
              <Link
                href={s.href}
                className="inline-flex items-center gap-1 text-blue-600 text-sm font-semibold mt-5 hover:gap-2 transition-all duration-200"
              >
                Learn more
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/services" className="btn-secondary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
export default Services;
