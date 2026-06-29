function NumberedList({ items }) {
  return (
    <ol className="space-y-4">
      {items.map((item, i) => (
        <li key={i} className="flex gap-4">
          <span className="w-7 h-7 rounded-full bg-teal-50 text-teal-600 font-bold text-sm flex items-center justify-center shrink-0">
            {i + 1}
          </span>
          <p className="text-gray-600 leading-relaxed">{item}</p>
        </li>
      ))}
    </ol>
  );
}

export default NumberedList;
