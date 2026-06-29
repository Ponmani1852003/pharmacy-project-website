import { FaInfoCircle } from "react-icons/fa";

function InfoBox() {
  return (
    <div className="bg-[#f6fbfb] rounded-xl p-5 flex items-start gap-6 my-5">

      <FaInfoCircle className="text-[#36d1c4] text-[14px] mt-1 flex-shrink-0" />

      <p className="text-gray-600 leading-8 text-[16px]">
        Our company provides professional equipment and quality
        healthcare products. We focus on delivering reliable
        services, certified products, and the best customer
        experience for every order.
      </p>

    </div>
  );
}

export default InfoBox;