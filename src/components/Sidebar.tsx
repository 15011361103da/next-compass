"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { topics, iconMap } from "@/data/topics";

export function Sidebar() {
  const pathname = usePathname();

  const getCurrentId = () => {
    const match = pathname.match(/\/topic\/(\d+)/);
    return match ? parseInt(match[1], 10) : 0;
  };

  const currentId = getCurrentId();

  return (
    <aside className="w-64 bg-slate-900 text-slate-100 flex flex-col h-screen fixed left-0 top-0 overflow-y-auto">
      <div className="p-6 border-b border-slate-800">
        <h1 className="text-lg font-bold text-white">Next.js 大纲</h1>
        <p className="text-xs text-slate-400 mt-1">核心内部分享</p>
      </div>

      <nav className="flex-1 p-3 space-y-1">
        {topics.map((topic) => {
          const IconComponent = iconMap[topic.icon];
          const isActive = currentId === topic.id;

          return (
            <Link
              key={topic.id}
              href={`/topic/${topic.id}`}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-md text-sm transition-all duration-200 ${
                isActive
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-900/50"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`}
            >
              <IconComponent size={18} className="flex-shrink-0" />
              <span className="flex-shrink-0 w-6 text-xs font-mono opacity-70">
                {topic.id === 0 ? "★" : topic.id}
              </span>
              <span className="truncate">{topic.title.replace(/^📖\s*/, "")}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-slate-800 text-xs text-slate-500">
        <p>共 {topics.length} 个章节</p>
      </div>
    </aside>
  );
}
