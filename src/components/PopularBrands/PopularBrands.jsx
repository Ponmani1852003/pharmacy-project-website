const columns = [
  ["Sinyp", "Maraxin", "Mark Easy", "Krapp"],
  ["Abat", "Esthetica", "Adler", "MEC"],
  ["Comenda", "Defenat", "Sofa", "Ominasel"],
  ["Kosukea", "Glianos", "Amika", "Inafro"],
  ["Apath", "Electisa", "Fagor", "Inafro"],
  ["Modular", "Vortimax", "ATA", "Inafro"],
  ["Compack", "Krosta", "WinterMaher", "Tafra"],
];

function PopularBrands() {
  return (
    <div className="border border-gray-200 rounded-xl p-5 mb-6">
      <p className="text-xs font-semibold text-gray-500 tracking-wide mb-4">POPULAR BRANDS</p>
      <div className="grid grid-cols-3 md:grid-cols-7 gap-x-6 gap-y-2 text-sm text-gray-600">
        {columns.map((col, i) => (
          <ul key={i} className="space-y-2">
            {col.map((brand) => (
              <li key={brand} className="hover:text-teal-500 cursor-pointer">
                {brand}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}

export default PopularBrands;
