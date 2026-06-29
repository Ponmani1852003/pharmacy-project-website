import { FaStar, FaShoppingBasket } from "react-icons/fa";

function ProductCard({ image, name, price, oldPrice }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-lg transition-all duration-300">

      {/* Badge */}
      <span className="inline-block bg-[#36d1c4] text-white text-[11px] px-3 py-1 rounded-full">
        Product of the Day
      </span>

      {/* Product Image */}
      <div className="flex justify-center items-center  my-5">
        <img
          src={image}
          alt={name}
          className="max-h-32 object-contain"
        />
      </div>

      {/* Stock & Rating */}
      <div className="flex justify-between items-center">
        <span className="text-[#31c96d] text-xs font-medium">
          In Stock
        </span>

        <div className="flex gap-1 text-yellow-400 text-xs">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
      </div>

      {/* Product Name */}
      <h3 className="mt-3 text-[10px] font-medium text-gray-700 leading-5">
        {name}
      </h3>

      {/* Details */}
      <ul className="mt-3 text-[11px] text-gray-400 space-y-1">
        <li>• Brand : Linia</li>
        <li>• Quantity : 10</li>
        <li>• Code : 153249</li>
      </ul>

      {/* Price */}
      <div className="flex justify-between items-end mt-6">
        <div>
          <h2 className="text-[20px] font-bold text-[#1f2a44] leading-none">
            {price}
          </h2>

          <p className="text-red-500 text-sm line-through mt-1">
            {oldPrice}
          </p>
        </div>

        <button className="w-8 h-8 rounded-full bg-[#36d1c4] hover:bg-[#2bbdb1] text-white flex items-center justify-center">
          <FaShoppingBasket className="text-md" />
        </button>
      </div>

    </div>
  );
}

export default ProductCard;