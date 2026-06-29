import { useState } from "react";

const sections = [
  { id: "personal-data", label: "Personal Data" },
  { id: "your-orders", label: "Your Orders" },
  { id: "feedback", label: "Feedback" },
];

function AccountSidebar() {
  const [active, setActive] = useState("personal-data");

  function handleClick(id) {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <aside className="w-full lg:w-[260px] shrink-0">
      <div className="border border-gray-200 rounded-xl overflow-hidden">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => handleClick(section.id)}
            className={`w-full text-left px-5 py-4 text-sm font-semibold uppercase tracking-wide border-b border-gray-100 last:border-0 transition-colors ${
              active === section.id
                ? "bg-teal-50 text-teal-600"
                : "text-gray-700 hover:bg-gray-50"
            }`}
          >
            {section.label}
          </button>
        ))}
      </div>
    </aside>
  );
}

export default AccountSidebar;
