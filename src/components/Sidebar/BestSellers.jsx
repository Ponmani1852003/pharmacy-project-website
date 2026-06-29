import { useState } from "react";

const items = [
  {
    image: "/bestsellers/item-1.png",
    name: "Naivex Vanni Hair, Skin & Nails capsules, 60 ct",
    price: "244",
  },
  {
    image: "/bestsellers/item-2.png",
    name: "Arbidol — cold & flu relief, 30 tablets",
    price: "145",
  },
  {
    image: "/bestsellers/item-3.png",
    name: "Desmonal — acne treatment course, 100 tablets",
    price: "444",
  },
];

function BestSellerItem({ item }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="flex items-center gap-3">
      <div className="relative shrink-0">
        <span className="absolute -top-1 -left-1 z-10 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
          HIT
        </span>
        {failed ? (
          <div className="w-14 h-14 rounded-lg bg-gray-100 border border-dashed border-gray-300" />
        ) : (
          <img
            src={item.image}
            alt={item.name}
            onError={() => setFailed(true)}
            className="w-14 h-14 rounded-lg object-cover"
          />
        )}
      </div>
      <div>
        <p className="text-sm text-gray-700 leading-snug">{item.name}</p>
        <p className="text-teal-600 font-bold text-sm mt-1">{item.price} RUB</p>
      </div>
    </div>
  );
}

function BestSellers() {
  return (
    <div className="mt-6">
      <p className="text-xs font-semibold text-gray-500 tracking-wide mb-3">BESTSELLERS</p>
      <div className="space-y-4">
        {items.map((item) => (
          <BestSellerItem key={item.name} item={item} />
        ))}
      </div>
    </div>
  );
}

export default BestSellers;
