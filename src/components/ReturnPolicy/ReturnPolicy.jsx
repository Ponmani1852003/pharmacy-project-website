import { Circle, AlertCircle } from "lucide-react";

const refusalReasons = [
  "The delivered item does not match what was ordered;",
  "The item is damaged due to a violation of the packaging integrity;",
  "The item is damaged due to non-compliance with packaging or shipping requirements (excluding temperature requirements).",
];

const nonReturnable = [
  "Products for the prevention and treatment of conditions at home, medicines;",
  "Personal hygiene items (toothbrushes and similar items);",
  "Perfume and cosmetic items.",
];

function ReturnPolicy({ compact = false }) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Exchange & Return Policy</h2>

      <p className="text-gray-600 leading-relaxed mb-4">
        You may refuse a delivered order and its payment in the following cases:
      </p>

      {!compact && (
        <>
          <ul className="space-y-2 mb-4">
            {refusalReasons.map((reason, i) => (
              <li key={i} className="flex items-start gap-2.5 text-gray-600">
                <Circle className="w-2.5 h-2.5 text-teal-400 fill-current shrink-0 mt-1.5" />
                <span>{reason}</span>
              </li>
            ))}
          </ul>

          <div className="flex items-start gap-2.5 bg-amber-50 text-amber-700 rounded-xl p-4 mb-4">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
            <p className="text-sm">An item can only be returned at the moment of delivery.</p>
          </div>

          <p className="text-gray-600 leading-relaxed mb-4">
            Under Russian Government Decree No. 2463 dated December 31, the following
            quality-compliant products are not eligible for exchange or return:
          </p>

          <ul className="space-y-2">
            {nonReturnable.map((item, i) => (
              <li key={i} className="flex items-start gap-2.5 text-gray-600">
                <Circle className="w-2.5 h-2.5 text-teal-400 fill-current shrink-0 mt-1.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </>
      )}

      {compact && (
        <p className="text-gray-600 leading-relaxed">
          Day-to-day practice shows that delivering on planned objectives largely drives the
          creation of further directions. Day-to-day practice also shows that consulting with a
          broad activist base requires analysis of existing positions, while complex
          organizational structures represent an interesting experiment in testing relevant
          financial and administrative conditions. Likewise, the start of day-to-day work on
          shaping a position lets us assess the significance of new proposals.
        </p>
      )}
    </div>
  );
}

export default ReturnPolicy;
