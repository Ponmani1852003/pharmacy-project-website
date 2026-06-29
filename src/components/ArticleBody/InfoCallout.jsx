import { Infinity } from "lucide-react";

function InfoCallout({ children }) {
  return (
    <div className="flex items-start gap-3 text-gray-600">
      <Infinity className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
      <p className="leading-relaxed">{children}</p>
    </div>
  );
}

export default InfoCallout;
