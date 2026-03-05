import Link from "next/link";

function EmptyState({
  title = "No Data Found",
  description = "There are no records available right now.",
  actionLabel,
  actionHref,
}) {
  return (
    <div className="flex flex-col items-center justify-center text-center py-16 px-6 border border-dashed border-gray-200 rounded-xl bg-gray-50">
      {/* Icon */}
      <div className="w-14 h-14 rounded-full bg-blue-50 text-blue-600 flex-center mb-4">
        <i className="fas fa-folder-open text-lg"></i>
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>

      {/* Description */}
      <p className="text-sm text-gray-500 mt-2 max-w-sm">{description}</p>

      {/* Optional action */}
      {actionLabel && actionHref && (
        <Link
          href={actionHref}
          className="btn-primary mt-5 text-sm px-5 py-2.5"
        >
          {actionLabel}
        </Link>
      )}
    </div>
  );
}

export default EmptyState;
