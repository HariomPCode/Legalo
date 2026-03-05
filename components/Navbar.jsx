"use client";

import Link from "next/link";
import { navbarConfig } from "@/data/navbarConfig";

export default function Navbar() {
  const logout = () => {
    console.log("Logging out...");
  };

  return (
    <div className="h-screen w-64 bg-slate-900 text-white flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-slate-700">
        <img
          src={navbarConfig.CompanyLogo}
          alt="Company Logo"
          className="w-36"
        />
      </div>

      {/* Menu */}
      <div className="flex flex-col p-4 gap-2">
        {navbarConfig.menu.map((item, index) => {
          if (item.onClick === "logout") {
            return (
              <button
                key={index}
                onClick={logout}
                className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-slate-800 transition"
              >
                <i className={`fas ${item.icon}`} />
                {item.name}
              </button>
            );
          }

          return (
            <Link
              key={index}
              href={item.link}
              className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-slate-800 transition"
            >
              <i className={`fas ${item.icon}`} />
              {item.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
