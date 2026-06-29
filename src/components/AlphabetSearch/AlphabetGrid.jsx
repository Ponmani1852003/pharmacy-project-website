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
        <div className="space-y-6">

            {/* Russian */}
            {/* Russian */}
            {/* Russian */}
            <div className="flex justify-between items-center w-full">
                {russian.map((letter, index) => (
                    <button
                        key={index}
                        className={`w-6 h-6 text-[13px] font-medium rounded transition
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
            <div className="flex flex-wrap items-center gap-6 ml-4">
                {english.map((letter, index) => (
                    <button
                        key={index}
                        className="text-gray-500 font-semibold hover:text-[#34d1bf]"
                    >
                        {letter}
                    </button>
                ))}
            </div>

            {/* Numbers */}
            <div className="flex flex-wrap items-center gap-8 ml-4">
                {numbers.map((number, index) => (
                    <button
                        key={index}
                        className="text-gray-500 font-semibold hover:text-[#34d1bf]"
                    >
                        {number}
                    </button>
                ))}
            </div>

        </div>
    );
}

export default AlphabetGrid;