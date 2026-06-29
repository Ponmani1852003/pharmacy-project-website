import { FaRegDotCircle } from "react-icons/fa";
function AboutColumn({ items, showDot }) {
  return (
    <div className="space-y-8">
      {items.map((item, index) => (
        <div key={index} className="flex items-start gap-4">
          {showDot && (
           <FaRegDotCircle className="text-[#36d1c4] mt-1 text-xs flex-shrink-0" />
          )}

          <p className="text-gray-600 leading-5 text-[12px]">
            {item}
          </p>
        </div>
      ))}
    </div>
  );
}

export default AboutColumn;