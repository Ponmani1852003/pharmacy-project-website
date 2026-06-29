import { FaStar } from "react-icons/fa";

const specs = [
  { label: "Manufacturer", value: "Abbott, USA" },
  { label: "Active ingredient", value: "Pancreatin" },
  { label: "Shelf life", value: "Long shelf life" },
  { label: "Country of origin", value: "USA" },
];

function ProductCharacteristics({ rating = 4, reviewCount = 6, sku = "25563" }) {
  return (
    <div>
      <div className="flex items-center gap-3 text-sm mb-4">
        <span className="flex items-center gap-0.5 text-amber-400">
          {Array.from({ length: 5 }).map((_, i) => (
            <FaStar key={i} className={i < rating ? "" : "text-gray-200"} />
          ))}
        </span>
        <a href="#reviews" className="text-gray-500 hover:text-teal-500">
          {reviewCount} reviews
        </a>
        <span className="text-teal-600 font-medium">In Stock</span>
        <span className="text-gray-400 ml-auto">SKU: {sku}</span>
      </div>

      <p className="text-xs font-semibold text-gray-500 tracking-wide mb-3">CHARACTERISTICS</p>

      <ul className="space-y-2 text-sm text-gray-600">
        {specs.map((spec) => (
          <li key={spec.label} className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-1.5 shrink-0" />
            <span>
              {spec.label}: <span className="text-gray-800">{spec.value}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductCharacteristics;
