import { useState } from "react";
import { ChevronDown } from "lucide-react";

const items = [
  "Attend prep courses",
  "Adopt and filter information",
  "Read books, watch training videos",
  "Engage in physical activity",
  "The last point is what we'll discuss",
  "Adopt and filter information",
];

function ArticleSidebar() {
  const [open, setOpen] = useState(true);

  return (
    <div className="bg-teal-50/60 rounded-2xl p-5">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between font-bold text-gray-800"
      >
        Table of Contents
        <ChevronDown className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <ul className="mt-4 space-y-3 text-sm text-gray-600">
          {items.map((item, i) => (
            <li key={i}>
              <a href="#" className="hover:text-teal-500 transition-colors">
                {item}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ArticleSidebar;
