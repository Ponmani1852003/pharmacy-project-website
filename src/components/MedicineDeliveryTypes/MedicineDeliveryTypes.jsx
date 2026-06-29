function MedicineDeliveryTypes() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-gray-50 rounded-2xl p-6">
        <h3 className="font-bold text-gray-800 mb-3">OTC Medicine Delivery</h3>
        <p className="text-sm text-gray-600 leading-relaxed">
          Under presidential decree No. 187 dated March 17, 2020, remote sales of
          over-the-counter medicines, dietary supplements, medical devices, household and beauty
          items, household chemicals, and related products can be delivered to your home.
        </p>
      </div>

      <div className="bg-gray-50 rounded-2xl p-6">
        <h3 className="font-bold text-gray-800 mb-3">Prescription Medicine Delivery</h3>
        <p className="text-sm text-gray-600 leading-relaxed">
          Prescription medicines, when a doctor's prescription is provided, are delivered to
          the nearest pharmacy for pickup.
        </p>
      </div>
    </div>
  );
}

export default MedicineDeliveryTypes;
