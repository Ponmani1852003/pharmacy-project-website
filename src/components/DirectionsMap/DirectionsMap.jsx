function DirectionsMap() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">How to get there</h2>

      <p className="text-gray-600 leading-relaxed mb-6 max-w-4xl">
        Polezhaevskaya metro station. Take the last carriage from the city
        center, turn left after the turnstiles, the exit to the bus stop is
        also on the left. Trolleybuses 20, 35, or 65 (to the "Bulvar
        Generala Karbysheva" stop).
      </p>

      <div className="rounded-2xl overflow-hidden border border-gray-200">
        <iframe
          title="Office location map"
          src="https://maps.google.com/maps?q=Moscow&z=10&output=embed"
          className="w-full h-[420px] md:h-[500px]"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}

export default DirectionsMap;
