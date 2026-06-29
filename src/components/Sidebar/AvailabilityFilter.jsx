import { useState } from "react";
import Radio from "./Radio.jsx";

function AvailabilityFilter() {
  const [value, setValue] = useState("in-stock");

  return (
    <div>
      <p className="text-sm font-semibold text-gray-700 mb-3">Availability</p>

      <div className="space-y-2.5 mb-5">
        <Radio
          name="availability"
          checked={value === "in-stock"}
          onChange={() => setValue("in-stock")}
          label="In Stock"
        />
        <Radio
          name="availability"
          checked={value === "on-order"}
          onChange={() => setValue("on-order")}
          label="On Order"
        />
      </div>

      <div className="flex items-center gap-3">
        <button className="flex-1 bg-teal-400 hover:bg-teal-500 text-white text-sm font-semibold rounded-full py-2.5 transition-colors">
          Apply
        </button>
        <button className="flex-1 border border-gray-300 text-gray-600 hover:border-teal-400 hover:text-teal-500 text-sm font-semibold rounded-full py-2.5 transition-colors">
          Reset
        </button>
      </div>
    </div>
  );
}

export default AvailabilityFilter;
