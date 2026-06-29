import Breadcrumb from "../components/Breadcrumb.jsx";
import ProductHero from "../components/ProductHero/ProductHero.jsx";
import ProductCarousel from "../components/ProductCarousel/ProductCarousel.jsx";
import FrequentlyBoughtTogether from "../components/FrequentlyBoughtTogether/FrequentlyBoughtTogether.jsx";
import ProductGrid from "../components/ProductGrid/ProductGrid.jsx";
import { getProducts } from "../components/ProductGrid/productsData.js";
import ProductDetails from "../components/ProductDetails/ProductDetails.jsx";
import Reviews from "../components/Reviews/Reviews.jsx";
import DeliveryTables from "../components/DeliveryTables/DeliveryTables.jsx";
import PickupTable from "../components/PickupTable/PickupTable.jsx";
import SeoText from "../components/SeoText/SeoText.jsx";
import HealthBlog from "../components/HealthBlog/HealthBlog.jsx";

export default function ProductPage() {
  const analogs = getProducts(5).map((p) => ({ ...p, id: p.id + 400 }));
  const moreAnalogs = getProducts(4).map((p) => ({ ...p, id: p.id + 500 }));

  return (
    <>
      <Breadcrumb trail={["Home", "Medicines", "Enzyme Preparations", "Creon 10000"]} />

      <ProductHero />
      <ProductCarousel title="Analogs" products={analogs} />
      <FrequentlyBoughtTogether />

      <section className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Analogs <span className="text-gray-400 font-normal">4</span>
        </h2>
        <ProductGrid products={moreAnalogs} />
      </section>

      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ProductDetails />
          <Reviews />
        </div>
      </section>

      <DeliveryTables />
      <PickupTable />
      <SeoText />
      <HealthBlog />
    </>
  );
}
