import React from "react";
import { X, FileText } from "lucide-react";

/* ------------------ Helpers ------------------ */

function formatKey(key) {
  return key
    .replace(/_/g, " ")
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/\b\w/g, (l) => l.toUpperCase());
}

// Strict ISO Date check (fixes incorrect date parsing)
function isISODateString(value) {
  return (
    typeof value === "string" &&
    /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?Z$/.test(value)
  );
}

/* ------------------ Auto Renderer ------------------ */

function AutoRender({ data }) {
  if (data === null || data === undefined) {
    return <span className="italic text-gray-400">Not specified</span>;
  }

  // ISO Date detection
  if (isISODateString(data)) {
    return (
      <span>
        {new Date(data).toLocaleString("en-IN", {
          dateStyle: "medium",
          timeStyle: "short",
        })}
      </span>
    );
  }

  // URL detection
  if (typeof data === "string" && data.startsWith("http")) {
    return (
      <a
        href={data}
        target="_blank"
        rel="noreferrer"
        className="text-blue-600 underline"
      >
        Open Link
      </a>
    );
  }

  // Primitive values
  if (typeof data !== "object") {
    return <span>{String(data)}</span>;
  }

 
if (Array.isArray(data)) {
  if (data.length === 0) {
    return <span className="italic text-gray-400">Empty</span>;
  }

  return (
    <ul className="list-disc list-inside space-y-1 text-sm text-gray-900">
      {data.map((item, i) => (
        <li key={i}>
          <AutoRender data={item} />
        </li>
      ))}
    </ul>
  );
}


 
return (
  <div className="space-y-4">
    {Object.entries(data)
      .filter(([key, value]) => key !== "__v" && value !== "" && value !== null)
      .map(([key, value]) => (
        <div key={key} className="grid grid-cols-3 gap-4 items-start">
          
          {/* Label */}
          <dt className="text-[10px] uppercase tracking-wide text-gray-500 pt-1">
            {formatKey(key)}
          </dt>

          {/* Value */}
          <dd className="col-span-2 text-sm text-gray-900 font-medium leading-relaxed">
            {/* Nested object indentation */}
            {typeof value === "object" && value !== null ? (
              <div className="border-l-2 border-gray-200 pl-4">
                <AutoRender data={value} />
              </div>
            ) : (
              <AutoRender data={value} />
            )}
          </dd>
        </div>
      ))}
  </div>
);

}

/* ------------------ Section Wrapper ------------------ */

const DetailSection = ({ title, children }) => (
  <div className="rounded-xl border border-gray-200 bg-white shadow-sm p-6 mb-5">
    <h3 className="text-xs font-semibold text-gray-700 uppercase tracking-wider mb-4">
      {title}
    </h3>
    {children}
  </div>
);

/* ------------------ Main Modal ------------------ */

const DetailsModal = ({ data, onClose }) => {
  if (!data) return null;

  const title =
    data.title ||
    data.name ||
    data.nodeId ||
    data.node_id ||
    "Details";

  const subtitle =
    data.nodeId ||
    data.node_id ||
    data.section ||
    data._id;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-2xl max-w-6xl w-full max-h-[92vh] flex flex-col overflow-hidden">

        {/* Header */}
        <div className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white px-8 py-6">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <FileText size={20} className="text-blue-400" />
                <h2 className="text-xl font-bold">{title}</h2>
              </div>
              <p className="text-sm text-slate-300 font-mono">
                {subtitle}
              </p>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl hover:bg-white/10 transition"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-8 py-6">
          <DetailSection title="Details">
            <AutoRender data={data} />
          </DetailSection>
        </div>

        {/* Footer */}
        <div className="bg-white/80 border-t px-8 py-4 text-xs text-gray-500">
          Document ID:{" "}
          <span className="font-mono text-gray-700">{data._id}</span>
        </div>

      </div>
    </div>
  );
};

export default DetailsModal;
