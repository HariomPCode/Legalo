function getNested(obj, path) {
  return path.split(".").reduce((o, k) => o?.[k], obj);
}

function DynamicTable({ data, columns }) {
  return (
    <div className="overflow-x-auto border rounded-xl bg-white shadow-soft">
      <table className="min-w-full text-sm">
        <thead className="bg-gray-50 text-gray-600">
          <tr>
            {columns.map((col) => (
              <th key={col.field} className="px-4 py-3 text-left font-medium">
                {col.label}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="border-t hover:bg-gray-50">
              {columns.map((col) => (
                <td key={col.field} className="px-4 py-3">
                  {String(getNested(row, col.field) ?? "-")}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DynamicTable;
