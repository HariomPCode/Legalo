import STATS from "@/data/Stats";

function Stats() {
  return (
    <section className="section-light py-16">
      <div className="container-main">
        <div className="text-center max-w-xl mx-auto mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-2">
            Impact
          </p>
          <h2 className="title-lg">Trusted by Legal Teams Worldwide</h2>
          <p className="text-muted mt-3 text-sm">
            LegaloAI powers legal operations for modern firms and enterprises.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map((s, i) => (
            <div
              key={i}
              className="card text-center group hover:-translate-y-1 hover:shadow-md transition-all duration-300"
            >
              {s.icon && (
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex-center mx-auto mb-3 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-200">
                  <i className={`fas ${s.icon} text-sm`} />
                </div>
              )}

              <p className="text-3xl font-extrabold bg-gradient-to-br from-blue-600 to-indigo-500 bg-clip-text text-transparent">
                {s.value}
              </p>

              <p className="text-sm text-gray-500 mt-1.5 font-medium">
                {s.label}
              </p>

              <div className="mt-4 w-10 h-[2px] bg-blue-100 mx-auto rounded-full group-hover:bg-blue-500 transition-colors"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;
