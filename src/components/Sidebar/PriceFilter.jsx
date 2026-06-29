import { useState } from "react";

function PriceFilter() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  return (
    <div>
      <p className="text-sm font-semibold text-gray-700 mb-3">Price</p>

      <div className="flex items-center gap-3 mb-3">
        <input
          type="number"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          placeholder="From"
          className="w-full border border-gray-200 rounded-full px-3 py-2 text-sm outline-none focus:border-teal-400"
        />
        <input
          type="number"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          placeholder="To"
          className="w-full border border-gray-200 rounded-full px-3 py-2 text-sm outline-none focus:border-teal-400"
        />
      </div>

      <input type="range" min="0" max="100000" className="w-full accent-[#1FBCA8]" />
    </div>
  );
}

export default PriceFilter;
