import { useState } from "react";

const locations = [
  { name: "Stolichki", address: "Moscow region, Likino-Dulyovo, Kalinina St., building 2A", hours: "Mon–Sat: 8:00 to 21:00", phone: "8 800 775 ** **" },
  { name: "eApteka", address: "Moscow region, Yegoryevsk, Parizhskoy Kommuny St., building 1B", hours: "Mon–Sat: 8:00 to 21:00", phone: "8 495 775 ** **" },
  { name: "Stolichki", address: "Moscow region, Likino-Dulyovo, Kalinina St., building 2A", hours: "Mon–Sat: 8:00 to 21:00", phone: "8 800 771 ** **" },
  { name: "eApteka", address: "Moscow region, Yegoryevsk, Allergiya Komediya St., building 1B", hours: "Mon–Sat: 8:00 to 21:00", phone: "8 495 731 ** **" },
  { name: "Stolichki", address: "Moscow region, Likino-Dulyovo, Kalinina St., building 2A", hours: "Mon–Sat: 8:00 to 21:00", phone: "8 800 773 ** **" },
  { name: "eApteka", address: "Moscow region, Yegoryevsk, Parizhskoy Kommuny St., building 1B", hours: "Mon–Sat: 8:00 to 21:00", phone: "8 495 731 ** **" },
  { name: "Stolichki", address: "Moscow region, Likino-Dulyovo, Kalinina St., building 2A", hours: "Mon–Sat: 8:00 to 21:00", phone: "8 800 777 ** **" },
  { name: "eApteka", address: "Moscow region, Yegoryevsk, Parizhskoy Kommuny St., building 1B", hours: "Mon–Sat: 8:00 to 21:00", phone: "8 495 735 ** **" },
  { name: "Stolichki", address: "Moscow region, Likino-Dulyovo, Kalinina St., building 2A", hours: "Mon–Sat: 8:00 to 21:00", phone: "8 800 773 ** **" },
  { name: "eApteka", address: "Moscow region, Yegoryevsk, Parizhskoy Kommuny St., building 1B", hours: "Mon–Sat: 8:00 to 21:00", phone: "8 495 731 ** **" },
];

function PickupRow({ location }) {
  const [revealed, setRevealed] = useState(false);

  return (
    <tr className="border-t border-gray-100">
      <td className="px-4 py-3 text-gray-700 font-medium whitespace-nowrap">{location.name}</td>
      <td className="px-4 py-3 text-gray-500">{location.address}</td>
      <td className="px-4 py-3">
        <div className="flex gap-1.5">
          <span className="text-[10px] font-bold border border-gray-300 text-gray-500 rounded px-1.5 py-0.5">VISA</span>
          <span className="text-[10px] font-bold border border-gray-300 text-gray-500 rounded px-1.5 py-0.5">MC</span>
        </div>
      </td>
      <td className="px-4 py-3 text-gray-500 whitespace-nowrap">{location.hours}</td>
      <td className="px-4 py-3 whitespace-nowrap">
        {revealed ? (
          <span className="text-gray-700">{location.phone.replace(/\*/g, "0")}</span>
        ) : (
          <button onClick={() => setRevealed(true)} className="text-teal-500 hover:text-teal-600 underline">
            Show number
          </button>
        )}
      </td>
      <td className="px-4 py-3">
        <button className="bg-teal-400 hover:bg-teal-500 text-white text-xs font-semibold uppercase tracking-wide rounded-full px-4 py-2 transition-colors whitespace-nowrap">
          View
        </button>
      </td>
    </tr>
  );
}

function PickupLocations() {
  const [visibleCount, setVisibleCount] = useState(10);

  return (
    <div>
      <div className="rounded-2xl overflow-hidden border border-gray-200 mb-6">
        <iframe
          title="Pharmacy locations map"
          src="https://maps.google.com/maps?q=Moscow&z=10&output=embed"
          className="w-full h-[420px] md:h-[480px]"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div className="border border-gray-200 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 text-gray-500">
                <th className="text-left font-medium px-4 py-3">Pharmacy</th>
                <th className="text-left font-medium px-4 py-3">Address</th>
                <th className="text-left font-medium px-4 py-3">Cards</th>
                <th className="text-left font-medium px-4 py-3">Hours</th>
                <th className="text-left font-medium px-4 py-3">Phone</th>
                <th className="px-4 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {locations.slice(0, visibleCount).map((loc, i) => (
                <PickupRow key={i} location={loc} />
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <button
        onClick={() => setVisibleCount((c) => c + 10)}
        className="w-full bg-teal-400 hover:bg-teal-500 text-white text-sm font-semibold uppercase tracking-wide rounded-xl py-4 mt-4 transition-colors"
      >
        » Show All Addresses
      </button>
    </div>
  );
}

export default PickupLocations;
