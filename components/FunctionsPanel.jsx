"use client";

import Link from "next/link";
import { navbarConfig } from "@/data/navbarConfig";

export default function FunctionsPanel() {
  const grouped = navbarConfig.Functions.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <div className="space-y-10">
      {Object.entries(grouped).map(([category, items]) => (
        <div key={category}>
          <h2 className="text-xl font-bold mb-4">{category}</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {items.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className="border rounded-lg p-4 flex items-center gap-3 hover:bg-gray-50 transition"
              >
                <i className={`fas ${item.icon} text-blue-500`} />
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
