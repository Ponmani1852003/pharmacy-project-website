import { useState } from "react";
import Breadcrumb from "../components/Breadcrumb.jsx";
import FavoritesGrid from "../components/FavoritesGrid/FavoritesGrid.jsx";
import { getProducts } from "../components/ProductGrid/productsData.js";
import ProductCarousel from "../components/ProductCarousel/ProductCarousel.jsx";
import PromoBanner from "../components/PromoBanner/PromoBanner.jsx";

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState(() => getProducts(10));
  const alwaysHandy = getProducts(5).map((p) => ({ ...p, id: p.id + 700 }));

  function handleClearAll() {
    setFavorites([]);
  }

  function handleAddAllToCart() {
    // Hook this up to your real cart logic.
    console.log("Adding to cart:", favorites);
  }

  return (
    <>
      <Breadcrumb trail={["Home", "Favorites"]} />

      <section className="max-w-7xl mx-auto px-4 py-6">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6">Favorites</h1>

        <FavoritesGrid
          items={favorites}
          onClearAll={handleClearAll}
          onAddAllToCart={handleAddAllToCart}
        />
      </section>

      <ProductCarousel title="You Might Also Need" products={alwaysHandy} />

      <section className="max-w-7xl mx-auto px-4 py-8">
        <PromoBanner />
      </section>
    </>
  );
}
