const tags = [
  "Manufacturers",
  "Product Overview",
  "Indications",
  "How to Use",
  "Dosage",
  "Description",
  "Key Benefits",
  "Storage",
  "Shelf Life",
  "Active Ingredient",
  "Dosage Form",
];

const ArticleTags = () => {
  return (
    <div>

      <h3 className="text-[14px] font-semibold text-[#333] uppercase mb-5">
        Tags
      </h3>

      <div className="flex flex-wrap gap-3">

        {tags.map((tag, index) => (
          <button
            key={index}
            className={`px-5 py-2 rounded-full text-[14px] transition ${
              index === 0
                ? "bg-[#28C8A4] text-white"
                : "bg-[#F5F6F7] text-[#666] hover:bg-[#28C8A4] hover:text-white"
            }`}
          >
            {tag}
          </button>
        ))}

      </div>

    </div>
  );
};

export default ArticleTags;