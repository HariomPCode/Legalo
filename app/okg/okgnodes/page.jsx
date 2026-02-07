"use client";
import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Plus,
  Pencil,
  Trash2,
  ArrowUp,
  ArrowDown,
} from "lucide-react";
import DetailsModal from "@/components/DetailedModalView";
import TABLE_CONFIG from "@/configs/okgNodesTable.config";
import FormModal from "@/components/FormModal";

// Utility to get nested field value
const getNestedValue = (obj, path) => {
  return path.split(".").reduce((acc, part) => acc?.[part], obj);
};

// Filter data based on active filters
const applyFilters = (data, filters) => {
  return data.filter((row) => {
    return Object.entries(filters).every(([field, filterValue]) => {
      if (
        filterValue === undefined ||
        filterValue === "" ||
        filterValue === null
      )
        return true;

      const value = getNestedValue(row, field);
      const column = TABLE_CONFIG.columns.find((col) => col.field === field);

      if (!column) return true;

      switch (column.type) {
        case "text":
          return String(value || "")
            .toLowerCase()
            .includes(String(filterValue).toLowerCase());

        case "dropdown":
          return String(value) === String(filterValue);

        case "boolean":
          return value === filterValue;

        case "Date":
          return true;

        default:
          return true;
      }
    });
  });
};

const applySorting = (data, sortConfig) => {
  const { field, direction } = sortConfig;
  if (!field) return data;

  const column = TABLE_CONFIG.columns.find((c) => c.field === field);
  if (!column) return data;

  return [...data].sort((a, b) => {
    const aVal = getNestedValue(a, field);
    const bVal = getNestedValue(b, field);

    if (column.type === "Date") {
      const da = aVal ? new Date(aVal).getTime() : 0;
      const db = bVal ? new Date(bVal).getTime() : 0;
      return direction === "asc" ? da - db : db - da;
    }

    if (aVal < bVal) return direction === "asc" ? -1 : 1;
    if (aVal > bVal) return direction === "asc" ? 1 : -1;
    return 0;
  });
};

// Column Renderer Component
const ColumnRenderer = ({ value, type, field }) => {
  if (value === null || value === undefined) {
    return <span className="text-gray-400 italic">N/A</span>;
  }

  switch (type) {
    case "boolean":
      return (
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium ${
            value ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
          }`}
        >
          {value ? "Yes" : "No"}
        </span>
      );

    case "Date":
      return (
        <span className="text-sm text-gray-700">
          {new Date(value).toLocaleDateString("en-IN", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </span>
      );

    case "dropdown":
      const colors = {
        PUBLISHED: "bg-blue-100 text-blue-800",
        DRAFT: "bg-yellow-100 text-yellow-800",
        ARCHIVED: "bg-gray-100 text-gray-800",
        OBLIGATION: "bg-purple-100 text-purple-800",
        RIGHT: "bg-green-100 text-green-800",
        PROHIBITION: "bg-red-100 text-red-800",
      };
      return (
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium ${
            colors[value] || "bg-gray-100 text-gray-800"
          }`}
        >
          {value}
        </span>
      );

    case "text":
    default:
      const textValue = String(value);
      return (
        <span
          className="text-sm text-gray-900 truncate block max-w-xs"
          title={textValue}
        >
          {textValue}
        </span>
      );
  }
};

// Column Filter Component
const ColumnFilter = ({ column, value, onChange, dropdownOptions }) => {
  if (!column.filter || column.type === "Date") return null;

  switch (column.type) {
    case "text":
      return (
        <input
          type="text"
          placeholder={`Filter ${column.label}...`}
          value={value || ""}
          onChange={(e) => onChange(column.field, e.target.value)}
          className="w-full px-2 py-1 text-xs border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      );

    case "dropdown":
      const options = dropdownOptions[column.field] || [];
      return (
        <select
          value={value || ""}
          onChange={(e) => onChange(column.field, e.target.value)}
          className="w-full px-2 py-1 text-xs border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
        >
          <option value="">All</option>
          {options.map((opt, idx) => (
            <option key={idx} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      );

    case "boolean":
      return (
        <select
          value={value === undefined ? "" : value}
          onChange={(e) =>
            onChange(
              column.field,
              e.target.value === "" ? undefined : e.target.value === "true",
            )
          }
          className="w-full px-2 py-1 text-xs border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
        >
          <option value="">All</option>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
      );
    default:
      return null;
  }
};

// Main Data Table Component
const DataTable = () => {
  const [data, setData] = useState([]); // for actual data
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [filters, setFilters] = useState({});
  const [dropdownOptions, setDropdownOptions] = useState({});
  const [sortConfig, setSortConfig] = useState({
    field: null,
    direction: "asc",
  }); // for sorting date columns

  const [openForm, setOpenForm] = useState(false); // for edit and create form as per table structure
  const [editRecord, setEditRecord] = useState(null);

  const [page, setPage] = useState(1);
  const [limit] = useState(20);
  const [meta, setMeta] = useState(null);

  useEffect(() => {
    fetchData();
    fetchDropdownOptions();
  }, [page]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `${TABLE_CONFIG.api}?page=${page}&limit=${limit}`,
      );

      if (!response.ok) throw new Error("Failed to fetch data");

      const result = await response.json();

      setData(result.data || []);
      setMeta(result.meta || null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchDropdownOptions = async () => {
    const options = {};

    for (const column of TABLE_CONFIG.columns) {
      if (column.type === "dropdown") {
        if (column.options) {
          options[column.field] = column.options;
        } else if (column.api && column.apiTitle) {
          try {
            const response = await fetch(column.api);
            if (response.ok) {
              const result = await response.json();
              const items = result.data || result;
              options[column.field] = items
                .map((item) => item[column.apiTitle])
                .filter(Boolean);
            }
          } catch (err) {
            console.error(`Failed to fetch options for ${column.field}:`, err);
            options[column.field] = [];
          }
        }
      }
    }

    setDropdownOptions(options);
  };

  // to handle form submission for create and edit
  const handleFormSubmit = async (formData) => {
    try {
      setLoading(true);

      const isEdit = Boolean(editRecord);

      const url = isEdit
        ? `${TABLE_CONFIG.api}/${editRecord._id}`
        : TABLE_CONFIG.api;

      const method = isEdit ? "PATCH" : "POST";

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(
          isEdit ? "Failed to update record" : "Failed to create record",
        );
      }

      await response.json(); // optional but good practice

      // ✅ Success cleanup
      setOpenForm(false);
      setEditRecord(null);
      setSelectedRecord(null);

      // ✅ Refresh table data
      fetchData();
    } catch (error) {
      console.error(error);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Pagination logic to show limited page numbers
  function getVisiblePages(current, total) {
    const delta = 1; // pages before and after current
    const pages = [];

    const start = Math.max(1, current - delta);
    const end = Math.min(total, current + delta);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  }

  const filteredData = applyFilters(data, filters);
  const finalData = applySorting(filteredData, sortConfig);

  const toggleSort = (field) => {
    const column = TABLE_CONFIG.columns.find((c) => c.field === field);

    // 🚫 Allow sorting ONLY for Date columns
    if (!column || column.type !== "Date") return;

    setSortConfig((prev) => ({
      field,
      direction:
        prev.field === field && prev.direction === "asc" ? "desc" : "asc",
    }));
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6 bg-red-50 border border-red-200 rounded-lg">
        <p className="text-red-800">Error: {error}</p>
        <button
          onClick={fetchData}
          className="mt-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-semibold text-gray-900 tracking-tight">
              {TABLE_CONFIG.title}
            </h1>

            <div className="mt-1 flex items-center gap-2">
              <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                {filteredData.length} records
              </span>
              <span className="text-sm text-gray-500">
                Updated in real-time
              </span>
            </div>
          </div>

          {TABLE_CONFIG.actions.create && (
            <button
              onClick={() => {
                setEditRecord(null);
                setOpenForm(true);
              }}
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white
             shadow-sm transition-all
             hover:bg-blue-700 hover:shadow-md
             focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <Plus className="h-4 w-4" />
              Create New
            </button>
          )}
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          {/* Scroll Container */}
          <div className="max-h-[90vh] overflow-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50 sticky top-0 z-10">
                <tr>
                  {TABLE_CONFIG.columns.map((col) => (
                    <th
                      key={col.field}
                      className="px-6 py-3 text-xs font-medium text-gray-500 uppercase"
                    >
                      <div className="space-y-2">
                        {/* Header label */}
                        {col.type === "Date" ? (
                          <button
                            onClick={() => toggleSort(col.field)}
                            className="flex items-center gap-1 hover:text-gray-900"
                          >
                            {col.label}

                            {sortConfig.field === col.field &&
                              (sortConfig.direction === "asc" ? (
                                <ArrowUp size={14} />
                              ) : (
                                <ArrowDown size={14} />
                              ))}
                          </button>
                        ) : (
                          <div className="text-gray-500 cursor-default">
                            {col.label}
                          </div>
                        )}

                        {/* Filter (unchanged) */}
                        <ColumnFilter
                          column={col}
                          value={filters[col.field]}
                          onChange={(f, v) =>
                            setFilters((prev) => ({ ...prev, [f]: v }))
                          }
                          dropdownOptions={dropdownOptions}
                        />
                      </div>
                    </th>
                  ))}

                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {finalData.map((row) => (
                  <tr
                    key={row._id}
                    onClick={() => setSelectedRecord(row)}
                    className="hover:bg-blue-50 cursor-pointer transition-colors"
                  >
                    {TABLE_CONFIG.columns.map((col) => (
                      <td
                        key={col.field}
                        className="px-6 py-4 whitespace-nowrap"
                      >
                        <ColumnRenderer
                          value={getNestedValue(row, col.field)}
                          type={col.type}
                          field={col.field}
                        />
                      </td>
                    ))}

                    {/* Actions */}
                    <td
                      className="px-6 py-4 whitespace-nowrap"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="flex items-center gap-2">
                        {TABLE_CONFIG.actions.edit && (
                          <button
                            onClick={() => {
                              setEditRecord(row);
                              setOpenForm(true);
                            }}
                            className="group inline-flex h-9 w-9 items-center justify-center rounded-lg
                 bg-emerald-600 text-white
                 shadow-sm transition-all duration-200
                 hover:bg-emerald-50 hover:text-emerald-600 hover:shadow-md
                 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-1"
                            title="Edit"
                          >
                            <Pencil className="h-4 w-4 transition-transform duration-200 group-hover:scale-110 group-hover:-rotate-6" />
                          </button>
                        )}

                        {TABLE_CONFIG.actions.delete && (
                          <button
                            onClick={() => console.log("Delete:", row._id)}
                            className="group inline-flex h-9 w-9 items-center justify-center rounded-lg
                 bg-red-600 text-white
                 shadow-sm transition-all duration-200
                 hover:bg-red-50 hover:text-red-600 hover:shadow-md
                 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-1"
                            title="Delete"
                          >
                            <Trash2 className="h-4 w-4 transition-transform duration-200 group-hover:scale-110 group-hover:rotate-6" />
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {meta && (
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-6 py-4 border-t bg-white">
              {/* Left Info */}
              <div className="text-sm text-gray-500">
                Page{" "}
                <span className="font-semibold text-gray-900">{meta.page}</span>{" "}
                of{" "}
                <span className="font-semibold text-gray-900">
                  {meta.totalPages}
                </span>{" "}
                ·{" "}
                <span className="font-semibold text-gray-900">
                  {meta.total}
                </span>{" "}
                records
              </div>

              {/* Right Controls */}
              <div className="flex items-center rounded-lg border bg-gray-50 p-1 shadow-sm">
                {/* Previous */}
                <button
                  disabled={meta.page === 1}
                  onClick={() => setPage((p) => p - 1)}
                  className="flex items-center justify-center w-9 h-9 rounded-md
                   text-gray-500 hover:text-gray-900
                   hover:bg-white transition-all
                   disabled:opacity-40 disabled:cursor-not-allowed
                   focus:outline-none focus:ring-2 focus:ring-blue-500"
                  aria-label="Previous page"
                >
                  <ChevronLeft size={18} />
                </button>

                {/* Page Numbers */}
                {getVisiblePages(meta.page, meta.totalPages).map((pageNum) => (
                  <button
                    key={pageNum}
                    onClick={() => setPage(pageNum)}
                    className={`min-w-9 h-9 px-3 mx-0.5 rounded-md text-sm font-medium
            transition-all duration-200
            ${
              meta.page === pageNum
                ? "bg-blue-600 text-white shadow-sm scale-105"
                : "text-gray-600 hover:bg-white hover:text-gray-900"
            }
            focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  >
                    {pageNum}
                  </button>
                ))}

                {/* Next */}
                <button
                  disabled={meta.page === meta.totalPages}
                  onClick={() => setPage((p) => p + 1)}
                  className="flex items-center justify-center w-9 h-9 rounded-md
                   text-gray-500 hover:text-gray-900
                   hover:bg-white transition-all
                   disabled:opacity-40 disabled:cursor-not-allowed
                   focus:outline-none focus:ring-2 focus:ring-blue-500"
                  aria-label="Next page"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          )}

          {filteredData.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No records found</p>
            </div>
          )}
        </div>
      </div>

      {/* Details Modal */}
      {selectedRecord && (
        <DetailsModal
          data={selectedRecord}
          onClose={() => setSelectedRecord(null)}
        />
      )}

      {/* Form Modal for Create/Edit */}
      {openForm && (
        <FormModal
          initialData={editRecord}
          dropdownOptions={dropdownOptions}
          onClose={() => {
            setOpenForm(false);
            setEditRecord(null);
          }}
          onSubmit={handleFormSubmit}
        />
      )}
    </div>
  );
};

export default DataTable;
