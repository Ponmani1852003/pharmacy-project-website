import deliveryIcon from "../../assets/icons/online.png";
import guaranteeIcon from "../../assets/icons/positive-review.png";
import priceIcon from "../../assets/icons/shipping.png";
import reviewIcon from "../../assets/icons/ui.png";
import assortmentIcon from "../../assets/icons/saved.png";

function Features() {
  const features = [
    {
      icon: priceIcon,
      title: "Guarantee",
      desc: "All products are certified",
    },
    {
      icon: deliveryIcon,
      title: "Fast Delivery",
      desc: "Fast delivery across Russia",
    },
    {
      icon: reviewIcon,
      title: "Wide Range",
      desc: "Equipment, furniture, utensils and inventory",
    },
    {
      icon: assortmentIcon,
      title: "4349 Reviews",
      desc: "We strive to offer the lowest prices",
    },
    {
      icon: guaranteeIcon,
      title: "Best Prices",
      desc: "We strive to offer the lowest prices",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 py-8">
      {features.map((item) => (
        <div
          key={item.title}
          className="flex items-start gap-3"
        >
          <img
            src={item.icon}
            alt={item.title}
            className="w-10 h-10 object-contain"
          />

          <div>
            <h3 className="font-semibold text-gray-800">
              {item.title}
            </h3>

            <p className="text-sm text-gray-500">
              {item.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Features;