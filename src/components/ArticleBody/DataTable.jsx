const rows = [
  { slot: 10, name: "Audrey Mckinney", address: "1473 Ranchview Dr San Jose", phone: "(209) 555-0104" },
  { slot: 1, name: "Savannah Howard", address: "8445 Railroad St Undefined Tampa", phone: "(201) 555-0124" },
  { slot: 2, name: "Morris Cooper", address: "8564 W Sherman St Undefined Desoto", phone: "(305) 555-0125" },
  { slot: 8, name: "Victoria Lane", address: "1031 Ranchview Dr Undefined San Francisco", phone: "(704) 555-0127" },
  { slot: 9, name: "Stella Warren", address: "6380 Fincher Rd Undefined Tucson", phone: "(319) 555-0114" },
  { slot: 4, name: "Max Alexander", address: "4632 Mccollum Rd Undefined Denton", phone: "(319) 555-0115" },
  { slot: 8, name: "Guy Richards", address: "3891 Ranchview Dr Undefined Richardson", phone: "(307) 555-0119" },
  { slot: 3, name: "Kyle Murphy", address: "8223 Adams St Undefined Glendale", phone: "(603) 555-0123" },
  { slot: 3, name: "Morris Bell", address: "3763 W Dallas St Undefined Simi Valley", phone: "(843) 555-0130" },
  { slot: 1, name: "Jacob Black", address: "6405 Thornridge Cir Undefined Jacksonville", phone: "(279) 555-0117" },
  { slot: 10, name: "Arlene Steward", address: "3781 Spring St Undefined Salinas", phone: "(414) 555-0132" },
  { slot: 7, name: "Nathan Flores", address: "9553 Railroad St Undefined Lewisville", phone: "(684) 555-0102" },
  { slot: 8, name: "Marjorie Hawkins", address: "2118 Thornridge Cir Undefined Syracuse", phone: "(907) 555-0101" },
  { slot: 3, name: "Ralph Jones", address: "7726 Cantral St Undefined South Bend", phone: "(303) 555-0105" },
  { slot: 10, name: "Marvin Mccoy", address: "9915 Saddle St Undefined San Francisco", phone: "(629) 555-0129" },
  { slot: 10, name: "Calvin Henry", address: "6638 Cackson St Undefined Stockton", phone: "(307) 555-0133" },
  { slot: 10, name: "Julie Webb", address: "6386 Spring St Undefined Anchorage", phone: "(262) 555-0131" },
  { slot: 5, name: "Dianne Cooper", address: "6513 Dogwood Ave Undefined Syracuse", phone: "(405) 555-0128" },
  { slot: 7, name: "Edward Russell", address: "2496 Miller Ave Undefined Lansing", phone: "(603) 555-0103" },
];

function DataTable() {
  return (
    <div className="rounded-2xl overflow-hidden border border-gray-200">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-teal-400 text-white">
              <th className="text-left font-semibold px-4 py-3">Slot</th>
              <th className="text-left font-semibold px-4 py-3">Name</th>
              <th className="text-left font-semibold px-4 py-3">Address</th>
              <th className="text-left font-semibold px-4 py-3">Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                <td className="px-4 py-3 text-gray-500">{row.slot}</td>
                <td className="px-4 py-3 text-gray-700">{row.name}</td>
                <td className="px-4 py-3 text-gray-500 whitespace-nowrap">{row.address}</td>
                <td className="px-4 py-3 text-gray-500 whitespace-nowrap">{row.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DataTable;
