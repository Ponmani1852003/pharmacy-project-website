import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

const bullets = [
  "Going through hormonal changes doesn't have to mean giving anything up — small daily habits make a real difference.",
  "Sleep, nutrition, and gentle movement all play a role in how the body adapts during this stage of life.",
  "Talking openly with a doctor early on makes it much easier to manage symptoms before they become disruptive.",
];

function FeaturedArticle() {
  const [failed, setFailed] = useState(false);

  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-5 bg-gray-50 rounded-2xl p-5 mb-6">
        {failed ? (
          <div className="w-full sm:w-40 h-32 rounded-xl bg-gray-200 shrink-0" />
        ) : (
          <img
            src="/article/featured.jpg"
            alt="Featured article"
            onError={() => setFailed(true)}
            className="w-full sm:w-40 h-32 rounded-xl object-cover shrink-0"
          />
        )}
        <div>
          <h3 className="text-lg font-bold text-gray-800 mb-2">
            How a Woman Prepares for the Arrival of a Baby?
          </h3>
          <a href="#" className="text-teal-500 hover:text-teal-600 text-sm font-semibold">
            Read More
          </a>
        </div>
      </div>

      <ul className="space-y-3">
        {bullets.map((bullet, i) => (
          <li key={i} className="flex items-start gap-3 text-gray-600 leading-relaxed">
            <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FeaturedArticle;
