import { useState } from "react";
import { FaStar } from "react-icons/fa";

const breakdown = [
  { stars: 5, count: 471 },
  { stars: 4, count: 121 },
  { stars: 3, count: 38 },
  { stars: 2, count: 21 },
  { stars: 1, count: 12 },
];

function ReviewsSummary({ onLeaveReview }) {
  const [checked, setChecked] = useState([5]);

  function toggle(stars) {
    setChecked((prev) =>
      prev.includes(stars) ? prev.filter((s) => s !== stars) : [...prev, stars]
    );
  }

  return (
    <div className="bg-gray-50 rounded-2xl p-6">
      <p className="font-bold text-gray-800 text-center mb-3">Pharmacy Average Rating</p>

      <div className="flex items-center justify-center gap-3 mb-2">
        <span className="text-4xl font-extrabold text-gray-800">4.8</span>
        <span className="flex items-center gap-0.5 text-amber-400">
          {Array.from({ length: 5 }).map((_, i) => (
            <FaStar key={i} className={i < 4 ? "" : "text-gray-200"} />
          ))}
        </span>
      </div>

      <p className="text-xs text-gray-500 text-center mb-5">
        Overall rating based on 4,349 customer reviews
      </p>

      <button
        onClick={onLeaveReview}
        className="w-full bg-teal-400 hover:bg-teal-500 text-white text-sm font-semibold uppercase tracking-wide rounded-full py-3 transition-colors mb-6"
      >
        Leave a Review
      </button>

      <div className="space-y-3">
        {breakdown.map(({ stars, count }) => (
          <label key={stars} className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={checked.includes(stars)}
              onChange={() => toggle(stars)}
              className="w-4 h-4 accent-teal-400 shrink-0"
            />
            <span className="flex items-center gap-0.5 text-amber-400 shrink-0">
              {Array.from({ length: 5 }).map((_, i) => (
                <FaStar key={i} className={i < stars ? "" : "text-gray-200"} />
              ))}
            </span>
            <span className="text-sm text-gray-500">{count} reviews</span>
          </label>
        ))}
      </div>
    </div>
  );
}

export default ReviewsSummary;
