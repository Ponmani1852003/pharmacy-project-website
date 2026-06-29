import { useState } from "react";
import { Search } from "lucide-react";
import Checkbox from "./Checkbox.jsx";

const countries = ["Belarus", "Germany", "Denmark", "India", "Spain", "Italy", "China"];

function CountryFilter() {
  const [checked, setChecked] = useState(["Italy"]);

  function toggle(country) {
    setChecked((prev) =>
      prev.includes(country) ? prev.filter((c) => c !== country) : [...prev, country]
    );
  }

  return (
    <div>
      <p className="text-sm font-semibold text-gray-700 mb-3">Country</p>

      <div className="relative mb-3">
        <Search className="w-3.5 h-3.5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          placeholder="Search"
          className="w-full border border-gray-200 rounded-full pl-8 pr-3 py-2 text-sm outline-none focus:border-teal-400"
        />
      </div>

      <ul className="space-y-2.5">
        {countries.map((country) => (
          <li key={country}>
            <Checkbox
              checked={checked.includes(country)}
              onChange={() => toggle(country)}
              label={country}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CountryFilter;
