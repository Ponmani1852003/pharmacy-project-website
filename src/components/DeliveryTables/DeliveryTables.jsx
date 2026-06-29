function DeliveryTable({ title, rows }) {
  return (
    <div>
      <p className="font-semibold text-gray-800 mb-3">{title}</p>
      <div className="border border-gray-200 rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50 text-gray-500">
              <th className="text-left font-medium px-4 py-3">Order amount</th>
              <th className="text-right font-medium px-4 py-3">up to 500 RUB</th>
              <th className="text-right font-medium px-4 py-3">from 500 RUB</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.label} className="border-t border-gray-100">
                <td className="px-4 py-3 text-gray-700">{row.label}</td>
                <td className="px-4 py-3 text-right text-gray-700">{row.upTo}</td>
                <td className="px-4 py-3 text-right text-teal-600 font-medium">{row.from}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function DeliveryTables() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Delivery & Pickup in Moscow and the Region
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <DeliveryTable
          title="Orders within the Moscow ring road (MKAD)"
          rows={[{ label: "Within MKAD", upTo: "150 RUB", from: "Free" }]}
        />
        <DeliveryTable
          title="Orders outside the Moscow ring road (MKAD)"
          rows={[{ label: "Outside MKAD", upTo: "150 RUB", from: "Free" }]}
        />
      </div>
    </section>
  );
}

export default DeliveryTables;
