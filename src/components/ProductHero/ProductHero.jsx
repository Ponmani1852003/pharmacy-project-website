import ProductTabs from "./ProductTabs.jsx";
import ProductGallery from "./ProductGallery.jsx";
import ProductCharacteristics from "./ProductCharacteristics.jsx";
import DeliveryInfo from "./DeliveryInfo.jsx";
import PriceBox from "./PriceBox.jsx";

function ProductHero() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-6">
      <h1 className="text-2xl md:text-3xl font-extrabold text-gray-800 mb-5">
        Creon 10000, enteric-coated capsules, 10000 units, 20 ct
      </h1>

      <ProductTabs />

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-[420px] shrink-0">
          <ProductGallery />
        </div>

        <div className="flex-1 min-w-0">
          <ProductCharacteristics />
          <DeliveryInfo />
        </div>

        <PriceBox />
      </div>
    </section>
  );
}

export default ProductHero;
