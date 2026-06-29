function FooterForm() {
  return (
    <div className="relative z-10 max-w-[1280px] mx-auto bg-white rounded-xl shadow-2xl px-8 py-8 -mb-16">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">
        Have Questions?
      </h2>

      <div className="flex flex-col lg:flex-row lg:items-center gap-5">
        {/* Name */}
        <input
          type="text"
          placeholder="Your Name"
          className="flex-1 border border-gray-300 rounded-full px-6 py-4 outline-none focus:border-[#34d3bf]"
        />

        {/* Phone */}
        <input
          type="text"
          placeholder="+1 (___) ___-____"
          className="flex-1 border border-gray-300 rounded-full px-6 py-4 outline-none focus:border-[#34d3bf]"
        />

        {/* Privacy */}
        <p className="text-xs text-gray-500 max-w-[220px]">
          By clicking the button, you agree to the processing of{" "}
          <span className="text-[#34d3bf] underline cursor-pointer">
            personal data
          </span>
        </p>

        {/* Button */}
        <button className="bg-[#34d3bf] hover:bg-[#2fc0ad] text-white font-semibold px-10 py-4 rounded-full shadow-lg transition">
          Ask Question
        </button>
      </div>
    </div>
  );
}

export default FooterForm;