import niveaImage from "../../assets/images/nivea.png";

function OfferBanner() {
  return (
    <div className="lg:col-span-3 ">

    

      <img
        src={niveaImage}
        alt="Nivea"
        className="my-6"
      />

      {/* <button className="bg-orange-500 rounded-full px-6 py-3">
        Shop Now
      </button> */}

    </div>
  );
}

export default OfferBanner;