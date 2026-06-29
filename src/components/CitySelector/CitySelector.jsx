import { useState } from "react";
import { Search } from "lucide-react";

const cities = [
  "Moscow", "Saint Petersburg", "Nizhny Novgorod", "Rostov-on-Don", "Samara",
  "Kazan", "Yekaterinburg", "Tolyatti", "Ufa", "Omsk",
  "Volgograd", "Stavropol", "Chelyabinsk", "Krasnodar", "Voronezh",
  "Yaroslavl", "Saratov", "Izhevsk", "Perm", "Novosibirsk",
];

function CitySelector() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState("Moscow");

  const filtered = cities.filter((c) => c.toLowerCase().includes(query.toLowerCase()));

  return (
    <div>
      <p className="text-sm font-semibold text-gray-700 mb-3">Choose a City</p>

      <div className="relative mb-5">
        <Search className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Find your city..."
          className="w-full border border-gray-200 rounded-full pl-11 pr-4 py-3 text-sm outline-none focus:border-teal-400"
        />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-2 gap-x-4 text-sm">
        {filtered.map((city) => (
          <button
            key={city}
            onClick={() => setActive(city)}
            className={`text-left ${
              active === city ? "text-teal-500 font-semibold" : "text-gray-600 hover:text-teal-500"
            }`}
          >
            {city}
          </button>
        ))}
      </div>
    </div>
  );
}

export default CitySelector;
