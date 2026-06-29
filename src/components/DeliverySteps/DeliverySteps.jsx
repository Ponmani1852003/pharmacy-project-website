import { MessageSquare, Truck, PhoneCall, PackageCheck, ChevronRight } from "lucide-react";

const steps = [
  { icon: MessageSquare, text: "SMS with the courier's phone number" },
  { icon: Truck, text: "Careful transportation in proper conditions" },
  { icon: PhoneCall, text: "Courier calls before delivery" },
  { icon: PackageCheck, text: "Delivery at a convenient time slot" },
];

function DeliverySteps() {
  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-2">
      {steps.map(({ icon: Icon, text }, i) => (
        <div key={i} className="flex items-center gap-2 flex-1">
          <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-4 flex-1">
            <div className="w-10 h-10 rounded-full bg-teal-400 flex items-center justify-center shrink-0">
              <Icon className="w-5 h-5 text-white" />
            </div>
            <p className="text-sm text-gray-700 leading-snug">{text}</p>
          </div>
          {i < steps.length - 1 && (
            <ChevronRight className="w-5 h-5 text-gray-300 hidden sm:block shrink-0" />
          )}
        </div>
      ))}
    </div>
  );
}

export default DeliverySteps;
