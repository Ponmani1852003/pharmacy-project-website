import CategoryTabs from "./CategoryTabs";
import HeroContent from "./HeroContent";
import OfferBanner from "./OfferBanner";
import SideProducts from "./SideProducts";

function Hero() {
  return (
    <section className="bg-[#F8FCFD] py-6">
      <div className="max-w-7xl mx-auto px-4">
        <CategoryTabs />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
          <HeroContent />
          <OfferBanner />
          <SideProducts />
        </div>
      </div>
    </section>
  );
}

export default Hero;