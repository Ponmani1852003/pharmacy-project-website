import externalRemediesIcon from "../../assets/icons/external-remedies.png";
import syrupsDropsIcon from "../../assets/icons/syrups-drops.png";
import tabletsCapsulesIcon from "../../assets/icons/tablets-capsules.png";

const items = [
  { label: "External Remedies", icon: externalRemediesIcon },
  { label: "Syrups, Drops & Suspensions", icon: syrupsDropsIcon },
  { label: "Tablets & Capsules", icon: tabletsCapsulesIcon },
  { label: "External Remedies", icon: externalRemediesIcon },
  { label: "Tablets & Capsules", icon: tabletsCapsulesIcon },
  { label: "External Remedies", icon: externalRemediesIcon },
  { label: "External Remedies", icon: externalRemediesIcon },
  { label: "Syrups, Drops & Suspensions", icon: syrupsDropsIcon },
];

function CatalogIcons() {
  return (
    <div className="border border-gray-200 rounded-xl p-5 mb-6">
      <p className="text-xs font-semibold text-gray-500 tracking-wide mb-4">CATALOG</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {items.map(({ label, icon }, i) => (
          <div key={i} className="flex items-center gap-2.5 text-sm text-gray-700">
            <div className="w-9 h-9 rounded-lg bg-teal-50 flex items-center justify-center shrink-0">
              <img src={icon} alt={label} className="w-5 h-5 object-contain" />
            </div>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CatalogIcons;
