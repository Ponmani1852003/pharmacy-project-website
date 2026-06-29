import { useState } from "react";
import ReviewForm from "./ReviewForm.jsx";
import ReviewItem from "./ReviewItem.jsx";

const reviews = [
  {
    name: "Elena",
    rating: 4,
    date: "January 17, 2026",
    likes: 2,
    text: `I ordered through the corporate transport company. Excellent product, fast and inexpensive. The courier was polite and helpful, brought everything right to the door. Such reliable companies are hard to find these days.`,
  },
  {
    name: "Vladimir",
    rating: 4,
    date: "January 17, 2026",
    likes: 4,
    text: `Big thanks to the store team for their work. I'm grateful to the staff, especially the manager I worked with, for their professionalism and responsiveness. Happy holidays everyone — wishing you continued success.`,
  },
  {
    name: "Vladimir",
    rating: 5,
    date: "January 17, 2026",
    likes: 0,
    text: `Great service, fast delivery, and the product matched the description exactly. Will definitely order again.`,
  },
];

function Reviews() {
  const [showAll, setShowAll] = useState(false);
  const visibleReviews = showAll ? reviews : reviews.slice(0, 2);

  return (
    <div id="reviews max-w-7xl mx-auto px-4">
      <h2 className="max-w-7xl mx-auto px-4 text-2xl font-bold text-gray-800 mb-5">Reviews</h2>

      <ReviewForm />

      <div className="mt-2">
        {visibleReviews.map((review, i) => (
          <ReviewItem key={i} review={review} />
        ))}
      </div>

      <button
        onClick={() => setShowAll((v) => !v)}
        className="w-7xl mx-[150px] px-[10px] mt-4 bg-teal-400 hover:bg-teal-500 text-white text-sm font-semibold rounded-full py-3 transition-colors"
      >
        {showAll ? "Show Fewer Reviews" : "Show All Reviews"}
      </button>
    </div>
  );
}

export default Reviews;
