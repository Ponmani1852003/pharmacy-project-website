function FooterForm() {
  return (
    <div className="relative z-10 max-w-[1280px] mx-auto bg-white rounded-xl shadow-2xl px-5 sm:px-6 md:px-8 py-6 sm:py-8 -mb-16">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-5 sm:mb-6 md:mb-8 text-center lg:text-left">
        Have Questions?
      </h2>

      <div className="flex flex-col lg:flex-row lg:items-center gap-4 sm:gap-5 items-center">
        {/* Name */}
        <input
          type="text"
          placeholder="Your Name"
          className="w-full lg:flex-1 border border-gray-300 rounded-full px-5 sm:px-6 py-3 sm:py-4 text-sm sm:text-base outline-none focus:border-[#34d3bf]"
        />

        {/* Phone */}
        <input
          type="text"
          placeholder="+1 (___) ___-____"
          className="w-full lg:flex-1 border border-gray-300 rounded-full px-5 sm:px-6 py-3 sm:py-4 text-sm sm:text-base outline-none focus:border-[#34d3bf]"
        />

        {/* Privacy */}
        <p className="text-xs text-gray-500 max-w-[260px] sm:max-w-[220px] text-center lg:text-left">
          By clicking the button, you agree to the processing of{" "}
          <span className="text-[#34d3bf] underline cursor-pointer">
            personal data
          </span>
        </p>

        {/* Button */}
        <button className="w-full lg:w-auto bg-[#34d3bf] hover:bg-[#2fc0ad] text-white text-sm sm:text-base font-semibold px-8 sm:px-10 py-3 sm:py-4 rounded-full shadow-lg transition">
          Ask Question
        </button>
      </div>
    </div>
  );
}

export default FooterForm;