import heroImage from "../../assets/images/toothbrush.png";

function HeroContent() {
  return (
    <div className="lg:col-span-7 flex flex-col sm:flex-row items-center gap-6 sm:gap-8 lg:gap-10">

      <div>
        <h1 className="text-xl sm:text-2xl font-bold text-[#173A89] md:text-3xl lg:text-4xl">
          Oral-B Vitality
        </h1>

        <h2 className="text-lg sm:text-xl text-[#173A89] mt-2">
          Electric Toothbrush
        </h2>

        <p className="text-gray-500 text-sm sm:text-base mt-4 sm:mt-6 leading-7 sm:leading-8">
          An electric toothbrush has been clinically proven to clean your mouth more effectively than a regular manual toothbrush.
        </p>

        <button className="mt-5 sm:mt-8 bg-[#173A89] text-white px-5 py-2.5 text-sm sm:px-8 sm:py-4 sm:text-base rounded-full">
          Shop Now
        </button>
      </div>

      <img
        src={heroImage}
        alt="Hero"
        className="order-second sm:order-last w-40 sm:w-56 lg:w-72"
      />

    </div>
  );
}

export default HeroContent;