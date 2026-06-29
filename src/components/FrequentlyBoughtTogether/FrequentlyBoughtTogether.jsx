import { useState } from "react";

const bundleItems = [
  { image: "/product-detail/bundle-1.png", name: "Bicikol tablets" },
  { image: "/product-detail/bundle-2.png", name: "Femibion capsules" },
];

function BundleImage({ src, alt }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="h-32 w-full rounded-lg bg-gray-50 border border-dashed border-gray-300 flex items-center justify-center text-xs text-gray-400">
        Add image to public{src}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setFailed(true)}
      className="h-32 w-full object-contain"
    />
  );
}

function FrequentlyBoughtTogether() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Pay Attention</h2>

      <div className="flex flex-wrap items-center gap-6">
        {bundleItems.map((item, i) => (
          <div key={item.name} className="flex items-center gap-6">
            <div className="w-40 border border-gray-200 rounded-xl p-4">
              <BundleImage src={item.image} alt={item.name} />
              <div className="flex items-center gap-1 text-xs text-teal-600 mt-2">In Stock</div>
              <p className="text-sm text-gray-700 mt-1">
                Velson film-coated tablets, 3mg, 30 ct
              </p>
            </div>
            {i === 0 && <span className="text-2xl text-gray-400">+</span>}
          </div>
        ))}

        <span className="text-2xl text-gray-400">=</span>

        <div className="border border-gray-200 rounded-xl p-5 w-56">
          <p className="text-sm text-gray-500 mb-1">Together cheaper</p>
          <p className="text-gray-400 text-xs line-through">49,999 RUB</p>
          <p className="text-xl font-bold text-gray-800 mb-3">41,108 RUB</p>
          <button className="w-full bg-teal-400 hover:bg-teal-500 text-white text-sm font-semibold rounded-full py-2.5 transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  );
}

export default FrequentlyBoughtTogether;
