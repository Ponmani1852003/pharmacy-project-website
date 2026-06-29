import { Star } from "lucide-react";

const ratings = [
  { stars: 5, count: 471 },
  { stars: 4, count: 121 },
  { stars: 3, count: 38 },
  { stars: 2, count: 21 },
  { stars: 1, count: 12 },
];

const RatingSummary = () => {
  return (
    <div className="w-full rounded-[24px] border border-[#E9EEF5] bg-white p-8">

      {/* Rating */}
      <div className="text-center">

        <h2 className="text-[64px] font-bold text-[#29385D] leading-none">
          4.8
        </h2>

        {/* Stars */}
        <div className="flex justify-center gap-1 mt-4">
          {[...Array(5)].map((_, index) => (
            <Star
              key={index}
              size={22}
              fill="#FFC107"
              stroke="#FFC107"
            />
          ))}
        </div>

        <p className="mt-4 text-[15px] text-[#8D98AA]">
          Based on <span className="font-semibold text-[#29385D]">4349</span> Reviews
        </p>

        <button
          className="
            mt-8
            w-full
            h-[54px]
            rounded-full
            bg-[#28C8A4]
            text-white
            font-semibold
            text-[15px]
            hover:bg-[#22b393]
            transition
          "
        >
          Leave a Review
        </button>

      </div>

      {/* Divider */}
      <div className="my-8 border-t border-[#EEF2F6]" />

      {/* Rating Breakdown */}
      <div className="space-y-5">

        {ratings.map((item) => (
          <div
            key={item.stars}
            className="flex items-center justify-between"
          >

            {/* Left */}
            <div className="flex items-center gap-2">

              <span className="text-[15px] font-medium text-[#29385D]">
                {item.stars}
              </span>

              <Star
                size={16}
                fill="#FFC107"
                stroke="#FFC107"
              />

            </div>

            {/* Progress */}
            <div className="flex-1 mx-4 h-[8px] rounded-full bg-[#EEF2F6] overflow-hidden">

              <div
                className="h-full rounded-full bg-[#28C8A4]"
                style={{
                  width:
                    item.stars === 5
                      ? "95%"
                      : item.stars === 4
                      ? "70%"
                      : item.stars === 3
                      ? "45%"
                      : item.stars === 2
                      ? "25%"
                      : "12%",
                }}
              />

            </div>

            {/* Count */}
            <span className="text-[14px] text-[#8D98AA]">
              {item.count}
            </span>

          </div>
        ))}

      </div>

    </div>
  );
};

export default RatingSummary;