import { FaMapMarkerAlt, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import favouriteIcon from "../../assets/icons/favorite_border.png";
import personIcon from "../../assets/icons/person.png";

function TopBar() {
  return (
    <div className="text-sm">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2 px-4 py-2">

        <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
          <div className="flex items-center gap-1 sm:gap-2">
            <FaMapMarkerAlt className="text-xs sm:text-sm md:text-base" />
            <span className="text-gray-500 text-xs sm:text-sm md:text-base">
              Moscow Region
            </span>
          </div>
          <div className="flex items-center gap-1 sm:gap-2">
            <FaBars className="text-teal-500 text-xs sm:text-sm md:text-base" />
            <span className="text-gray-500 text-xs sm:text-sm md:text-base">
              Service Pages
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
          <Link to="/favorites" className="flex items-center gap-1 sm:gap-2">
            <span className="text-gray-500 text-xs sm:text-sm md:text-base">
              Favorites
            </span>
            <img
              src={favouriteIcon}
              alt="Favorites"
              className="w-3 h-3 sm:w-4 sm:h-4 object-contain align-middle"
            />
          </Link>

          <Link to="/account" className="flex items-center gap-1 sm:gap-2">
            <span className="text-gray-500 text-xs sm:text-sm md:text-base">
              My Account
            </span>
            <img
              src={personIcon}
              alt="User"
              className="w-3 h-3 sm:w-4 sm:h-4 object-contain align-middle"
            />
          </Link>
        </div>

      </div>
    </div>
  );
}

export default TopBar;