import assortmentIcon from "../../assets/icons/shipping.png";
import fastDeliveryIcon from "../../assets/icons/online.png";
import guaranteeIcon from "../../assets/icons/ui.png";
import lowPricesIcon from "../../assets/icons/saved.png";

const items = [
  {
    icon: assortmentIcon,
    title: "Assortment",
    text: "Equipment, furniture, textiles & supplies",
  },
  {
    icon: fastDeliveryIcon,
    title: "Fast Delivery",
    text: "Anywhere in Russia, no limits",
  },
  {
    icon: guaranteeIcon,
    title: "Guarantee",
    text: "All products are certified",
  },
  {
    icon: lowPricesIcon,
    title: "Low Prices",
    text: "We strive to keep prices as low as possible",
  },
];

function PromoBanner() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border border-gray-200 rounded-xl p-5 mb-6">
      {items.map(({ icon, title, text }) => (
        <div key={title} className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-lg bg-teal-50 flex items-center justify-center shrink-0">
            <img src={icon} alt={title} className="w-5 h-5 object-contain" />
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-800">{title}</p>
            <p className="text-xs text-gray-500 leading-snug">{text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PromoBanner;
