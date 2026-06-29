import AlphabetTabs from "./AlphabetTabs";
import AlphabetGrid from "./AlphabetGrid";
import LargeLetter from "./LargeLetter";

function AlphabetSearch() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

      <AlphabetTabs />

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 items-center">

        <div className="lg:col-span-3">
          <AlphabetGrid />
        </div>

        <div className="hidden lg:flex justify-end">
          <LargeLetter />
        </div>

      </div>

    </section>
  );
}

export default AlphabetSearch;