const locations = Array.from({ length: 5 }).map(() => ({
  name: "eApteka, Moscow region, Podolsk, Sverdlova St., building 13",
  time: "Within an hour",
  cost: "Free",
}));

function PickupTable() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Pickup in Moscow and the Region
      </h2>

      <div className="border border-gray-200 rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50 text-gray-500">
              <th className="text-left font-medium px-4 py-3">Pharmacy list</th>
              <th className="text-left font-medium px-4 py-3">Pickup time</th>
              <th className="text-right font-medium px-4 py-3">Cost</th>
            </tr>
          </thead>
          <tbody>
            {locations.map((loc, i) => (
              <tr key={i} className="border-t border-gray-100">
                <td className="px-4 py-3 text-gray-700">{loc.name}</td>
                <td className="px-4 py-3 text-gray-700">{loc.time}</td>
                <td className="px-4 py-3 text-right text-teal-600 font-medium">{loc.cost}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button className="text-teal-500 hover:text-teal-600 font-semibold text-sm mt-4">
        All Delivery Terms »
      </button>
    </section>
  );
}

export default PickupTable;
