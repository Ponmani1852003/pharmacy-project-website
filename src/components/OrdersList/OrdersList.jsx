import { useState } from "react";

const orderItems = [
  { image: "/products/product-1.png", name: "Velson film-coated tablets, 3mg, 30 ct", qty: 1, price: "41,108", oldPrice: "49,999" },
  { image: "/products/product-4.png", name: "Velson film-coated tablets, 3mg, 30 ct", qty: 1, price: "41,108" },
  { image: "/products/product-2.png", name: "Velson film-coated tablets, 3mg, 30 ct", qty: 1, price: "41,108", oldPrice: "49,999" },
  { image: "/products/product-5.png", name: "Velson film-coated tablets, 3mg, 30 ct", qty: 1, price: "41,108" },
];

function ItemImage({ src, alt }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return <div className="w-14 h-14 rounded-lg bg-gray-100 border border-dashed border-gray-300 shrink-0" />;
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setFailed(true)}
      className="w-14 h-14 rounded-lg object-cover shrink-0"
    />
  );
}

function OrdersList() {
  return (
    <section id="your-orders" className="scroll-mt-24">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Orders</h2>

      <div className="border border-gray-200 rounded-2xl p-6 max-w-3xl">
        <div className="flex items-center justify-between flex-wrap gap-2 pb-4 border-b border-gray-100">
          <div className="flex items-center gap-6 text-sm">
            <span className="text-gray-500">16.12.2021</span>
            <span className="text-gray-700 font-medium">Order #154544516</span>
          </div>
          <span className="text-teal-500 font-semibold text-sm">Completed</span>
        </div>

        <div className="divide-y divide-gray-100">
          {orderItems.map((item, i) => (
            <div key={i} className="flex items-center gap-4 py-4">
              <ItemImage src={item.image} alt={item.name} />
              <div className="flex-1">
                <p className="text-sm text-gray-700">{item.name}</p>
                <p className="text-xs text-gray-400 mt-1">{item.qty} item</p>
              </div>
              <div className="text-right shrink-0">
                <p className="font-bold text-gray-800">{item.price} RUB</p>
                {item.oldPrice && (
                  <p className="text-xs text-gray-400 line-through">{item.oldPrice} RUB</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-4 mt-5">
          <button className="bg-teal-400 hover:bg-teal-500 text-white text-sm font-semibold uppercase tracking-wide rounded-full px-7 py-3 transition-colors">
            Leave a Review
          </button>
          <button className="border border-teal-400 text-teal-500 hover:bg-teal-50 text-sm font-semibold uppercase tracking-wide rounded-full px-7 py-3 transition-colors">
            Repeat Order
          </button>
        </div>
      </div>
    </section>
  );
}

export default OrdersList;
