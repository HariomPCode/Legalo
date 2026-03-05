"use client";

import Link from "next/link";
import { navbarConfig } from "@/data/navbarConfig";

export default function HomeDashboard() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {navbarConfig.HomeDashboard.map((item, index) => (
        <Link
          key={index}
          href={item.link}
          className="bg-white shadow rounded-xl p-6 flex flex-col items-center justify-center hover:shadow-lg transition"
        >
          <i className={`fas ${item.icon} text-2xl text-blue-600 mb-3`} />
          <span className="font-semibold">{item.name}</span>
        </Link>
      ))}
    </div>
  );
}
