import { useState } from "react";
import Breadcrumb from "../components/Breadcrumb.jsx";
import CartItems from "../components/CartItems/CartItems.jsx";
import { initialCartItems } from "../components/CartItems/cartData.js";
import OrderSummary from "../components/OrderSummary/OrderSummary.jsx";
import ProductCarousel from "../components/ProductCarousel/ProductCarousel.jsx";
import { getProducts } from "../components/ProductGrid/productsData.js";
import PromoBanner from "../components/PromoBanner/PromoBanner.jsx";

export default function CartPage() {
  const [items, setItems] = useState(initialCartItems);
  const [discount, setDiscount] = useState(500);

  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  const alwaysHandy = getProducts(5).map((p) => ({ ...p, id: p.id + 600 }));

  function handleIncrement(id) {
    setItems((prev) => prev.map((item) => (item.id === id ? { ...item, qty: item.qty + 1 } : item)));
  }

  function handleDecrement(id) {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, qty: Math.max(1, item.qty - 1) } : item))
    );
  }

  function handleRemove(id) {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }

  function handleClear() {
    setItems([]);
  }

  function handleApplyPromo(code) {
    setDiscount(code.trim() ? 1500 : 500);
  }

  return (
    <>
      <Breadcrumb trail={["Home", "Cart"]} />

      <section className="max-w-7xl mx-auto px-4 py-6">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6">Cart</h1>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="flex-1 min-w-0">
            <CartItems
              items={items}
              onIncrement={handleIncrement}
              onDecrement={handleDecrement}
              onRemove={handleRemove}
              onClear={handleClear}
            />
          </div>

          <OrderSummary subtotal={subtotal} discount={discount} onApplyPromo={handleApplyPromo} />
        </div>
      </section>

      <ProductCarousel title="You Might Also Need" products={alwaysHandy} />

      <section className="max-w-7xl mx-auto px-4 py-8">
        <PromoBanner />
      </section>
    </>
  );
}
