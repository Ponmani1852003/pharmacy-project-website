import { FaMapMarkerAlt, FaHeart, FaUser, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import favouriteIcon from "../../assets/icons/favorite_border.png";
import personIcon from "../../assets/icons/person.png";

function TopBar() {
  return (<div className="text-sm"> <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-2">


    <div className="flex items-center gap-6">
      <div className="flex items-center gap-2">
        <FaMapMarkerAlt />
        <span className="text-gray-500 text-base">Moscow Region</span>
      </div>
      <div className="flex items-center gap-2 ">
        <FaBars className="text-teal-500"/>
        <span className="text-gray-500 text-base">Service Pages</span>
      </div>
    </div>

    <div className="flex items-center gap-6">
      <Link to="/favorites" className="flex items-center gap-2">
        <span className="text-gray-500 text-base">Favorites</span>
        <img
          src={favouriteIcon}
          alt="Favorites"
          className="w-4 h-4"
        />
      </Link>

      <Link to="/account" className="flex items-center gap-2">
        <span className="text-gray-500 text-base">My Account</span>
        <img
          src={personIcon}
          alt="User"
          className="w-4 h-4"
        />
      </Link>
    </div>

  </div>
  </div>

  );
}

export default TopBar;
