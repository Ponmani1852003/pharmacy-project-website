import { ChevronDown } from "lucide-react";

const FeedbackFilter = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">

      {/* Sort */}
      <div className="flex items-center gap-4">

        <span className="text-[15px] font-medium text-[#29385D]">
          Sort By
        </span>

        <button
          className="
            flex
            items-center
            gap-3
            px-5
            h-[48px]
            rounded-full
            border
            border-[#E7EDF3]
            bg-white
            text-[15px]
            text-[#29385D]
            hover:border-[#28C8A4]
            transition
          "
        >
          Most Recent
          <ChevronDown size={18} />
        </button>

      </div>

      {/* Pagination */}

      <div className="flex items-center gap-3 flex-wrap">

        <button className="w-11 h-11 rounded-xl bg-[#28C8A4] text-white font-semibold">
          1
        </button>

        <button className="w-11 h-11 rounded-xl border border-[#E7EDF3] hover:border-[#28C8A4] text-[#29385D]">
          2
        </button>

        <button className="w-11 h-11 rounded-xl border border-[#E7EDF3] hover:border-[#28C8A4] text-[#29385D]">
          3
        </button>

        <button className="w-11 h-11 rounded-xl border border-[#E7EDF3] hover:border-[#28C8A4] text-[#29385D]">
          4
        </button>

        <span className="px-2 text-[#98A2B3] text-lg">
          ...
        </span>

        <button className="w-11 h-11 rounded-xl border border-[#E7EDF3] hover:border-[#28C8A4] text-[#29385D]">
          32
        </button>

      </div>

    </div>
  );
};

export default FeedbackFilter;