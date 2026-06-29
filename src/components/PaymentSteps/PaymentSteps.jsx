import { Package, Building2, ClipboardCheck, ShoppingBag } from "lucide-react";

const steps = [
  {
    icon: Package,
    color: "text-orange-400",
    title: "Choose a Product",
    text: "Use the search to find the item you need",
  },
  {
    icon: Building2,
    color: "text-sky-400",
    title: "Choose a Pharmacy",
    text: "Pick the pharmacy that's most convenient for pickup",
  },
  {
    icon: ClipboardCheck,
    color: "text-orange-400",
    title: "Place the Order",
    text: "Follow the instructions to complete your order",
  },
  {
    icon: ShoppingBag,
    color: "text-pink-400",
    title: "Get Your Order",
    text: "Pick up your order at the nearest pharmacy",
  },
];

function PaymentSteps() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {steps.map(({ icon: Icon, color, title, text }, i) => (
        <div key={i} className="flex gap-3">
          <div className="relative shrink-0">
            <Icon className={`w-9 h-9 ${color}`} strokeWidth={1.5} />
            <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-gray-700 text-white text-[10px] font-bold flex items-center justify-center">
              {i + 1}
            </span>
          </div>
          <div>
            <p className="font-bold text-gray-800 text-sm mb-1">{title}</p>
            <p className="text-xs text-gray-500 leading-relaxed">{text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PaymentSteps;
