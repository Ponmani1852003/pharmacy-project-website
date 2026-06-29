import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "../ProductGrid/ProductCard.jsx";

function ProductCarousel({ title, products }) {
  const trackRef = useRef(null);

  function scroll(direction) {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: direction * track.clientWidth * 0.9, behavior: "smooth" });
  }

  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
        <div className="flex items-center gap-2">
          <button
            onClick={() => scroll(-1)}
            aria-label="Previous"
            className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-teal-400 hover:text-teal-500 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => scroll(1)}
            aria-label="Next"
            className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-teal-400 hover:text-teal-500 transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div ref={trackRef} className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
        {products.map((product) => (
          <div key={product.id} className="w-[220px] shrink-0">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductCarousel;
