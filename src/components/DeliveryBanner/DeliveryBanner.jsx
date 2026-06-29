import { Bike } from "lucide-react";

function DeliveryBanner() {
  return (
    <div className="bg-gray-50 rounded-2xl p-6 flex items-center gap-5">
      <div className="w-16 h-16 rounded-full bg-teal-400 flex items-center justify-center shrink-0">
        <Bike className="w-8 h-8 text-white" />
        
      </div>
      <div>
        <h3 className="font-bold text-gray-800 mb-1">Stay home! Order delivery!</h3>
        <p className="text-sm text-gray-500 leading-relaxed">
          To guarantee safety and give you peace of mind, we check the health of all our
          couriers every day and provide them with fresh medical masks, gloves, and antiseptics
          before every shift.
        </p>
      </div>
    </div>
  );
}

export default DeliveryBanner;
