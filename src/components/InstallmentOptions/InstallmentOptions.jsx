import { useState } from "react";

function InstallmentOptions() {
  const [phone, setPhone] = useState("");
  const [imgFailed, setImgFailed] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    console.log({ phone });
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-5">Installment Options</h2>
        <div className="space-y-4 text-gray-600 leading-relaxed">
          <p>
            A diverse and rich body of experience, together with the organization's established
            structure, requires defining and refining the development model.
          </p>
          <p>
            The task of the organization, particularly the new model of organizational activity,
            requires defining and refining the directions of progressive development.
          </p>
          <p>High-level conceptual considerations.</p>
        </div>
      </div>

      <div className="relative bg-gray-50 rounded-2xl p-8 overflow-hidden">
        <div className="relative z-10 max-w-sm">
          <div className="space-y-4 text-gray-700 leading-relaxed mb-6">
            <p>
              A diverse and rich body of experience, together with the organization's
              established structure, requires defining and refining the development model.
            </p>
            <p>
              The task of the organization, particularly the new model of organizational
              activity, requires defining and refining the directions of progressive
              development.
            </p>
            <p>High-level conceptual considerations.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="relative">
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-red-400" />
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Your phone number"
                className="w-full sm:w-64 border border-gray-200 rounded-full px-5 py-3 text-sm outline-none focus:border-teal-400 bg-white"
              />
            </div>
            <button
              type="submit"
              className="bg-teal-400 hover:bg-teal-500 text-white text-sm font-semibold uppercase tracking-wide rounded-full px-7 py-3 transition-colors"
            >
              Register
            </button>
            <p className="text-xs text-gray-400 max-w-xs">
              By clicking the button, you agree to the processing of{" "}
              <a href="#" className="text-teal-500 underline">
                personal data
              </a>
            </p>
          </form>
        </div>

        {!imgFailed && (
          <img
            src="/payment/installment.png"
            alt="Installment payment illustration"
            onError={() => setImgFailed(true)}
            className="hidden lg:block absolute right-0 bottom-0 w-56 h-auto object-contain opacity-90"
          />
        )}
      </div>
    </div>
  );
}

export default InstallmentOptions;
