import { useState } from "react";
import { Info } from "lucide-react";

const paragraphs = [
  `Our pharmacy network has been serving customers since 2008, and despite
  the years, it remains one of the most accessible pharmacy chains in the
  city. We work hard to make sure every neighborhood has a location within
  easy reach.`,
  `We believe healthcare should never be complicated. From the layout of
  our stores to the way our pharmacists greet you, everything is designed
  around convenience and trust — so finding what you need takes minutes,
  not hours.`,
  `Our commitment goes beyond stocking shelves. We work directly with
  manufacturers and distributors to guarantee authenticity, keep prices
  fair, and make sure popular medicines are always available when you
  need them.`,
];

function SeoText() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">About This Category</h2>

      <div
        className={`grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-gray-500 leading-relaxed ${
          expanded ? "" : "max-h-40 overflow-hidden relative"
        }`}
      >
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <div className="flex items-start gap-3 bg-teal-50 rounded-xl p-4 my-6 text-sm text-gray-600">
        <Info className="w-4 h-4 text-teal-500 mt-0.5 shrink-0" />
        <p>
          Our company is committed to providing professional service for
          businesses of any format — pharmacies, clinics, hotels, and care
          facilities. Equipment quality depends on how well it's maintained,
          so we offer reliable supplies for kitchens, laundry rooms, offices,
          and front-desk areas of any format.
        </p>
      </div>

      <p className="text-sm text-gray-500 leading-relaxed">
        Our company is committed to providing professional service for
        businesses of any format — pharmacies, clinics, hotels, and care
        facilities. Equipment quality depends on how well it's maintained,
        so we offer reliable supplies for kitchens, laundry rooms, offices,
        and front-desk areas of any format.
      </p>

      <button
        onClick={() => setExpanded((v) => !v)}
        className="text-teal-500 hover:text-teal-600 font-semibold text-sm mt-4"
      >
        {expanded ? "‹ Show less" : "Show full text »"}
      </button>
    </section>
  );
}

export default SeoText;
