import AboutColumn from "./AboutColumn";
import InfoBox from "./InfoBox";

function About() {
  const column1 = [
    "The Barclay Plaza Class B+ business center, built in 2008, is, despite its age, one of the most sought-after business centers in Moscow's Western Administrative District.",
    "The proximity to Kutuzovsky Prospekt, Minskaya Street, and Moscow-City, as well as three metro stations within walking distance, adds to its appeal. For example, the Park Pobedy metro station is just 800 meters away.",
    "Barclay Plaza features a stylish panoramic façade, a unique entrance, and designer finishes in the common areas and elevator lobbies. Ceilings in the offices are over 3 meters high.",
  ];

  const column2 = [
    "The Barclay Plaza Class B+ business center, built in 2008, is, despite its age, one of the most sought-after business centers in the city's Western Administrative District.",
    "The proximity to Kutuzovsky Prospekt, Minskaya Street, and Moscow-City, as well as three metro stations within walking distance, adds to its appeal. For example, the Park Pobedy metro station is just 800 meters away.",
    "Barclay Plaza features a stylish panoramic façade, a unique entrance, and designer finishes in the common areas and elevator lobbies. Ceilings in the offices are over 3 meters high.",
  ];

  const column3 = [
    "The Barclay Plaza Class B+ business center, built in 2008, is, despite its age, one of the most sought-after business centers in Moscow's Western Administrative District.",
    "The proximity to Kutuzovsky Prospekt, Minskaya Street, and Moscow-City, as well as three metro stations within walking distance, adds to its appeal. For example, the Park Pobedy metro station is just 800 meters away.",
    "Barclay Plaza features a stylish panoramic façade, a unique entrance, and designer finishes in the common areas and elevator lobbies. Ceilings in the offices are over 3 meters high.",
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 py-10">

      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-14">
        About Company
      </h2>

      {/* Three Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {/* Column 1 */}
        <AboutColumn
          items={column1}
          showDot={false}
        />

        {/* Column 2 (Only this column has dots) */}
        <AboutColumn
          items={column2}
          showDot={true}
        />

        {/* Column 3 */}
        <AboutColumn
          items={column3}
          showDot={false}
        />

      </div>

      {/* Paragraph */}
      <p className="text-gray-600 leading-8 mt-14">
        Our company is committed to providing high-quality products
        and professional services. We believe in reliability,
        innovation, and customer satisfaction while delivering
        excellent healthcare solutions.
      </p>

      {/* Info Box */}
      <div className="my-10">
        <InfoBox />
      </div>

      {/* Bottom Paragraph */}
      <p className="text-gray-600 leading-4 text-[14px]">
        We continuously improve our services and expand our product
        range to meet the expectations of our customers. Our mission
        is to provide safe, affordable, and trusted healthcare
        products for everyone.
      </p>

      {/* Read More */}
      <button className="mt-5 text-[#36d1c4] font-semibold hover:underline">
        View Full Text
      </button>

    </section>
  );
}

export default About;