function AlphabetTabs() {
  return (
    <div className="flex flex-wrap gap-10 mb-10">
      <button className="text-2xl font-bold text-gray-800 md:text-3xl lg:text-5xl">
        Alphabet Search
      </button>

      <button className="text-xl md:text-2xl lg:text-4xl text-[#34d1bf] hover:text-[#26b8a8] transition">
        Search by Disease
      </button>
    </div>
  );
}

export default AlphabetTabs;