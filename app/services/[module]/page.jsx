import Link from "next/link";
import MODULES from "@/data/modules";
import EmptyState from "@/components/EmptyState";

export default async function ModulePage({ params }) {
  const { module } = await params;

  const moduleConfig = MODULES[module];

  if (!moduleConfig) {
    return <p className="p-10">Module not found</p>;
  }

  const res = await fetch(moduleConfig.api, { cache: "no-store" });
  const data = await res.json();

  const records = data.data || [];

  if (records.length === 0) {
    return (
      <section className="section">
        <div className="container-main">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
            <Link href="/services" className="hover:text-blue-600">
              Services
            </Link>

            <span>/</span>

            <span className="text-gray-900 font-medium">
              {moduleConfig.title}
            </span>
          </div>

          <h1 className="title-lg mb-6">{moduleConfig.title}</h1>

          <EmptyState
            title={`No ${moduleConfig.title} Found`}
            description={`There are currently no ${moduleConfig.title.toLowerCase()} records available.`}
          />
        </div>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="container-main">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link href="/services" className="hover:text-blue-600">
            Services
          </Link>

          <span>/</span>

          <span className="text-gray-900 font-medium">
            {moduleConfig.title}
          </span>
        </div>

        <h1 className="title-lg mb-6">{moduleConfig.title}</h1>

        {/* Simple list rendering */}
        <div className="grid md:grid-cols-2 gap-5">
          {records.map((item, cardIndex) => {
            const entries = Object.entries(item).filter(
              ([key]) => key !== "_id" && key !== "__v",
            );

            // Detect a "title" field to surface as card header
            const titleEntry = entries.find(([key]) =>
              ["name", "title", "label", "fullName", "username"].includes(key),
            );
            const bodyEntries = titleEntry
              ? entries.filter(([key]) => key !== titleEntry[0])
              : entries;

            // Assign a soft accent color per card (cycles through palette)
            const accents = [
              {
                dot: "bg-indigo-400",
                badge: "bg-indigo-50 text-indigo-600 border-indigo-100",
                ring: "group-hover:border-indigo-200",
              },
              {
                dot: "bg-violet-400",
                badge: "bg-violet-50 text-violet-600 border-violet-100",
                ring: "group-hover:border-violet-200",
              },
              {
                dot: "bg-sky-400",
                badge: "bg-sky-50 text-sky-600 border-sky-100",
                ring: "group-hover:border-sky-200",
              },
              {
                dot: "bg-emerald-400",
                badge: "bg-emerald-50 text-emerald-600 border-emerald-100",
                ring: "group-hover:border-emerald-200",
              },
              {
                dot: "bg-amber-400",
                badge: "bg-amber-50 text-amber-600 border-amber-100",
                ring: "group-hover:border-amber-200",
              },
              {
                dot: "bg-rose-400",
                badge: "bg-rose-50 text-rose-600 border-rose-100",
                ring: "group-hover:border-rose-200",
              },
            ];
            const accent = accents[cardIndex % accents.length];

            return (
              <div
                key={item._id}
                className={`group relative rounded-2xl border border-gray-200/80 bg-white/80 backdrop-blur-sm shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 ${accent.ring} overflow-hidden`}
              >
                {/* Top accent bar */}
                <div
                  className={`absolute top-0 left-0 right-0 h-0.5 ${accent.dot} opacity-60`}
                />

                <div className="p-5 pb-4">
                  {/* Card header */}
                  {titleEntry && (
                    <div className="flex items-center gap-3 mb-4">
                      {/* Avatar / icon placeholder */}
                      <div
                        className={`w-9 h-9 rounded-xl ${accent.badge} border flex items-center justify-center flex-shrink-0`}
                      >
                        <span className="text-sm font-bold uppercase">
                          {String(titleEntry[1]).charAt(0)}
                        </span>
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs text-gray-400 font-medium uppercase tracking-widest leading-none mb-0.5">
                          {titleEntry[0].replace(/([A-Z])/g, " $1")}
                        </p>
                        <p className="text-sm font-semibold text-gray-900 truncate">
                          {String(titleEntry[1])}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
