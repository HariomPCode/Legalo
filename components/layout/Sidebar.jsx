import Link from "next/link";
import { CalendarDays, FileText, LayoutDashboard } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-[#0f172a] text-gray-200 shadow-xl overflow-">
      {/* Logo / Title */}
      <div className="flex items-center gap-2 px-6 py-5 border-b border-gray-700">
        <LayoutDashboard className="w-6 h-6 text-indigo-400" />
        <span className="text-lg font-semibold tracking-wide">
          Dashboard
        </span>
      </div>

      {/* Navigation */}
      <nav className="px-4 py-6 space-y-2">
        <Link
          href="/forms/event"
          className="flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium
                     hover:bg-indigo-500 hover:text-white transition-all"
        >
          <CalendarDays className="w-5 h-5" />
          Event Form
        </Link>

        <Link
          href="/forms/workpermit"
          className="flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium
                     hover:bg-indigo-500 hover:text-white transition-all"
        >
          <FileText className="w-5 h-5" />
          Work Permit
        </Link>
      </nav>
    </aside>
  );
}
