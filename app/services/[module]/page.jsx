import MODULES from "@/data/modules";
import CONFIG from "@/Json/JsonBackend";
import DynamicTable from "@/components/Services/DynamicTable";
import Link from "next/link";
import EmptyState from "@/components/EmptyState";

export default async function ModulePage({ params }) {
  const { module } = await params;

  const moduleConfig = MODULES[module];
  const tableConfig = CONFIG.data[1].tableConfigs[module];

  if (!moduleConfig || !tableConfig) {
    return <p className="p-10">Module not found</p>;
  }

  const res = await fetch(moduleConfig.api, { cache: "no-store" });
  const data = await res.json();

  if (!data.data || data.data.length === 0) {
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

        <DynamicTable data={data.data} columns={tableConfig.columns} />
      </div>
    </section>
  );
}
