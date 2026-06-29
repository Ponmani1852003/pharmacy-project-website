function CategoryTabs() {
  const tabs = [
    "Offers",
    "Discounts",
    "COVID-19",
    "Allergy",
    "Medical Cosmetics",
    "Stomach",
    "Joints",
    "More",
  ];

  return (
    <div className="flex flex-wrap gap-3">
      {tabs.map((tab, index) => (
        <button
          key={index}
          className={`px-4 py-2 rounded-md text-sm ${
            index === 0
              ? "bg-[#3ED2BE] text-white"
              : index === 1
              ? "bg-orange-400 text-white"
              : "bg-white border border-gray-300 text-gray-700"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

export default CategoryTabs;