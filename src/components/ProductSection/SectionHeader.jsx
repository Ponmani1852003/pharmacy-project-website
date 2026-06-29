import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function SectionHeader() {
  return (
    <div className="flex justify-between items-center py-6">
      <h2 className="text-4xl font-bold text-gray-800">
        Product of the Month
      </h2>

      <div className="flex gap-3">
        <button className="w-6 h-6 rounded-full border flex items-center justify-center hover:bg-gray-100">
          <FaChevronLeft className="text-[10px] text-gray-800" />
        </button>

        <button className="w-6 h-6 rounded-full border flex items-center justify-center hover:bg-gray-100">
          <FaChevronRight className="text-[10px] text-gray-800"/>
        </button>
      </div>
    </div>
  );
}

export default SectionHeader;