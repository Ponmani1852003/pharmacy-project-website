import { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaStar } from "react-icons/fa";

const badgeStyles = {
  day: { label: "Deal of the Day", className: "bg-teal-500" },
  today: { label: "Today Only", className: "bg-blue-500" },
};

function ProductCard({ product }) {
  const [imgFailed, setImgFailed] = useState(false);
  const badge = product.badge ? badgeStyles[product.badge] : null;

  return (
    <div className="border border-gray-200 rounded-xl p-3 hover:shadow-md transition relative bg-white flex flex-col">
      {badge && (
        <span
          className={`absolute top-2 left-2 z-10 text-white text-[11px] font-semibold px-2 py-1 rounded-full ${badge.className}`}
        >
          {badge.label}
        </span>
      )}

      <Link to="/product">
        {imgFailed ? (
          <div className="h-36 w-full rounded-lg bg-gray-50 border border-dashed border-gray-300 flex items-center justify-center text-xs text-gray-400 text-center px-2">
            Add image to public{product.image}
          </div>
        ) : (
          <img
            src={product.image}
            alt={product.name}
            onError={() => setImgFailed(true)}
            className="h-36 w-full object-contain mb-2"
          />
        )}
      </Link>

      <div className="flex items-center gap-2 text-xs mt-1">
        <span className={product.inStock ? "text-teal-600" : "text-red-500"}>
          {product.inStock ? "In Stock" : "Out of Stock"}
        </span>
        <span className="flex items-center gap-0.5 text-amber-400">
          {Array.from({ length: 5 }).map((_, i) => (
            <FaStar key={i} className={i < product.rating ? "" : "text-gray-200"} />
          ))}
        </span>
      </div>

      <Link to="/product" className="text-sm font-medium text-gray-800 mt-1.5 leading-snug hover:text-teal-600">
        {product.name}
      </Link>
      <p className="text-xs text-gray-500 mt-1">Brand: {product.brand}</p>
      <p className="text-xs text-gray-500">Pack quantity: {product.packQty}</p>
      <p className="text-xs text-gray-500">Item code: {product.code}</p>

      <div className="flex items-end justify-between mt-3 pt-2">
        <div>
          <p className="text-teal-600 font-bold text-lg leading-tight">{product.price} RUB</p>
          {product.oldPrice && (
            <p className="text-gray-400 text-xs line-through">{product.oldPrice} RUB</p>
          )}
        </div>
        <button
          aria-label="Add to cart"
          className="w-9 h-9 rounded-full bg-teal-400 hover:bg-teal-500 flex items-center justify-center text-white shrink-0 transition-colors"
        >
          <FaShoppingCart className="text-sm" />
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
