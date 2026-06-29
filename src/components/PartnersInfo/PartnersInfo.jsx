function PartnersInfo() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">For Partners</h2>

      <div className="max-w-3xl space-y-6 text-gray-600 leading-relaxed">
        <div>
          <h3 className="font-bold text-gray-800 mb-1">For Landlords</h3>
          <p>
            Send retail space lease or sublease proposals through the form on
            the website or to{" "}
            <a href="mailto:estate@neo-pharm.ru" className="text-teal-500 hover:underline">
              estate@neo-pharm.ru
            </a>
          </p>
        </div>

        <div>
          <h3 className="font-bold text-gray-800 mb-1">For Business Proposals</h3>
          <p>
            For general inquiries{" "}
            <a href="mailto:office@neo-pharm.ru" className="text-teal-500 hover:underline">
              office@neo-pharm.ru
            </a>
          </p>
          <p>
            For advertising and promotion inquiries{" "}
            <a href="mailto:press@neo-pharm.ru" className="text-teal-500 hover:underline">
              press@neo-pharm.ru
            </a>
          </p>
        </div>

        <div>
          <h3 className="font-bold text-gray-800 mb-1">Central Office</h3>
          <p>Address: Moscow, Marshala Zhukova Ave., 43, building 3</p>
          <p>Mailing address: 117246, Moscow, P.O. Box 5, Neo-Pharm LLC.</p>
        </div>
      </div>
    </section>
  );
}

export default PartnersInfo;
