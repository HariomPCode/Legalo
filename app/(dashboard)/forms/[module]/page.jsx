'use client';
import React, { useEffect, useState } from "react";
import axios from "axios";

/* ================= CONFIG ================= */

const schema = {
  api: "https://jkumarapi.axiomos.in/event",
  title: "Scheduled Events",
  columns: [
    {
      label: "Title",
      field: "title",
      type: "text",
      filter: true,
    },
    {
      label: "Description",
      field: "description",
      type: "textarea",
    },
    {
      label: "Category",
      field: "category",
      type: "dropdown",
      options: [
        "Toolbox Talk",
        "Induction",
        "Safety Training",
        "Audit",
        "Inspection",
        "EHS Meeting",
        "Mock Drill",
        "Safety Walkdown",
        "Emergency Drill",
        "General Event",
      ],
      filter: true,
    },
    {
      label: "Meeting Link",
      field: "meetingLink",
      type: "text",
    },
    {
      label: "Start Date",
      field: "startDate",
      type: "date",
      filter: true,
    },
    {
      label: "End Date",
      field: "endDate",
      type: "date",
      filter: true,
    },
    {
      label: "Start Time",
      field: "startTime",
      type: "time",
    },
    {
      label: "End Time",
      field: "endTime",
      type: "time",
    },
    {
      label: "Duration (Minutes)",
      field: "durationMinutes",
      type: "number",
    },
    {
      label: "Geotagging",
      field: "geotagging",
      type: "geolocation",
    },
    {
      label: "Project",
      field: "project.projectName",
      type: "dropdown",
      api: "https://jkumarapi.axiomos.in/projects",
      apiTitle: "projectName",
      filter: true,
    },
    {
      label: "Area",
      field: "area",
      type: "text",
      filter: true,
    },
    {
      label: "Created By",
      field: "createdBy.name",
      type: "dropdown",
      api: "https://jkumarapi.axiomos.in/user",
      apiTitle: "name",
      filter: true,
    },
    {
      label: "Assigned To",
      field: "assignedTo.name",
      type: "checkbox",
      array: true,
      api: "https://jkumarapi.axiomos.in/user",
      apiTitle: "name",
      filter: true,
      details: true,
      boxShow: ["userId", "name", "designation", "emailId", "phone"],
    },
    {
      label: "Escalation To",
      field: "escalationTo.name",
      type: "checkbox",
      array: true,
      api: "https://jkumarapi.axiomos.in/user",
      apiTitle: "name",
      filter: true,
      details: true,
      boxShow: ["userId", "name", "designation", "emailId", "phone"],
    },
    {
      label: "Recurrence Settings",
      field: "recurrence",
      type: "subObject",
      subFields: [
        {
          label: "Frequency",
          field: "frequency",
          type: "dropdown",
          options: ["none", "daily", "weekly", "monthly", "yearly"],
        },
        {
          label: "Interval",
          field: "interval",
          type: "number",
        },
        {
          label: "Days of Week",
          field: "daysOfWeek",
          type: "dropdown",
          options: ["1", "2", "3", "4", "5", "6", "7"],
        },
        {
          label: "End Recurrence",
          field: "endRecurrence",
          type: "date",
        },
        {
          label: "Auto Generate Instances",
          field: "autoGenerateInstances",
          type: "boolean",
        },
      ],
    },
    {
      label: "Reminder Settings",
      field: "reminders",
      type: "subObject",
      subFields: [
        {
          label: "Time Before (Minutes)",
          field: "timeBefore",
          type: "number",
        },
        {
          label: "Push Notification",
          field: "push",
          type: "boolean",
        },
        {
          label: "Email",
          field: "email",
          type: "boolean",
        },
        {
          label: "SMS",
          field: "sms",
          type: "boolean",
        },
      ],
    },
    {
      label: "Participants",
      field: "participants",
      type: "subObject",
      subFields: [
        {
          label: "Labour",
          field: "labour",
          type: "dropdown",
          api: "https://jkumarapi.axiomos.in/labour",
          apiTitle: "name",
        },
        {
          label: "Status",
          field: "status",
          type: "dropdown",
          options: ["Present", "Absent", "Late", "Excused"],
        },
        {
          label: "Marked By",
          field: "markedBy",
          type: "dropdown",
          api: "https://jkumarapi.axiomos.in/user",
          apiTitle: "name",
        },
        {
          label: "Marked At",
          field: "markedAt",
          type: "date",
        },
      ],
    },
    {
      label: "Evidence Photo",
      field: "evidencePhotos",
      type: "imageLink",
      uploadApi: "https://jkumarapi.axiomos.in/event/image",
    },
    {
      label: "Status",
      field: "status",
      type: "dropdown",
      options: [
        "Upcoming",
        "In Progress",
        "Completed",
        "Cancelled",
        "Delayed",
        "Expired",
      ],
      filter: true,
    },
    {
      label: "Auto Status Update",
      field: "autoStatusUpdate",
      type: "boolean",
    },
    {
      label: "Is Overdue",
      field: "isOverdue",
      type: "boolean",
      edit: false,
    },
    {
      label: "Created At",
      field: "createdAt",
      type: "date",
      filter: true,
    },
    {
      label: "Updated At",
      field: "updatedAt",
      type: "date",
      filter: true,
    },
  ],
};


/* ================= PAGE ================= */

export default function EventDynamicForm() {
  const [formData, setFormData] = useState({});
  const [optionsCache, setOptionsCache] = useState({});
  const [openSections, setOpenSections] = useState({});

  /* ---------- HELPERS ---------- */

  const getValueByPath = (obj, path) =>
    path.split(".").reduce((acc, key) => acc?.[key], obj);

  const setValueByPath = (path, value) => {
    setFormData(prev => {
      const copy = { ...prev };
      let ref = copy;
      const keys = path.split(".");

      keys.slice(0, -1).forEach(k => {
        if (!ref[k]) ref[k] = {};
        ref = ref[k];
      });

      ref[keys.at(-1)] = value;
      return copy;
    });
  };

  /* ---------- API OPTIONS ---------- */

  const loadOptions = async (api, titleKey) => {
    if (optionsCache[api]) return;

    const res = await axios.get(api);
    const data = res.data?.data || res.data || [];

    setOptionsCache(prev => ({
      ...prev,
      [api]: data.map(item => ({
        label: item[titleKey],
        value: item
      }))
    }));
  };

  /* ---------- RECURSIVE FIELD RENDERER ---------- */

  const renderField = (field, parentPath = "") => {
    if (field.edit === false) return null;

    const path = parentPath ? `${parentPath}.${field.field}` : field.field;
    const value = getValueByPath(formData, path);

    switch (field.type) {
      case "text":
      case "date":
      case "time":
      case "number":
        return (
          <input
            type={field.type}
            value={value || ""}
            onChange={e => setValueByPath(path, e.target.value)}
            className="w-full rounded-md border px-3 py-2"
          />
        );

      case "textarea":
        return (
          <textarea
            rows={3}
            value={value || ""}
            onChange={e => setValueByPath(path, e.target.value)}
            className="w-full rounded-md border px-3 py-2"
          />
        );

      case "dropdown":
        if (field.api) loadOptions(field.api, field.apiTitle);

        const options =
          field.options ||
          optionsCache[field.api]?.map(o => o.label) ||
          [];

        return (
          <select
            value={value || ""}
            onChange={e => setValueByPath(path, e.target.value)}
            className="w-full rounded-md border px-3 py-2 bg-white"
          >
            <option value="">Select</option>
            {options.map(opt => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        );

      case "boolean":
        return (
          <input
            type="checkbox"
            checked={!!value}
            onChange={e => setValueByPath(path, e.target.checked)}
            className="h-5 w-5 accent-blue-600"
          />
        );

      case "checkbox":
        if (field.api) loadOptions(field.api, field.apiTitle);
        const selected = value || [];

        return (
          <div className="space-y-2">
            {(optionsCache[field.api] || []).map(opt => (
              <label key={opt.label} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={selected.some(v => v.label === opt.label)}
                  onChange={() => {
                    const updated = selected.some(v => v.label === opt.label)
                      ? selected.filter(v => v.label !== opt.label)
                      : [...selected, opt];
                    setValueByPath(path, updated);
                  }}
                />
                <span>{opt.label}</span>
              </label>
            ))}
          </div>
        );

      case "imageLink":
        return (
          <input
            type="file"
            multiple
            className="w-full rounded-md border px-3 py-2"
          />
        );

      case "geolocation":
        return (
          <button
            type="button"
            className="rounded-md bg-gray-200 px-4 py-2 text-sm"
            onClick={() =>
              navigator.geolocation.getCurrentPosition(pos =>
                setValueByPath(path, {
                  lat: pos.coords.latitude,
                  lng: pos.coords.longitude
                })
              )
            }
          >
            Capture Location
          </button>
        );

      case "subObject":
        const isOpen = openSections[path];

        return (
          <div className="rounded-lg border bg-gray-50">
            <button
              type="button"
              onClick={() =>
                setOpenSections(prev => ({
                  ...prev,
                  [path]: !prev[path]
                }))
              }
              className="flex w-full items-center justify-between px-4 py-3 text-left font-medium"
            >
              {field.label}
              <span>{isOpen ? "−" : "+"}</span>
            </button>

            {isOpen && (
              <div className="space-y-4 px-4 pb-4">
                {field.subFields.map(sub => (
                  <div key={sub.field}>
                    <label className="block text-sm font-medium mb-1">
                      {sub.label}
                    </label>
                    {renderField(sub, path)}
                  </div>
                ))}
              </div>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  /* ---------- SUBMIT ---------- */

  const handleSubmit = async e => {
    e.preventDefault();
    console.log("FINAL PAYLOAD:", formData);
    // await axios.post(schema.api, formData);
  };

  /* ---------- UI ---------- */

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="mx-auto max-w-6xl rounded-xl bg-white p-8 shadow">
        <h1 className="mb-6 text-2xl font-semibold">{schema.title}</h1>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {schema.columns.map(field => (
            <div key={field.field} className="flex flex-col gap-1">
              {field.type !== "subObject" && (
                <label className="text-sm font-medium">{field.label}</label>
              )}
              {renderField(field)}
            </div>
          ))}

          <div className="md:col-span-2 flex justify-end">
            <button
              type="submit"
              className="rounded-lg bg-blue-600 px-6 py-2 text-white hover:bg-blue-700"
            >
              Create Event
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

