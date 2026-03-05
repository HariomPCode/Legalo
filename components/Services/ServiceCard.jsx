import Link from "next/link";

function ServiceCard({ moduleKey, module, count }) {
  return (
    <Link
      href={`/services/${moduleKey}`}
      className="card group hover:-translate-y-1 transition-all duration-300"
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex-center">
          <i className={`fas ${module.icon}`} />
        </div>

        <h3 className="font-semibold text-gray-800">{module.title}</h3>
      </div>

      <p className="text-sm text-gray-500 mb-4">{module.description}</p>

      <div className="flex items-center justify-between">
        <span className="text-xs text-gray-400">{count} records</span>

        <span className="text-blue-600 text-sm font-medium group-hover:translate-x-1 transition-transform">
          View →
        </span>
      </div>
    </Link>
  );
}

export default ServiceCard;
