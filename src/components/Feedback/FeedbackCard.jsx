import {
  Star,
  ThumbsUp,
  ThumbsDown,
} from "lucide-react";

const FeedbackCard = ({
  name,
  city,
  date,
  rating,
  review,
  likes,
  dislikes,
}) => {
  return (
    <div className="border-b border-[#EEF2F6] py-8">

      {/* Header */}
      <div className="flex items-start justify-between">

        <div>

          {/* Name */}
          <h3 className="text-[20px] font-semibold text-[#29385D]">
            {name}
          </h3>

          {/* City */}
          <p className="mt-1 text-[14px] text-[#98A2B3]">
            {city}
          </p>

        </div>

        {/* Date */}
        <span className="text-[14px] text-[#98A2B3]">
          {date}
        </span>

      </div>

      {/* Stars */}
      <div className="flex items-center gap-1 mt-4">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            size={18}
            fill={index < rating ? "#FFC107" : "transparent"}
            stroke="#FFC107"
          />
        ))}
      </div>

      {/* Review */}
      <p className="mt-5 text-[15px] leading-8 text-[#6F7C91]">
        {review}
      </p>

      {/* Footer */}
      <div className="flex items-center gap-8 mt-6">

        <button className="flex items-center gap-2 text-[#98A2B3] hover:text-[#28C8A4] transition">
          <ThumbsUp size={18} />
          <span className="text-[14px]">{likes}</span>
        </button>

        <button className="flex items-center gap-2 text-[#98A2B3] hover:text-red-500 transition">
          <ThumbsDown size={18} />
          <span className="text-[14px]">{dislikes}</span>
        </button>

      </div>

    </div>
  );
};

export default FeedbackCard;