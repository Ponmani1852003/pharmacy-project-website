import ProductCard from "./ProductCard";

import pm1 from "../../assets/images/pm1.png";
import pm2 from "../../assets/images/pm2.png";
import pm3 from "../../assets/images/pm3.png";
import pm4 from "../../assets/images/pm4.png";
import pm5 from "../../assets/images/pm5.png";

const products = [
  {
    image: pm1,
    name: "Velson film-coated tablets 3 mg, 30 pcs.",
    price: "41 108 ₽",
    oldPrice: "49 999 ₽",
  },
  {
    image: pm2,
    name: "Velson film-coated tablets 3 mg, 30 pcs.",
    price: "41 108 ₽",
    oldPrice: "49 999 ₽",
  },
  {
    image: pm3,
    name: "Velson film-coated tablets 3 mg, 30 pcs.",
    price: "41 108 ₽",
    oldPrice: "49 999 ₽",
  },
  {
    image: pm4,
    name: "Velson film-coated tablets 3 mg, 30 pcs.",
    price: "41 108 ₽",
    oldPrice: "49 999 ₽",
  },
  {
    image: pm5,
    name: "Velson film-coated tablets 3 mg, 30 pcs.",
    price: "41 108 ₽",
    oldPrice: "49 999 ₽",
  },

  {
    image: pm1,
    name: "Velson film-coated tablets 3 mg, 30 pcs.",
    price: "41 108 ₽",
    oldPrice: "49 999 ₽",
  },
  {
    image: pm2,
    name: "Velson film-coated tablets 3 mg, 30 pcs.",
    price: "41 108 ₽",
    oldPrice: "49 999 ₽",
  },
  {
    image: pm3,
    name: "Velson film-coated tablets 3 mg, 30 pcs.",
    price: "41 108 ₽",
    oldPrice: "49 999 ₽",
  },
  {
    image: pm4,
    name: "Velson film-coated tablets 3 mg, 30 pcs.",
    price: "41 108 ₽",
    oldPrice: "49 999 ₽",
  },
  {
    image: pm5,
    name: "Velson film-coated tablets 3 mg, 30 pcs.",
    price: "41 108 ₽",
    oldPrice: "49 999 ₽",
  },
];

function ProductGrid() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            name={product.name}
            price={product.price}
            oldPrice={product.oldPrice}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductGrid;