import TESTIMONIALS from "@/data/Testimonials";

function Testimonials() {
  return (
    <section className="section-light section">
      <div className="container-main">
        <div className="text-center mb-14">
          <p className="text-xs font-bold tracking-widest uppercase text-blue-600 mb-3">
            Testimonials
          </p>
          <h2 className="title-lg">Loved by legal teams</h2>
          <p className="text-muted mt-4 max-w-lg mx-auto">
            See how forward-thinking firms are transforming their operations
            with LegaloAI.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="card hover:-translate-y-1 hover:shadow-md transition-all duration-300 flex flex-col"
            >
              <div className="flex gap-0.5 mb-5">
                {[...Array(5)].map((_, j) => (
                  <svg
                    key={j}
                    className="w-4 h-4 text-amber-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <blockquote className="text-gray-700 text-sm leading-relaxed flex-1">
                "{t.quote}"
              </blockquote>

              <div className="flex items-center gap-3 mt-6 pt-5 border-t border-gray-100">
                <div
                  className={`w-10 h-10 rounded-full ${t.color} flex-center text-white text-sm font-bold flex-shrink-0`}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    {t.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {t.role} · {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Testimonials;
