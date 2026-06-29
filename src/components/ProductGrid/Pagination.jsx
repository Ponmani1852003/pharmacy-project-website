import { useState } from "react";

function Pagination({ totalPages = 32 }) {
  const [page, setPage] = useState(1);
  const visiblePages = [1, 2, 3, 4];

  return (
    <div className="flex items-center gap-1.5 text-sm">
      {visiblePages.map((p) => (
        <button
          key={p}
          onClick={() => setPage(p)}
          className={`w-8 h-8 rounded-md flex items-center justify-center transition-colors ${
            page === p ? "bg-teal-400 text-white" : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          {p}
        </button>
      ))}
      <span className="px-1 text-gray-400">...</span>
      <button
        onClick={() => setPage(totalPages)}
        className={`w-8 h-8 rounded-md flex items-center justify-center transition-colors ${
          page === totalPages ? "bg-teal-400 text-white" : "text-gray-600 hover:bg-gray-100"
        }`}
      >
        {totalPages}
      </button>
    </div>
  );
}

export default Pagination;
