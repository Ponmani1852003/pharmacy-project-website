import { Link } from "react-router-dom";
import babyboyIcon from "../../assets/icons/babyboy.png";
import dogIcon from "../../assets/icons/dog.png";
import eyeIcon from "../../assets/icons/eye.png";
import firstaidkidIcon from "../../assets/icons/first-aid-kit.png";
import pillsIcon from "../../assets/icons/pills.png";
import skincareIcon from "../../assets/icons/skin-care.png";
import smartwatchIcon from "../../assets/icons/smartwatch.png";
import vitaminsIcon from "../../assets/icons/vitamins.png";
import washinghandsIcon from "../../assets/icons/washing-hands.png";

function Navbar() {
 const menuItems = [
  { name: "Medicines", icon: pillsIcon, to: "/medicines" },
  { name: "Vitamins", icon: vitaminsIcon, to: "/diseaseproducts" },
  { name: "Beauty", icon: skincareIcon, to: "/articles" },
  { name: "Hygiene", icon: washinghandsIcon, to: "/article" },
  { name: "Lenses", icon: eyeIcon, to: "/favorites" },
  { name: "Mother & Child", icon: babyboyIcon, to: "/article" },
  { name: "Medical Products", icon: firstaidkidIcon, to: "/product" },
  { name: "Pet Products", icon: dogIcon, to: "/diseaseproducts" },
  { name: "Medical Equipment", icon: smartwatchIcon, to: "/medicines" },
];

  return (
    <nav className="bg-gradient-to-r from-blue-900 to-teal-400 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-8 py-5">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.to}
              className="flex items-center gap-2 cursor-pointer hover:text-gray-200"
            >
              <img
                src={item.icon}
                alt={item.name}
                className="w-6 h-6 object-contain"
              />

              <span className="text-sm font-medium">
                {item.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
