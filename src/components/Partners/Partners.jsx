import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import PartnerCard from "./PartnerCard";

import partner1 from "../../assets/images/otpbank.png";
import partner2 from "../../assets/images/bnpparibasbank.png";
import partner3 from "../../assets/images/Vector.png";
import partner4 from "../../assets/images/raiffeisen.png";
import partner5 from "../../assets/images/paypal.png";
import partner6 from "../../assets/images/mtsbank.png";
import partner7 from "../../assets/images/ziraatbank.png";
import partner8 from "../../assets/images/vostbank.png";
import partner9 from "../../assets/images/vtb.png";
import partner10 from "../../assets/images/severgazbank.png";
import partner11 from "../../assets/images/yoomoney.png";
import partner12 from "../../assets/images/vbrr.png";

function Partners() {
  const partners = [
    { logo: partner1, name: "Partner 1" },
    { logo: partner2, name: "Partner 2" },
    { logo: partner3, name: "Partner 3" },
    { logo: partner4, name: "Partner 4" },
    { logo: partner5, name: "Partner 5" },
    { logo: partner6, name: "Partner 6" },
    { logo: partner7, name: "Partner 7" },
    { logo: partner8, name: "Partner 8" },
    { logo: partner9, name: "Partner 9" },
    { logo: partner10, name: "Partner 10" },
    { logo: partner11, name: "Partner 11" },
    { logo: partner12, name: "Partner 12" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

      {/* Header */}
      <div className="flex justify-between items-center ">

        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
          Our Partners
        </h2>

        <div className="hidden md:flex gap-4">
          <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100">
            <FaChevronLeft />
          </button>

          <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100">
            <FaChevronRight />
          </button>
        </div>

      </div>

      {/* Logos */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6  gap-x-5">
        {partners.map((partner, index) => (
          <PartnerCard
            key={index}
            logo={partner.logo}
            name={partner.name}
          />
        ))}
      </div>

    </section>
  );
}

export default Partners;