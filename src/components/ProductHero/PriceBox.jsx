import { useState } from "react";
import { Heart, Minus, Plus } from "lucide-react";

function PriceBox({ price = "9,999,999", oldPrice = "10,000,000" }) {
  const [qty, setQty] = useState(1);
  const [liked, setLiked] = useState(false);

  return (
    <div className="border border-gray-200 rounded-2xl p-5 w-full lg:w-[260px] shrink-0">
      <div className="flex items-start justify-between mb-1">
        <p className="text-xs text-gray-500">Current price</p>
        <button
          onClick={() => setLiked((v) => !v)}
          aria-label="Add to favorites"
          className={`transition-colors ${liked ? "text-red-500" : "text-gray-300 hover:text-red-400"}`}
        >
          <Heart className="w-5 h-5" fill={liked ? "currentColor" : "none"} />
        </button>
      </div>

      <p className="text-sm text-gray-400 line-through">{oldPrice} RUB</p>
      <p className="text-2xl font-bold text-gray-800 mb-4">{price} RUB</p>

      <div className="flex items-center gap-3 mb-3">
        <div className="flex items-center border border-gray-200 rounded-full">
          <button
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            className="w-8 h-9 flex items-center justify-center text-gray-500 hover:text-teal-500"
          >
            <Minus className="w-3.5 h-3.5" />
          </button>
          <span className="w-8 text-center text-sm font-medium">{qty}</span>
          <button
            onClick={() => setQty((q) => q + 1)}
            className="w-8 h-9 flex items-center justify-center text-gray-500 hover:text-teal-500"
          >
            <Plus className="w-3.5 h-3.5" />
          </button>
        </div>

        <button className="flex-1 bg-teal-400 hover:bg-teal-500 text-white text-sm font-semibold rounded-full py-2.5 transition-colors">
          Add to Cart
        </button>
      </div>

      <button className="w-full border border-gray-300 text-gray-700 hover:border-teal-400 hover:text-teal-500 text-sm font-semibold rounded-full py-2.5 transition-colors">
        Buy in 1 Click
      </button>
    </div>
  );
}

export default PriceBox;
