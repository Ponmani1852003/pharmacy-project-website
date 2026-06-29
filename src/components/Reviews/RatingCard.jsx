import { FaStar } from "react-icons/fa";

function RatingCard() {
  return (
    <div className="max-w-7xl mx-auto px-4 bg-white rounded-xl shadow-lg p-8 w-full max-w-[320px]">

      {/* Header */}
      <div className="flex justify-between items-start">

        {/* Left */}
        <h2 className="text-2xl font-bold text-gray-800">
          Pharmacy Rating
        </h2>

        {/* Right */}
        <div className="text-right">
          <h1 className="text-5xl font-bold text-gray-800">
            4.8
          </h1>

          <div className="flex justify-end gap-1 text-yellow-400 mt-2 text-[12px]">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        </div>

      </div>

      {/* Description */}
      <p className="text-sm text-gray-500 leading-6 mt-8 mb-8">
        Overall rating based on 4349 customer reviews.
      </p>

      {/* Button */}
      <button className="w-full bg-[#36d1c4] text-white py-3 rounded-full hover:bg-[#2cbfb2] transition">
        Leave a Review
      </button>

    </div>
  );
}

export default RatingCard;