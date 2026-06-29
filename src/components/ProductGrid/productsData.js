// Shared mock product data for the category page.
// Swap `image` paths for your real Figma exports whenever you have them —
// drop files into `public/products/` using the same names, or update the
// path here to point at your own assets.

const baseProducts = [
  {
    image: "/products/product-1.png",
    badge: "day",
    inStock: true,
    rating: 4,
    name: "Velson film-coated tablets, 3mg, 30 ct",
    brand: "Litna",
    packQty: "10 pcs",
    code: "153249",
    price: "41,108",
    oldPrice: "49,999",
  },
  {
    image: "/products/product-2.png",
    badge: "today",
    inStock: true,
    rating: 5,
    name: "Velson film-coated tablets, 3mg, 30 ct",
    brand: "Litna",
    packQty: "10 pcs",
    code: "153249",
    price: "41,108",
    oldPrice: "49,999",
  },
  {
    image: "/products/product-3.png",
    badge: null,
    inStock: false,
    rating: 4,
    name: "Velson film-coated tablets, 3mg, 30 ct",
    brand: "Litna",
    packQty: "10 pcs",
    code: "153249",
    price: "41,108",
    oldPrice: "49,999",
  },
  {
    image: "/products/product-4.png",
    badge: "day",
    inStock: true,
    rating: 4,
    name: "Velson film-coated tablets, 3mg, 30 ct",
    brand: "Litna",
    packQty: "10 pcs",
    code: "153249",
    price: "41,108",
    oldPrice: "49,999",
  },
  {
    image: "/products/product-5.png",
    badge: "today",
    inStock: true,
    rating: 5,
    name: "Velson film-coated tablets, 3mg, 30 ct",
    brand: "Litna",
    packQty: "10 pcs",
    code: "153249",
    price: "41,108",
    oldPrice: "49,999",
  },
  {
    image: "/products/product-6.png",
    badge: null,
    inStock: true,
    rating: 4,
    name: "Velson film-coated tablets, 3mg, 30 ct",
    brand: "Litna",
    packQty: "10 pcs",
    code: "153249",
    price: "41,108",
    oldPrice: "49,999",
  },
];

/** Repeats the 6 base products to fill `count` grid slots. */
export function getProducts(count = 24) {
  const result = [];
  for (let i = 0; i < count; i++) {
    result.push({ ...baseProducts[i % baseProducts.length], id: i });
  }
  return result;
}

export default baseProducts;
