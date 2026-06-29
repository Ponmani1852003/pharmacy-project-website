import Features from "./Features";
import SectionHeader from "./SectionHeader";
import ProductGrid from "./ProductGrid";

function ProductSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <Features />
      <SectionHeader />
      <ProductGrid />
    </section>
  );
}

export default ProductSection;