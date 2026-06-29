import { useState } from "react";

const pillTabs = [
  "Manufacturer",
  "Description",
  "Active Ingredient",
  "Brief Overview",
  "Indications",
  "Key Benefits",
  "Storage Conditions",
  "Shelf Life",
  "Dosage Form",
];

const body = {
  manufacturer: { title: "Manufacturer", text: "Abbott, USA" },
  brief: {
    title: "Brief Overview",
    text: `It's worth remembering that the further development of various
    forms of activity plays an important role in shaping further
    development directions. The task of the organization, in particular
    consultation with a wide range of activists, requires analysis of
    various directions of further development.

    On the other hand, a significant model of organizational activity is
    largely determined by the creation of a training system that meets
    urgent needs. Everyday practice shows that the increasingly
    informational and propagandistic provision of our activity allows us
    to evaluate the significance of progressive development directions.`,
  },
  indications: {
    title: "Indications",
    text: `It's worth remembering that the further development of various
    forms of activity plays an important role in shaping further
    development directions. The task of the organization, in particular
    consultation with a wide range of activists, requires analysis of
    various directions of further development.

    Creon 10000 may be prescribed for...`,
  },
};

function ProductDetails() {
  const [active, setActive] = useState("Manufacturer");
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-5">Instructions for Use</h2>

      <div className="flex flex-wrap gap-2 mb-6">
        {pillTabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`text-xs font-medium px-3 py-1.5 rounded-full border transition-colors ${
              active === tab
                ? "bg-teal-400 text-white border-teal-400"
                : "text-gray-600 border-gray-200 hover:border-teal-400 hover:text-teal-500"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className={`space-y-6 text-sm text-gray-600 leading-relaxed ${expanded ? "" : "max-h-72 overflow-hidden"}`}>
        <div>
          <h3 className="font-bold text-gray-800 mb-2">{body.manufacturer.title}</h3>
          <p className="text-teal-600">{body.manufacturer.text}</p>
        </div>

        <div>
          <h3 className="font-bold text-gray-800 mb-2">{body.brief.title}</h3>
          {body.brief.text.split("\n\n").map((p, i) => (
            <p key={i} className="mb-3 whitespace-pre-line">
              {p}
            </p>
          ))}
        </div>

        <div>
          <h3 className="font-bold text-gray-800 mb-2">{body.indications.title}</h3>
          {body.indications.text.split("\n\n").map((p, i) => (
            <p key={i} className="mb-3 whitespace-pre-line">
              {p}
            </p>
          ))}
        </div>
      </div>

      <button
        onClick={() => setExpanded((v) => !v)}
        className="w-full mt-4 bg-teal-400 hover:bg-teal-500 text-white text-sm font-semibold rounded-full py-3 transition-colors"
      >
        {expanded ? "Show Less" : "Show Full Text"}
      </button>
    </div>
  );
}

export default ProductDetails;
