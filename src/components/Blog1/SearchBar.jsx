import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="bg-[#F5F7F8] rounded-3xl p-10">

      <div className="bg-white border rounded-full px-7 py-4 flex items-center">

        <input
          type="text"
          placeholder="Start typing or enter the name of a medicine..."
          className="flex-1 outline-none text-gray-700 placeholder:text-gray-400"
        />

        <button>

          <Search
            size={20}
            className="text-[#1CC7A0]"
          />

        </button>

      </div>

    </div>
  );
};

export default SearchBar;