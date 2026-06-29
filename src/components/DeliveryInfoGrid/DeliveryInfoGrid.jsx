import { Building2, DoorOpen, ShieldCheck, Tag } from "lucide-react";

const filler1 = `Day-to-day practice shows that delivering on planned objectives largely
drives the creation of further directions. Delivering on planned
objectives entails a process of introducing and modernizing development
forms.`;

const filler2 = `A diverse and rich experience starting from day-to-day work on shaping a
position plays an important role in shaping new proposals. High-level
conceptual considerations, together with the start of day-to-day work,
require defining and refining systems of mass participation.`;

const items = [
  { icon: Building2, p1: filler1, p2: filler2 },
  { icon: DoorOpen, p1: filler1, p2: filler2 },
  { icon: Tag, p1: filler1, p2: filler2 },
  { icon: ShieldCheck, p1: filler1, p2: filler2 },
];

function DeliveryInfoGrid() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Delivery Information</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
        {items.map(({ icon: Icon, p1, p2 }, i) => (
          <div key={i} className="flex gap-4">
            <div className="w-12 h-12 rounded-full bg-teal-400 flex items-center justify-center shrink-0">
              <Icon className="w-5 h-5 text-white" />
            </div>
            <div className="text-sm text-gray-600 leading-relaxed space-y-3">
              <p>{p1}</p>
              <p>{p2}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DeliveryInfoGrid;
