import { useState } from "react";
import { FaStar, FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa";

function ReviewListItem({ review }) {
  const [liked, setLiked] = useState(0);

  return (
    <div className="py-6 border-b border-gray-100 last:border-0">
      <div className="flex items-start justify-between gap-4 mb-2">
        <p className="text-sm">
          <span className="font-bold text-gray-800">{review.name}</span>
          <span className="text-gray-500">, {review.location}, {review.date}</span>{" "}
          <span className="inline-flex items-center gap-0.5 text-amber-400 ml-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <FaStar key={i} className={i < review.rating ? "" : "text-gray-200"} />
            ))}
          </span>
        </p>

        <div className="flex items-center gap-3 text-sm shrink-0">
          <button
            onClick={() => setLiked((v) => (v === 1 ? 0 : 1))}
            className={`flex items-center gap-1 ${liked === 1 ? "text-teal-500" : "text-gray-400 hover:text-teal-500"}`}
          >
            <FaRegThumbsUp /> {review.likes + (liked === 1 ? 1 : 0)}
          </button>
          <button
            onClick={() => setLiked((v) => (v === -1 ? 0 : -1))}
            className={`flex items-center gap-1 ${liked === -1 || review.dislikes < 0 ? "text-red-400" : "text-gray-400 hover:text-red-400"}`}
          >
            <FaRegThumbsDown /> {review.dislikes + (liked === -1 ? -1 : 0)}
          </button>
        </div>
      </div>

      <p className="text-sm text-gray-600 leading-relaxed">{review.text}</p>
    </div>
  );
}

export default ReviewListItem;
