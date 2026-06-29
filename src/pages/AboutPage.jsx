import Breadcrumb from "../components/Breadcrumb.jsx";
import PromoBanner from "../components/PromoBanner/PromoBanner.jsx";
import DevelopmentTimeline from "../components/DevelopmentTimeline/DevelopmentTimeline.jsx";
import CompanyStats from "../components/CompanyStats/CompanyStats.jsx";
import LicenseImage from "../components/LicenseImage.jsx";

export default function AboutPage() {
  return (
    <>
      <Breadcrumb trail={["Home", "About Company"]} />

      <section className="max-w-7xl mx-auto px-4 py-6 space-y-10">
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6">About Company</h1>

          <p className="text-gray-600 leading-relaxed mb-4">
            The STOLICHKI network of social pharmacies is part of the Neofarm pharmacy holding.
            The first pharmacy in Moscow opened in 2000. Our mission from day one has been
            simple: make medicines affordable. We've shortened the path medicines take from
            manufacturer to customer as much as possible. By working directly with manufacturers
            and distributors, we not only offer low prices, but also guarantee the authenticity
            of every product.
          </p>

          <p className="text-gray-600 leading-relaxed">
            In addition to low prices, we're also constantly working to expand our range so that
            finding what you need is simple. Across our pharmacy locations and on our website,
            you'll find a wide assortment: medicines, medical equipment, medicated cosmetics,
            sports nutrition, products for moms and babies, and more. Only medicines approved by
            Russia's Ministry of Health are sold in our pharmacies.
          </p>
        </div>

        <PromoBanner />

        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Founding History</h2>
          <p className="text-gray-600 leading-relaxed">
            The history of the NEOFARM group began in 2000 as a small family business —
            starting with a few pharmacy kiosks in the Krasnogorsk district of the Moscow
            region. It was led by a pharmacist and graduate of the first Sechenov Medical
            Institute, Evgeny Nifantiev. Then in 2013, on Tolbukhina Street, the first pharmacy
            under the "Stolichki" brand opened, drawing not only local residents but people
            from surrounding neighborhoods and even from Odintsovo outside Moscow. It became
            clear that the social pharmacy format was in demand, and "Stolichki" locations
            began opening one after another, rapidly expanding their reach.
          </p>
        </div>

        <DevelopmentTimeline />

        <CompanyStats />

        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Our License</h2>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-10 max-w-5xl items-center text-center">
            <LicenseImage src="/licence.png" alt="Pharmaceutical activity license — page 1" />
            {/* <LicenseImage src="/license-2.png" alt="Pharmaceutical activity license — page 2" /> */}
          </div>
        </div>
      </section>
    </>
  );
}
