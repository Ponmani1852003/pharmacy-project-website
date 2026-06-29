import { useState } from "react";
import { FaStar, FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa";

function ReviewItem({ review }) {
  const [liked, setLiked] = useState(0);

  return (
    <div className=" max-w-7xl mx-auto px-4 flex gap-3 py-5 border-b border-gray-100 last:border-0">
      <div className="w-10 h-10 rounded-full bg-teal-100 text-teal-600 font-bold flex items-center justify-center shrink-0">
        {review.name.charAt(0)}
      </div>

      <div className="flex-1">
        <div className="flex items-center gap-2 flex-wrap">
          <p className="font-semibold text-gray-800">{review.name}</p>
          <span className="flex items-center gap-0.5 text-amber-400 text-xs">
            {Array.from({ length: 5 }).map((_, i) => (
              <FaStar key={i} className={i < review.rating ? "" : "text-gray-200"} />
            ))}
          </span>
          <span className="text-xs text-gray-400">{review.date}</span>
        </div>

        <p className="text-sm text-gray-600 mt-2 leading-relaxed">{review.text}</p>

        <div className="flex items-center gap-4 mt-2 text-xs text-gray-400 ">
          <button className="hover:text-teal-500 font-medium">Reply</button>
          <button
            onClick={() => setLiked((v) => (v === 1 ? 0 : 1))}
            className={`flex items-center gap-1 ${liked === 1 ? "text-teal-500" : "hover:text-teal-500"}`}
          >
            <FaRegThumbsUp /> {review.likes + (liked === 1 ? 1 : 0)}
          </button>
          <button
            onClick={() => setLiked((v) => (v === -1 ? 0 : -1))}
            className={`flex items-center gap-1 ${liked === -1 ? "text-red-400" : "hover:text-red-400"}`}
          >
            <FaRegThumbsDown />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ReviewItem;
