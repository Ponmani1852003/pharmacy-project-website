import { Trash2 } from "lucide-react";
import CartItem from "./CartItem.jsx";

function CartItems({ items, onIncrement, onDecrement, onRemove, onClear }) {
  if (items.length === 0) {
    return (
      <div className="border border-dashed border-gray-300 rounded-2xl p-12 text-center text-gray-400">
        Your cart is empty.
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-end mb-4">
        <button
          onClick={onClear}
          className="flex items-center gap-2 text-sm text-gray-500 hover:text-red-500 transition-colors"
        >
          <Trash2 className="w-4 h-4" />
          Clear Cart
        </button>
      </div>

      <div className="space-y-5">
        {items.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onRemove={onRemove}
          />
        ))}
      </div>
    </div>
  );
}

export default CartItems;
