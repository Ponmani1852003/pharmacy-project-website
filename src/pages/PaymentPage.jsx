import { useState } from "react";
import Breadcrumb from "../components/Breadcrumb.jsx";
import PaymentSteps from "../components/PaymentSteps/PaymentSteps.jsx";
import InstallmentOptions from "../components/InstallmentOptions/InstallmentOptions.jsx";
import BankLogos from "../components/BankLogos/BankLogos.jsx";
import ContactCallout from "../components/ContactCallout/ContactCallout.jsx";

const cashText1 = `Cash payment is available for courier delivery as well as at the pickup
point. Payment for the order and delivery is made directly to the courier
or cashier at the pharmacy when you receive your order — you'll also
receive all the necessary documents and a sales receipt.`;

const cashText2 = `Copies of certificates and licenses are provided on request. To pay in
cash on delivery, select "Cash" as the payment method when placing your
order, then click "Place Order."`;

function SecurityImage() {
  const [failed, setFailed] = useState(false);
  if (failed) return null;
  return (
    <img
      src="/payment/security.png"
      alt="Security illustration"
      onError={() => setFailed(true)}
      className="hidden lg:block w-full max-w-xs h-auto object-contain mx-auto"
    />
  );
}

export default function PaymentPage() {
  return (
    <>
      <Breadcrumb trail={["Home", "Payment"]} />

      <section className="max-w-7xl mx-auto px-4 py-6 space-y-12">
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6">Payment</h1>
          <p className="text-gray-600 leading-relaxed max-w-4xl">
            The STOLICHKI network of social pharmacies is part of the Neofarm pharmacy holding.
            The first pharmacy in Moscow opened in 2000. Our mission from day one has been
            simple: make medicines affordable. We've shortened the path medicines take from
            manufacturer to customer as much as possible. By working directly with manufacturers
            and distributors, we not only offer low prices, but also guarantee the authenticity
            of every product.
          </p>
        </div>

        <PaymentSteps />

        <InstallmentOptions />

        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Cash Payment</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h3 className="font-bold text-gray-800 mb-3">Where to Pay</h3>
              <p className="text-gray-600 leading-relaxed mb-4">{cashText1}</p>
              <p className="text-gray-600 leading-relaxed">{cashText2}</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-3">Is There a Receipt?</h3>
              <p className="text-gray-600 leading-relaxed mb-4">{cashText1}</p>
              <p className="text-gray-600 leading-relaxed">{cashText2}</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Card Payment</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h3 className="font-bold text-gray-800 mb-3">Which Payment Systems Are Accepted?</h3>
              <p className="text-gray-600 leading-relaxed mb-5">{cashText1}</p>
              <BankLogos />
              <p className="text-gray-600 leading-relaxed mt-5">{cashText2}</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-3">
                How Security and Personal Data Protection Are Ensured
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                A diverse and rich body of experience, together with the organization's
                established structure, requires defining and refining the development model.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                The task of the organization, particularly the new model of organizational
                activity, requires it. High-level conceptual considerations, together with the
                further development of various forms of activity, require defining and
                refining.
              </p>
              <SecurityImage />
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Non-Cash Payment for Legal Entities or Sole Proprietors
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              A diverse and rich body of experience, together with the organization's
              established structure, requires defining and refining the development model. The
              task of the organization, particularly the new model of organizational activity,
              requires defining and refining the directions of progressive development. High-level
              conceptual considerations, together with the further development of various forms
              of activity, require defining and refining further directions of development.
            </p>
            <p>
              A diverse and rich body of experience, the ongoing informational and promotional
              support of our work lets us assess the significance of the development model.
              Colleagues! The start of day-to-day work on shaping a position represents an
              interesting experiment in testing systems of mass participation. The task of the
              organization, particularly the start of day-to-day work on shaping a position,
              contributes to the preparation and implementation of a staff training system that
              matches urgent needs.
            </p>
          </div>
        </div>

        <ContactCallout />
      </section>
    </>
  );
}
