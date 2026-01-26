"use client";

import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import TABLE_CONFIG from "@/configs/okgNodesTable.config";

const buildEmptyForm = () => {
  const obj = {};
  TABLE_CONFIG.columns.forEach((col) => (obj[col.field] = ""));
  return obj;
};

export default function FormModal({
  initialData,
  dropdownOptions,
  onClose,
  onSubmit,
}) {
  const [formData, setFormData] = useState(buildEmptyForm());

  // If edit : prefill data
  useEffect(() => {
    if (initialData) {
      const filled = buildEmptyForm();

      TABLE_CONFIG.columns.forEach(
        (col) => (filled[col.field] = initialData[col.field] ?? ""),
      );

      setFormData(filled);
    }
  }, [initialData]);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    onSubmit(formData);
    onClose();
  };

  const renderInput = (col) => {
    const value = formData[col.field];

    switch (col.type) {
      case "text":
        return (
          <input
            value={value}
            onChange={(e) => handleChange(col.field, e.target.value)}
            className="w-full border px-3 py-2 rounded"
          />
        );

      case "dropdown":
        const options = dropdownOptions[col.field] || [];
        return (
          <select
            value={value}
            onChange={(e) => handleChange(col.field, e.target.value)}
            className="w-full border px-3 py-2 rounded"
          >
            <option value="">Select...</option>
            {options.map((opt, i) => (
              <option key={i} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        );

      case "boolean":
        return (
          <select
            value={value}
            onChange={(e) => handleChange(col.field, e.target.value === "true")}
            className="w-full border px-3 py-2 rounded"
          >
            <option value="">Select...</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        );

      case "Date":
        return (
          <input
            type="date"
            value={value ? value.split("T")[0] : ""}
            onChange={(e) => handleChange(col.field, e.target.value)}
            className="w-full border px-3 py-2 rounded"
          />
        );

      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl">
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b">
          <h2 className="text-lg font-semibold">
            {initialData ? "Edit Record" : "Create Record"}
          </h2>
          <button onClick={onClose}>
            <X />
          </button>
        </div>

        {/* Form */}
        <div className="p-6 space-y-4 max-h-[70vh] overflow-y-auto">
          {TABLE_CONFIG.columns.map((col) => (
            <div key={col.field}>
              <label className="block text-sm font-medium mb-1">
                {col.label}
              </label>
              {renderInput(col)}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t flex justify-end gap-3">
          <button onClick={onClose} className="px-4 py-2 border rounded">
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            {initialData ? "Update" : "Create"}
          </button>
        </div>
      </div>
    </div>
  );
}
