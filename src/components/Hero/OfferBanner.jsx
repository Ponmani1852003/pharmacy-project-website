import niveaImage from "../../assets/images/nivea.png";

function OfferBanner() {
  return (
    <div className="lg:col-span-3">

      <img
        src={niveaImage}
        alt="Nivea"
        className="w-40 sm:w-48 md:w-56 lg:w-full my-4 sm:my-5 md:my-6 mx-auto lg:mx-0 object-contain"
      />

    </div>
  );
}

export default OfferBanner;