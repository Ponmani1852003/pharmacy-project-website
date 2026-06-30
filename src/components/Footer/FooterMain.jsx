import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

import {
  FaVk,
  FaInstagram,
  FaYoutube,
  FaTelegramPlane,
  FaWhatsapp,
  FaTwitter,
} from "react-icons/fa";

import { FiMail, FiPhone } from "react-icons/fi";

function FooterMain() {
  return (
    <footer className="bg-gradient-to-r from-[#0B2D7A] to-[#35D4BF] pt-24 sm:pt-28 pb-10 sm:pb-14 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-6 text-center sm:text-left">

          {/* Logo */}
          <div className="flex flex-col items-center sm:items-start">
            <Link to="/" className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 mb-4">
              <img
                src={logo}
                alt="logo"
                className="w-12 h-12 sm:w-14 sm:h-14 object-contain mx-auto sm:mx-0"
              />
              <div className="text-center sm:text-left">
                <h2 className="text-xl sm:text-2xl font-bold">Pharmacy</h2>
                <p className="text-xs sm:text-sm text-gray-200">
                  Online Pharmacy
                </p>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-gray-200 leading-6 sm:leading-7">
              All rights reserved and protected by law.
            </p>
          </div>

          {/* Column 2 */}
          <div className="flex justify-center sm:justify-start">
            <ul className="space-y-3 sm:space-y-4 text-gray-100 text-sm sm:text-base">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About Company
                </Link>
              </li>
              <li>
                <Link to="/delivery" className="hover:text-white transition-colors">
                  Delivery
                </Link>
              </li>
              <li>Pickup</li>
              <li>
                <Link to="/payment" className="hover:text-white transition-colors">
                  Payment
                </Link>
              </li>
              <li>
                <Link to="/license" className="hover:text-white transition-colors">
                  License
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="flex justify-center sm:justify-start">
            <ul className="space-y-3 sm:space-y-4 text-gray-100 text-sm sm:text-base">
              <li>
                <Link to="/contacts" className="hover:text-white transition-colors">
                  Feedback
                </Link>
              </li>
              <li>Advertise</li>
              <li>Franchise</li>
              <li>Jobs</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center sm:items-start">

            <div className="flex gap-3 mb-5 sm:mb-6">
              <FiMail className="text-xl sm:text-2xl text-[#4BE3CF] shrink-0" />

              <div className="text-left">
                <h4 className="font-bold text-sm sm:text-base">
                  INFO@RESTOLL.RU
                </h4>

                <p className="text-xs sm:text-sm text-gray-200">
                  Write to us
                </p>
              </div>
            </div>

            <div className="flex gap-3 mb-6 sm:mb-8">
              <FiPhone className="text-xl sm:text-2xl text-[#4BE3CF] shrink-0" />

              <div className="text-left">
                <h4 className="font-bold text-sm sm:text-base">
                  8-800-777-22-33
                </h4>

                <p className="text-xs sm:text-sm text-gray-200">
                  24/7 Support
                </p>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3">
              {[FaVk, FaInstagram, FaWhatsapp, FaTelegramPlane, FaYoutube, FaTwitter].map(
                (Icon, index) => (
                  <div
                    key={index}
                    className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#4BE3CF] flex items-center justify-center cursor-pointer hover:scale-110 transition"
                  >
                    <Icon className="text-white text-xs" />
                  </div>
                )
              )}
            </div>

          </div>

          {/* Address */}
          <div className="text-xs sm:text-sm text-gray-100 leading-6 sm:leading-8">
            <p>Pharmacy Ltd.</p>
            <p>Moscow, Frunzenskaya Embankment, Building 42</p>
            <p>Office 2</p>
            <p>License No. LO-50-02-007632</p>
            <p>Tax ID: 7704865540</p>
          </div>

        </div>

      </div>
    </footer>
  );
}

export default FooterMain;