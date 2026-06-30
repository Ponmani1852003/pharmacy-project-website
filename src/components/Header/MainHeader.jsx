import {
    FaEnvelope,
    FaPhoneAlt,
    FaSearch,
    FaShoppingCart,
    FaVk,
    FaInstagram,
    FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

function MainHeader() {
    return (
        <div className="bg-white">
            <div className="max-w-7xl mx-auto px-4 py-3 sm:py-4 md:py-5 flex flex-wrap items-center justify-between gap-3 sm:gap-4">

                {/* Logo */}
                <div className="flex items-center gap-2 sm:gap-3">
                    <Link to="/" className="flex items-center gap-2 sm:gap-3">
                        <img
                            src={logo}
                            alt="Pharmacy Logo"
                            className="h-10 w-auto sm:h-12 md:h-16 object-contain"
                        />
                        <div>
                            <h1 className="text-base sm:text-lg md:text-xl font-semibold text-teal-500">
                                Pharmacy.online
                            </h1>
                            <p className="text-gray-500 text-xs sm:text-sm">
                                Your online pharmacy
                            </p>
                        </div>
                    </Link>
                </div>

                {/* Socials */}
                <div className="flex items-center gap-3 sm:gap-4">
                    <FaVk className="text-[#4CC7B0] text-base sm:text-lg cursor-pointer hover:text-[#37B69F]" />
                    <FaInstagram className="text-[#4CC7B0] text-base sm:text-lg cursor-pointer hover:text-[#37B69F]" />
                    <FaYoutube className="text-[#4CC7B0] text-lg sm:text-xl cursor-pointer hover:text-[#36b09b]" />
                </div>

                {/* Email */}
                <div className="hidden md:flex items-center gap-3">
                    <FaEnvelope className="text-teal-500 text-lg md:text-xl" />
                    <div>
                        <h3 className="font-semibold text-sm md:text-base">info@restoll.ru</h3>
                        <p className="text-gray-500 text-xs sm:text-sm">
                            Write to us
                        </p>
                    </div>
                </div>

                {/* Phone 1 */}
                <div className="hidden lg:flex items-center gap-3">
                    <FaPhoneAlt className="text-teal-500 text-lg md:text-xl" />
                    <div>
                        <h3 className="font-semibold text-sm md:text-base">
                            8-800-777-22-33
                        </h3>
                        <p className="text-gray-500 text-xs sm:text-sm">
                            Around the clock
                        </p>
                    </div>
                </div>

                {/* Phone 2 */}
                <div className="hidden lg:flex items-center gap-3">
                    <FaPhoneAlt className="text-teal-500 text-lg md:text-xl" />
                    <div>
                        <h3 className="font-semibold text-sm md:text-base">
                            8 (495) 223-34-03
                        </h3>
                        <p className="text-gray-500 text-xs sm:text-sm">
                            Online pharmacy
                        </p>
                    </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                    <button className="border border-gray-200 rounded-full p-1.5 sm:p-2">
                        <FaSearch className="text-teal-500 text-base sm:text-lg md:text-xl" />
                    </button>

                    <button className="bg-teal-400 hover:bg-teal-500 text-white px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full font-semibold text-xs sm:text-sm md:text-base">
                        Request a Call
                    </button>

                    <Link to="/cart" className="border border-gray-200 rounded-full p-2 sm:p-2.5 md:p-3 inline-flex">
                        <FaShoppingCart className="text-teal-500 text-base sm:text-lg md:text-xl" />
                    </Link>
                </div>

            </div>
        </div>
    );
}

export default MainHeader;