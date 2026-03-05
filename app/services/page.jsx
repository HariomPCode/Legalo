import MODULES from "@/data/modules";
import ServiceCard from "@/components/Services/ServiceCard";

async function getCounts() {
  const counts = {};

  await Promise.all(
    Object.entries(MODULES).map(async ([key, mod]) => {
      try {
        const res = await fetch(`${mod.api}/count/all`, { cache: "no-store" });
        const data = await res.json();
        counts[key] = data.count || 0;
      } catch {
        counts[key] = 0;
      }
    }),
  );

  return counts;
}

export default async function ServicesPage() {
  const counts = await getCounts();

  return (
    <section className="section">
      <div className="container-main">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <h1 className="title-lg">Platform Modules</h1>
          <p className="text-muted mt-3">
            Manage organizations, projects, users and permissions.
          </p>
        </div>

        {/* Modules Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(MODULES).map(([key, mod]) => (
            <ServiceCard
              key={key}
              moduleKey={key}
              module={mod}
              count={counts[key]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
