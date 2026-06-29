import { Square, CheckSquare } from "lucide-react";

function Checkbox({ checked, onChange, label }) {
  const Icon = checked ? CheckSquare : Square;

  return (
    <label className="flex items-center gap-2 cursor-pointer select-none">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="sr-only"
      />
      <Icon
        className={`w-4 h-4 shrink-0 ${checked ? "text-[#1FBCA8]" : "text-gray-300"}`}
        strokeWidth={2}
      />
      <span className={`text-sm ${checked ? "text-[#1FBCA8] font-medium" : "text-gray-600"}`}>
        {label}
      </span>
    </label>
  );
}

export default Checkbox;
