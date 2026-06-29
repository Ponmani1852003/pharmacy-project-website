import Breadcrumb from "../components/Breadcrumb.jsx";
import CitySelector from "../components/CitySelector/CitySelector.jsx";
import DeliveryBanner from "../components/DeliveryBanner/DeliveryBanner.jsx";
import DeliveryMethodTable from "../components/DeliverySteps/DeliveryMethodTable.jsx";
import DeliverySteps from "../components/DeliverySteps/DeliverySteps.jsx";
import DeliveryInfoGrid from "../components/DeliveryInfoGrid/DeliveryInfoGrid.jsx";
import ReturnPolicy from "../components/ReturnPolicy/ReturnPolicy.jsx";
import MedicineDeliveryTypes from "../components/MedicineDeliveryTypes/MedicineDeliveryTypes.jsx";
import PickupLocations from "../components/PickupLocations/PickupLocations.jsx";

const fillerShort = `On the other hand, the start of ongoing work on shaping a position
provides a wide range of specialists with the chance to take part in shaping
progressive development directions. Ongoing practice shows that frameworks
and venues for staff training allow us to perform the important tasks
involved in developing the model. Ongoing practice shows that delivering on
planned objectives, lamentably, requires us to analyze existing positions.
High-level conceptual considerations, together with the start of ongoing
work on shaping a position, represent an interesting experiment in testing
relevant financial and administrative conditions.`;

const fillerShort2 = `Ongoing practice shows that delivering on planned objectives plays an
important role in shaping further directions. It should not be forgotten,
however, that the further development of various forms of activity
contributes to the preparation and implementation of new proposals. A
diverse and rich body of accumulated experience, together with our ongoing
activity, plays an important role in shaping the directions of progressive
development.`;

export default function DeliveryPage() {
  return (
    <>
      <Breadcrumb trail={["Home", "Delivery & Pickup"]} />

      <section className="max-w-7xl mx-auto px-4 py-6 space-y-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800">Delivery & Pickup</h1>

        <CitySelector />

        <DeliveryBanner />

        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-1">Delivery</h2>
          <p className="font-semibold text-gray-700 mb-4">
            Delivery & Pickup in Moscow and the Region
          </p>
          <p className="text-sm text-gray-500 mb-4">Orders within the Moscow ring road (MKAD)</p>

          <DeliveryMethodTable />

          <p className="text-gray-600 leading-relaxed mt-6">{fillerShort}</p>

          <div className="mt-6">
            <DeliverySteps />
          </div>

          <p className="text-gray-600 leading-relaxed mt-6">{fillerShort2}</p>
        </div>

        <DeliveryInfoGrid />

        <ReturnPolicy />

        <MedicineDeliveryTypes />

        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Pickup</h2>
          <CitySelector />
        </div>

        <PickupLocations />

        <div>
          <h3 className="font-bold text-gray-800 mb-3">Pickup Terms</h3>
          <ul className="text-sm text-gray-600 space-y-1.5">
            <li>Pickup cost — free of charge.</li>
            <li>Pickup from partner pharmacies on orders from 500 RUB.</li>
            <li>Orders are held for 5 days at the pickup point you selected.</li>
          </ul>
        </div>

        <ReturnPolicy compact />
      </section>
    </>
  );
}
