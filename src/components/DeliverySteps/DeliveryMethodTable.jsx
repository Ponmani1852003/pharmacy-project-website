const rows = [
  { method: "Pickup", time: "150 RUB", cost: "Free" },
  { method: "Courier Delivery", time: "300 RUB", cost: "Free from 1,000 RUB" },
  { method: "Express Delivery", time: "500 RUB", cost: "Paid" },
];

function DeliveryMethodTable() {
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-gray-50 text-gray-500">
            <th className="text-left font-medium px-4 py-3">Delivery Method</th>
            <th className="text-left font-medium px-4 py-3">Fulfillment Time</th>
            <th className="text-right font-medium px-4 py-3">Cost</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.method} className="border-t border-gray-100">
              <td className="px-4 py-3 text-gray-700">{row.method}</td>
              <td className="px-4 py-3 text-gray-700">{row.time}</td>
              <td className="px-4 py-3 text-right text-teal-600 font-medium">{row.cost}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DeliveryMethodTable;
