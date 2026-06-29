import { useState } from "react";
import { ArrowRight } from "lucide-react";

function OrderSummary({ subtotal, discount, onApplyPromo }) {
  const [promoCode, setPromoCode] = useState("");
  const total = Math.max(subtotal - discount, 0);

  function handleSubmit(e) {
    e.preventDefault();
    onApplyPromo?.(promoCode);
  }

  return (
    <div className="border border-gray-200 rounded-2xl p-6 w-full lg:w-[320px] shrink-0">
      <h3 className="text-xl font-bold text-gray-800 mb-5">Your Order</h3>

      <div className="flex items-center justify-between text-sm mb-3">
        <span className="text-gray-500">Discount</span>
        <span className="text-gray-700">-{discount.toLocaleString()} RUB</span>
      </div>

      <div className="flex items-center justify-between text-sm pb-5 border-b border-gray-100 mb-5">
        <span className="text-gray-500">Subtotal (excl. delivery)</span>
        <span className="font-bold text-gray-800">{total.toLocaleString()} RUB</span>
      </div>

      <button className="w-full bg-teal-400 hover:bg-teal-500 text-white text-sm font-semibold uppercase tracking-wide rounded-full py-3.5 transition-colors mb-6">
        Place Order
      </button>

      <h4 className="text-sm font-bold text-gray-800 mb-3">Promo Code</h4>
      <form onSubmit={handleSubmit} className="relative">
        <input
          type="text"
          value={promoCode}
          onChange={(e) => setPromoCode(e.target.value)}
          placeholder="Enter promo code"
          className="w-full border border-gray-200 rounded-full pl-5 pr-12 py-3 text-sm outline-none focus:border-teal-400"
        />
        <button
          type="submit"
          aria-label="Apply promo code"
          className="absolute right-1.5 top-1.5 w-8 h-8 rounded-full bg-teal-400 hover:bg-teal-500 text-white flex items-center justify-center transition-colors"
        >
          <ArrowRight className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
}

export default OrderSummary;
