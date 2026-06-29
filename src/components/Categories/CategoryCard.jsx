function CategoryCard({ data, large = false }) {
  return (
    <div
      className={`
        bg-[#f7fcfc]
        border border-gray-100
        rounded-3xl
        p-8
        shadow-sm
        flex flex-col
        ${large ? "min-h-[1080px]" : "min-h-[330px]"}
      `}
    >
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <img
          src={data.icon}
          alt={data.title}
          className="w-5 h-5 object-contain"
        />

        <h3 className="text-[17px] font-bold text-[#183b6b]">
          {data.title}
        </h3>
      </div>

      {/* List */}
      <ul className="space-y-3 flex-1">
        {data.items.map((item, index) => (
          <li
            key={index}
            className="flex items-start text-gray-500 text-[14px]"
          >
            <span className="mr-3 text-gray-400">-</span>
            {item}
          </li>
        ))}
      </ul>

      {/* Footer */}
      <button className="mt-6 text-[#2ec7b7] font-semibold text-[14px] hover:underline text-left">
        » All Categories
      </button>
    </div>
  );
}

export default CategoryCard;