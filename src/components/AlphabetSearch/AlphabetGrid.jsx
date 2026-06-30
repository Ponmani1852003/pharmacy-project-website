function AlphabetGrid() {
    const russian = [
        "А", "Б", "В", "Г", "Д", "Е", "Ё", "Ж", "З", "И", "Й", "К", "Л", "М", "Н", "О",
        "П", "Р", "С", "Т", "У", "Ф", "Х", "Ц", "Ч", "Ш", "Щ", "Ъ", "Ы", "Ь", "Э", "Ю", "Я"
    ];

    const english = [
        "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
        "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
    ];

    const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

    return (
        <div className="space-y-4 sm:space-y-6">

            {/* Russian */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 md:gap-3 w-full">
                {russian.map((letter, index) => (
                    <button
                        key={index}
                        className={`w-5 h-5 sm:w-6 sm:h-6 text-[11px] sm:text-[13px] font-medium rounded transition
        ${letter === "А"
                                ? "bg-[#E9FBF8] text-[#2DD4BF]"
                                : "text-gray-500 hover:text-[#2DD4BF]"
                            }`}
                    >
                        {letter}
                    </button>
                ))}
            </div>

            {/* English */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 md:gap-6 sm:ml-4">
                {english.map((letter, index) => (
                    <button
                        key={index}
                        className="text-xs sm:text-sm text-gray-500 font-semibold hover:text-[#34d1bf]"
                    >
                        {letter}
                    </button>
                ))}
            </div>

            {/* Numbers */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 md:gap-8 sm:ml-4">
                {numbers.map((number, index) => (
                    <button
                        key={index}
                        className="text-xs sm:text-sm text-gray-500 font-semibold hover:text-[#34d1bf]"
                    >
                        {number}
                    </button>
                ))}
            </div>

        </div>
    );
}

export default AlphabetGrid;