import { Trash2 } from "lucide-react";
import ProductCard from "../ProductGrid/ProductCard.jsx";

function FavoritesGrid({ items, onClearAll, onAddAllToCart }) {
  if (items.length === 0) {
    return (
      <div className="border border-dashed border-gray-300 rounded-2xl p-12 text-center text-gray-400">
        You haven't added any favorites yet.
      </div>
    );
  }

  return (
    <div>
      <div className="flex flex-wrap items-center justify-end gap-4 mb-6">
        <button
          onClick={onClearAll}
          className="flex items-center gap-2 text-sm text-gray-500 hover:text-red-500 transition-colors"
        >
          <Trash2 className="w-4 h-4" />
          Clear All
        </button>
        <button
          onClick={onAddAllToCart}
          className="bg-teal-400 hover:bg-teal-500 text-white text-sm font-semibold uppercase tracking-wide rounded-full px-6 py-3 transition-colors"
        >
          Add All to Cart
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {items.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default FavoritesGrid;
