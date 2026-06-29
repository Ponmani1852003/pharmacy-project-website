import { useState } from "react";
import Pagination from "./Pagination.jsx";

function SortBar({ totalPages = 32 }) {
  const [sort, setSort] = useState("price");

  return (
    <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
      <div className="flex items-center gap-4 text-sm">
        <span className="text-gray-500 font-medium">Sort by:</span>
        <button
          onClick={() => setSort("price")}
          className={`font-medium ${sort === "price" ? "text-teal-500" : "text-gray-600 hover:text-teal-500"}`}
        >
          Price
        </button>
        <button
          onClick={() => setSort("popularity")}
          className={`font-medium ${sort === "popularity" ? "text-teal-500" : "text-gray-600 hover:text-teal-500"}`}
        >
          Popularity
        </button>
      </div>

      <Pagination totalPages={totalPages} />
    </div>
  );
}

export default SortBar;
