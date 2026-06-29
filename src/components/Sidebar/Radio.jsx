function Radio({ checked, onChange, label, name }) {
  return (
    <label className="flex items-center gap-2 cursor-pointer select-none">
      <input
        type="radio"
        name={name}
        checked={checked}
        onChange={onChange}
        className="sr-only"
      />
      <span
        className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 transition-colors ${
          checked ? "border-[#1FBCA8]" : "border-gray-300"
        }`}
      >
        {checked && <span className="w-2 h-2 rounded-full bg-[#1FBCA8]" />}
      </span>
      <span className={`text-sm ${checked ? "text-[#1FBCA8] font-medium" : "text-gray-600"}`}>
        {label}
      </span>
    </label>
  );
}

export default Radio;
