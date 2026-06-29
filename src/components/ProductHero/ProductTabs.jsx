import { useState } from "react";

const tabs = ["Main", "Instructions", "Variants", "Reviews", "Delivery", "Pickup"];

function ProductTabs() {
  const [active, setActive] = useState("Main");

  return (
    <div className="border-b border-gray-200 mb-6">
      <div className="flex gap-8 overflow-x-auto no-scrollbar">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`pb-3 text-sm font-semibold whitespace-nowrap border-b-2 transition-colors ${
              active === tab
                ? "text-teal-500 border-teal-500"
                : "text-gray-500 border-transparent hover:text-gray-700"
            }`}
          >
            {tab.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ProductTabs;
