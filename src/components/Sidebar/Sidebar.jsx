import CategoryList from "./CategoryList.jsx";
import PriceFilter from "./PriceFilter.jsx";
import CountryFilter from "./CountryFilter.jsx";
import EffectFilter from "./EffectFilter.jsx";
import AvailabilityFilter from "./AvailabilityFilter.jsx";
import BestSellers from "./BestSellers.jsx";

function Sidebar() {
  return (
    <aside className="w-full lg:w-[260px] shrink-0">
      <CategoryList />

      <div className="border border-gray-200 rounded-xl p-5 mt-6 space-y-6">
        <p className="text-xs font-semibold text-gray-500 tracking-wide">FILTER</p>
        <PriceFilter />
        <CountryFilter />
        <EffectFilter />
        <AvailabilityFilter />
      </div>

      <BestSellers />
    </aside>
  );
}

export default Sidebar;
