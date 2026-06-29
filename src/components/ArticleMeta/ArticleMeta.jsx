import { useState } from "react";
import { Clock, Bookmark } from "lucide-react";
import { FaStar } from "react-icons/fa";

const badges = ["Manufacturer", "Brief Overview", "Indications"];

function ArticleMeta() {
  const [saved, setSaved] = useState(false);

  return (
    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 py-4">
      <span className="flex items-center gap-1.5">
        <Clock className="w-4 h-4" />
        10 min read
      </span>

      <span className="text-gray-700 font-medium">Category Name</span>

      {badges.map((badge, i) => (
        <span
          key={badge}
          className={`text-xs font-semibold px-3 py-1.5 rounded-full ${
            i === 0 ? "bg-teal-400 text-white" : "border border-gray-200 text-gray-600"
          }`}
        >
          {badge}
        </span>
      ))}

      <span className="flex items-center gap-1.5">
        <span className="text-gray-700 font-medium">Rating 49</span>
        <span className="flex items-center gap-0.5 text-amber-400">
          {Array.from({ length: 5 }).map((_, i) => (
            <FaStar key={i} className={i < 4 ? "" : "text-gray-200"} />
          ))}
        </span>
      </span>

      <button
        onClick={() => setSaved((v) => !v)}
        className={`flex items-center gap-1.5 ml-auto border rounded-full px-4 py-1.5 transition-colors ${
          saved ? "border-teal-400 text-teal-500" : "border-gray-200 text-gray-600 hover:border-teal-400 hover:text-teal-500"
        }`}
      >
        <Bookmark className="w-3.5 h-3.5" fill={saved ? "currentColor" : "none"} />
        Read Later
      </button>
    </div>
  );
}

export default ArticleMeta;
