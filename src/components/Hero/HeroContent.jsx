import heroImage from "../../assets/images/toothbrush.png";

function HeroContent() {
  return (
    <div className="lg:col-span-7 flex items-center gap-10">

      <div>
        <h1 className="text-5xl font-bold text-[#173A89]">
          Oral-B Vitality
        </h1>

        <h2 className="text-3xl text-[#173A89] mt-2">
          Electric Toothbrush
        </h2>

        <p className="text-gray-500 mt-6 leading-8">
          An electric toothbrush has been clinically proven to clean your mouth more effectively than a regular manual toothbrush.
        </p>

        <button className="mt-8 bg-[#173A89] text-white px-8 py-4 rounded-full">
          Shop Now
        </button>
      </div>

      <img
        src={heroImage}
        alt="Hero"
        className="w-72"
      />

    </div>
  );
}

export default HeroContent;