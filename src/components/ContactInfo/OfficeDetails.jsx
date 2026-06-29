import { Navigation, Phone, Clock, Mail } from "lucide-react";

function OfficeDetails() {
  return (
    <div>
      <div className="flex items-center gap-2 text-teal-500 mb-3">
        <Navigation className="w-4 h-4" />
        <span className="text-xs font-semibold tracking-wide text-gray-500 uppercase">
          Main Office
        </span>
      </div>

      <h3 className="text-xl font-bold text-gray-800 leading-snug mb-7">
        129226, Moscow, Dokukina St., 16, building 1, 6th floor
      </h3>

      <div className="grid grid-cols-2 gap-x-8 gap-y-6">
        <div className="flex items-start gap-2.5">
          <Phone className="w-4 h-4 text-teal-500 mt-1" />
          <div>
            <p className="font-bold text-gray-800">8-800-777-22-33</p>
            <p className="text-sm text-gray-500">Request a call</p>
          </div>
        </div>

        <div className="flex items-start gap-2.5">
          <Phone className="w-4 h-4 text-teal-500 mt-1" />
          <div>
            <p className="font-bold text-gray-800">8 (495) 223-34-03</p>
            <p className="text-sm text-gray-500">Free across Russia</p>
          </div>
        </div>

        <div className="flex items-start gap-2.5">
          <Clock className="w-4 h-4 text-teal-500 mt-1" />
          <div>
            <p className="font-bold text-gray-800">8:00 - 22:00</p>
            <p className="text-sm text-gray-500">Open every day</p>
          </div>
        </div>

        <div className="flex items-start gap-2.5">
          <Mail className="w-4 h-4 text-teal-500 mt-1" />
          <div>
            <p className="font-bold text-gray-800">info@restoll.ru</p>
            <p className="text-sm text-gray-500">Write to us</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OfficeDetails;
