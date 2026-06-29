import LicenseImage from './LicenseImage.jsx'

export default function LicenseSection() {
  return (
    <section className="mx-auto max-w-[1760px] px-6 py-8">
      <div className="max-w-5xl mx-auto ">
        <h1 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-5">Our license</h1>

        <p className="text-gray-600 leading-relaxed mb-10 max-w-3xl ">
          The STOLICHKI network of social pharmacies is part of the Neofarm pharmacy holding. The
          first pharmacy in Moscow opened in 2000. Our mission from day one has been simple: make
          medicines affordable. We've shortened the path medicines take from manufacturer to
          customer as much as possible. By working directly with manufacturers and distributors, we
          not only offer low prices, but also guarantee the authenticity of every product.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-10">
          <LicenseImage src="/licence.png" alt="Pharmaceutical activity license — page 1" />
          {/* <LicenseImage src="/license-2.png" alt="Pharmaceutical activity license — page 2" /> */}
        </div>
      </div>
    </section>
  )
}
