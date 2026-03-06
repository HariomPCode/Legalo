"use client";

import { useState } from "react";
import CONTACT_PAGE from "@/data/Contact_Page";

// Determine if a field pair should be side by side
function groupFields(fields) {
  const groups = [];
  let i = 0;
  while (i < fields.length) {
    const field = fields[i];
    const next = fields[i + 1];
    if (field.type !== "textarea" && next && next.type !== "textarea") {
      groups.push([field, next]);
      i += 2;
    } else {
      groups.push([field]);
      i += 1;
    }
  }
  return groups;
}

export default function ContactPage() {
  const { header, form, contactInfo, supportCard } = CONTACT_PAGE;

  const initialState = form.fields.reduce((acc, field) => {
    acc[field.name] = "";
    return acc;
  }, {});

  const [formState, setFormState] = useState(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  function handleChange(e) {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      console.log(formState);
      alert("Message submitted!");
      setIsSubmitting(false);
    }, 1000);
  }

  const fieldGroups = groupFields(form.fields);

  const inputBase =
    "w-full rounded-xl border border-gray-200 bg-white/70 backdrop-blur-sm px-4 py-3 pl-10 text-sm text-gray-900 placeholder-gray-400 shadow-sm transition-all duration-200 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 focus:bg-white hover:border-gray-300";

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50/40 overflow-hidden">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-indigo-100/50 blur-3xl" />
        <div className="absolute top-1/2 -left-32 w-80 h-80 rounded-full bg-violet-100/40 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-sky-100/40 blur-3xl" />
        {/* Subtle grid */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.015]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid"
              width="32"
              height="32"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 32 0 L 0 0 0 32"
                fill="none"
                stroke="#6366f1"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        {/* Hero header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 border border-indigo-100 px-4 py-1.5 mb-6">
            <span className="inline-block w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
            <span className="text-xs font-medium text-indigo-600 tracking-wide uppercase">
              We&apos;d love to hear from you
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
            {header.title}
          </h1>
          <p className="mt-4 text-lg text-gray-500 leading-relaxed">
            {header.description}
          </p>
        </div>

        {/* Main grid */}
        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Form card — 3 cols */}
          <div className="lg:col-span-3">
            <div className="relative rounded-2xl border border-gray-200/80 bg-white/80 backdrop-blur-md shadow-xl shadow-gray-100/60 p-8 sm:p-10">
              {/* Subtle top accent */}
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-indigo-300 to-transparent" />

              <h2 className="text-xl font-semibold text-gray-900 mb-1">
                {form.title}
              </h2>
              <p className="text-sm text-gray-400 mb-8">
                All fields marked with * are required.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {fieldGroups.map((group, gi) =>
                  group.length === 2 ? (
                    <div key={gi} className="grid sm:grid-cols-2 gap-4">
                      {group.map((field) => (
                        <FieldWrapper
                          key={field.name}
                          field={field}
                          value={formState[field.name]}
                          onChange={handleChange}
                          onFocus={() => setFocusedField(field.name)}
                          onBlur={() => setFocusedField(null)}
                          focused={focusedField === field.name}
                          inputBase={inputBase}
                        />
                      ))}
                    </div>
                  ) : (
                    <FieldWrapper
                      key={group[0].name}
                      field={group[0]}
                      value={formState[group[0].name]}
                      onChange={handleChange}
                      onFocus={() => setFocusedField(group[0].name)}
                      onBlur={() => setFocusedField(null)}
                      focused={focusedField === group[0].name}
                      inputBase={inputBase}
                    />
                  ),
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="relative w-full mt-2 rounded-xl bg-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-indigo-200 transition-all duration-200 hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-200 active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <span
                    className={`flex items-center justify-center gap-2 transition-opacity ${isSubmitting ? "opacity-0" : "opacity-100"}`}
                  >
                    {form.submitLabel}
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </span>
                  {isSubmitting && (
                    <span className="absolute inset-0 flex items-center justify-center">
                      <i className="fas fa-arrow-right text-sm"></i>
                    </span>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Right column — 2 cols */}
          <div className="lg:col-span-2 space-y-4">
            {contactInfo.map((info, i) => (
              <div
                key={i}
                className="group relative rounded-2xl border border-gray-200/80 bg-white/70 backdrop-blur-sm p-5 flex items-start gap-4 shadow-sm transition-all duration-200 hover:shadow-md hover:border-indigo-200/60 hover:-translate-y-0.5"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100/80 flex items-center justify-center text-indigo-500">
                  <i className={`${info.icon} text-lg`}></i>
                </div>

                <div className="min-w-0">
                  <h3 className="text-sm font-semibold text-gray-900">
                    {info.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-0.5 break-words">
                    {info.value}
                  </p>
                </div>
              </div>
            ))}

            {/* Support card */}
            <div className="relative rounded-2xl overflow-hidden border border-indigo-200/60 bg-gradient-to-br from-indigo-600 to-violet-600 p-6 shadow-lg shadow-indigo-200/40">
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/10 blur-2xl translate-x-8 -translate-y-8" />
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center mb-4">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.75}
                      d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-base font-semibold text-white mb-2">
                  {supportCard.title}
                </h3>
                <p className="text-sm text-indigo-100/90 leading-relaxed">
                  {supportCard.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FieldWrapper({
  field,
  value,
  onChange,
  onFocus,
  onBlur,
  focused,
  inputBase,
}) {
  const icon = field.icon || "fas fa-pen";

  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={field.name}
        className="text-xs font-medium text-gray-600 tracking-wide"
      >
        {field.label}
        {field.required && <span className="ml-1 text-indigo-400">*</span>}
      </label>

      <div className="relative group">
        {/* Icon */}
        <i
          className={`${icon} absolute left-3 top-3.5 text-sm transition-colors duration-200 ${
            focused ? "text-indigo-500" : "text-gray-400"
          }`}
        ></i>

        {field.type === "textarea" ? (
          <textarea
            id={field.name}
            name={field.name}
            rows={field.rows || 4}
            value={value}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            required={field.required}
            placeholder={field.placeholder}
            className={`${inputBase} resize-none pt-3`}
          />
        ) : (
          <input
            id={field.name}
            type={field.type}
            name={field.name}
            value={value}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            required={field.required}
            placeholder={field.placeholder}
            className={inputBase}
          />
        )}
      </div>
    </div>
  );
}
