import { useState } from "react";
import { FileWarning, MapPin } from "lucide-react";

function DeliveryInfo() {
  const [tab, setTab] = useState("delivery");

  return (
    <div className="mt-5 border-t border-gray-100 pt-4">
      <div className="flex items-start gap-2 text-xs text-gray-500 mb-4">
        <FileWarning className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
        <p>
          <span className="text-teal-600 font-medium">Prescription required</span> — not shipped
          by mail
        </p>
      </div>

      <div className="flex gap-6 border-b border-gray-100 mb-4 text-sm">
        <button
          onClick={() => setTab("delivery")}
          className={`pb-2 font-semibold border-b-2 transition-colors ${
            tab === "delivery" ? "text-teal-500 border-teal-500" : "text-gray-400 border-transparent"
          }`}
        >
          DELIVERY & PICKUP
        </button>
        <button
          onClick={() => setTab("storage")}
          className={`pb-2 font-semibold border-b-2 transition-colors ${
            tab === "storage" ? "text-teal-500 border-teal-500" : "text-gray-400 border-transparent"
          }`}
        >
          STORAGE CONDITIONS
        </button>
      </div>

      {tab === "delivery" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-600">
          <div className="flex items-start gap-2">
            <MapPin className="w-4 h-4 text-teal-500 mt-0.5 shrink-0" />
            <div>
              <p className="font-semibold text-gray-800 mb-1">In Moscow</p>
              <p>Free delivery today on orders from 500 RUB</p>
              <p>Free pickup from the pharmacy today</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <MapPin className="w-4 h-4 text-teal-500 mt-0.5 shrink-0" />
            <div>
              <p className="font-semibold text-gray-800 mb-1">Outside Moscow ring road</p>
              <p>Free delivery today on orders from 500 RUB</p>
              <p>Free pickup from the pharmacy today</p>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-sm text-gray-600">
          Store at a temperature not exceeding 25°C, out of reach of children, away from direct
          sunlight.
        </p>
      )}
    </div>
  );
}

export default DeliveryInfo;
