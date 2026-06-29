function AlphabetTabs() {
  return (
    <div className="flex flex-wrap gap-10 mb-10">
      <button className="text-4xl font-bold text-gray-800">
        Alphabet Search
      </button>

      <button className="text-2xl text-[#34d1bf] hover:text-[#26b8a8] transition">
        Search by Disease
      </button>
    </div>
  );
}

export default AlphabetTabs;