import { useState } from "react";
import { Search } from "lucide-react";
import Checkbox from "./Checkbox.jsx";

const effects = [
  "For Eyebrows",
  "For Eyes",
  "For Throat",
  "For Lips",
  "For Respiratory Tract",
  "For Stomach",
];

function EffectFilter() {
  const [checked, setChecked] = useState(["For Respiratory Tract"]);

  function toggle(effect) {
    setChecked((prev) =>
      prev.includes(effect) ? prev.filter((e) => e !== effect) : [...prev, effect]
    );
  }

  return (
    <div>
      <p className="text-sm font-semibold text-gray-700 mb-3">Effect</p>

      <div className="relative mb-3">
        <Search className="w-3.5 h-3.5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          placeholder="Search"
          className="w-full border border-gray-200 rounded-full pl-8 pr-3 py-2 text-sm outline-none focus:border-teal-400"
        />
      </div>

      <ul className="space-y-2.5">
        {effects.map((effect) => (
          <li key={effect}>
            <Checkbox
              checked={checked.includes(effect)}
              onChange={() => toggle(effect)}
              label={effect}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EffectFilter;
