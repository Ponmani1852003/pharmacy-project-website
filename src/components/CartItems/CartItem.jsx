import { useState } from "react";
import { Minus, Plus, X } from "lucide-react";
import { FaStar } from "react-icons/fa";

function ItemImage({ src, alt }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="w-32 h-28 rounded-lg bg-gray-50 border border-dashed border-gray-300 flex items-center justify-center text-xs text-gray-400 text-center px-2 shrink-0">
        Add {src}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setFailed(true)}
      className="w-32 h-28 object-contain shrink-0"
    />
  );
}

function CartItem({ item, onIncrement, onDecrement, onRemove }) {
  return (
    <div className="relative border border-gray-200 rounded-2xl p-5 flex flex-wrap items-center gap-6">
      <button
        onClick={() => onRemove(item.id)}
        aria-label="Remove item"
        className="absolute top-3 right-3 w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-red-500 hover:border-red-300 transition-colors"
      >
        <X className="w-3.5 h-3.5" />
      </button>

      {item.badge && (
        <span className="absolute -top-2 left-4 bg-teal-500 text-white text-[11px] font-semibold px-2 py-1 rounded-full">
          Deal of the Day
        </span>
      )}

      <ItemImage src={item.image} alt={item.name} />

      <div className="flex-1 min-w-[220px]">
        <div className="flex items-center gap-2 text-xs mb-1.5">
          <span className={item.inStock ? "text-teal-600" : "text-red-500"}>
            {item.inStock ? "In Stock" : "Out of Stock"}
          </span>
          <span className="flex items-center gap-0.5 text-amber-400">
            {Array.from({ length: 5 }).map((_, i) => (
              <FaStar key={i} className={i < item.rating ? "" : "text-gray-200"} />
            ))}
          </span>
        </div>

        <p className="text-sm font-medium text-gray-800 mb-2">{item.name}</p>

        <ul className="text-xs text-gray-500 space-y-0.5">
          <li>Brand: {item.brand}</li>
          <li>Pack quantity: {item.packQty}</li>
          <li>Item code: {item.code}</li>
        </ul>
      </div>

      <div className="text-right shrink-0">
        <p className="text-lg font-bold text-gray-800">{item.price} RUB</p>
        {item.oldPrice && (
          <p className="text-xs text-gray-400 line-through">{item.oldPrice} RUB</p>
        )}
      </div>

      <div className="flex items-center gap-2 shrink-0">
        <button
          onClick={() => onDecrement(item.id)}
          aria-label="Decrease quantity"
          className="w-7 h-7 rounded-full bg-red-400 hover:bg-red-500 text-white flex items-center justify-center transition-colors"
        >
          <Minus className="w-3.5 h-3.5" />
        </button>
        <span className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-sm font-semibold text-gray-700">
          {item.qty}
        </span>
        <button
          onClick={() => onIncrement(item.id)}
          aria-label="Increase quantity"
          className="w-7 h-7 rounded-full bg-teal-400 hover:bg-teal-500 text-white flex items-center justify-center transition-colors"
        >
          <Plus className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}

export default CartItem;
