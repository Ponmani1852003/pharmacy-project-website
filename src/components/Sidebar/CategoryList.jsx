import { useState } from "react";

const categories = [
  "Obstetrics & Gynecology",
  "Allergy",
  "Anesthesia & Resuscitation",
  "Antibiotics",
  "Blood Disorders",
  "Pain & Fever",
  "Hemorrhoids",
  "Eyes",
  "Parasites, Ear & Skin Conditions",
  "Homeopathy",
  "Diabetes",
  "Diagnostic Products",
  "Musculoskeletal System",
  "Stomach, Intestines & Liver",
];

function CategoryList() {
  const [active, setActive] = useState("Anesthesia & Resuscitation");

  return (
    <div className="border border-gray-200 rounded-xl p-5">
      <p className="text-xs font-semibold text-gray-500 tracking-wide mb-3">CATEGORIES</p>

      <ul className="space-y-2.5 text-sm">
        {categories.map((cat) => (
          <li key={cat}>
            <button
              onClick={() => setActive(cat)}
              className={`text-left ${
                active === cat ? "text-teal-500 font-semibold" : "text-gray-600 hover:text-teal-500"
              }`}
            >
              {cat}
            </button>
          </li>
        ))}
      </ul>

      <button className="w-full mt-5 bg-teal-400 hover:bg-teal-500 text-white text-sm font-semibold rounded-full py-2.5 transition-colors">
        Show All Categories
      </button>
    </div>
  );
}

export default CategoryList;
