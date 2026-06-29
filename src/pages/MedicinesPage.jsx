import Breadcrumb from "../components/Breadcrumb.jsx";
import Sidebar from "../components/Sidebar/Sidebar.jsx";
import CatalogIcons from "../components/CatalogIcons/CatalogIcons.jsx";
import PopularBrands from "../components/PopularBrands/PopularBrands.jsx";
import SortBar from "../components/ProductGrid/SortBar.jsx";
import ProductGrid from "../components/ProductGrid/ProductGrid.jsx";
import Pagination from "../components/ProductGrid/Pagination.jsx";
import { getProducts } from "../components/ProductGrid/productsData.js";
import PromoBanner from "../components/PromoBanner/PromoBanner.jsx";
import ProductCarousel from "../components/ProductCarousel/ProductCarousel.jsx";
import SeoText from "../components/SeoText/SeoText.jsx";
import HealthBlog from "../components/HealthBlog/HealthBlog.jsx";

export default function MedicinesPage() {
  const gridProductsTop = getProducts(24);
  const gridProductsBottom = getProducts(24).map((p) => ({ ...p, id: p.id + 100 }));
  const dealOfMonth = getProducts(8).map((p) => ({ ...p, id: p.id + 200 }));
  const recentlyViewed = getProducts(8).map((p) => ({ ...p, id: p.id + 300 }));

  return (
    <>
      {/* <Breadcrumb trail={["Home", "Medicines"]} /> */}

      <section className="max-w-7xl mx-auto px-4 py-6">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6">Medicines</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          <Sidebar />

          <div className="flex-1 min-w-0">
            <CatalogIcons />
            <PopularBrands />
            <SortBar totalPages={32} />
            <ProductGrid products={gridProductsTop} />
            <div className="my-6">
              <PromoBanner />
            </div>
            <ProductGrid products={gridProductsBottom} />
            <div className="flex justify-center mt-8">
              <Pagination totalPages={32} />
            </div>
          </div>
        </div>
      </section>

      <ProductCarousel title="Deal of the Month" products={dealOfMonth} />
      <ProductCarousel title="Recently Viewed" products={recentlyViewed} />
      <SeoText />
      <HealthBlog />
    </>
  );
}
