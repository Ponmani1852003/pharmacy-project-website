import { useState } from "react";

function CallbackForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // Hook this up to your backend / form service of choice.
    console.log({ name, phone });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl shadow-xl p-7 flex flex-col gap-4"
    >
      <h3 className="text-lg font-bold text-gray-800">We'll call you back</h3>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Full name"
        className="border border-gray-200 rounded-full px-5 py-3 text-sm outline-none focus:border-[#34d3bf]"
      />

      <input
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="+1 (___) ___-____"
        className="border border-gray-200 rounded-full px-5 py-3 text-sm outline-none focus:border-[#34d3bf]"
      />

      <p className="text-xs text-gray-500 leading-snug">
        By clicking the button, you agree to the processing of{" "}
        <span className="text-[#34d3bf] underline cursor-pointer">
          personal data
        </span>
      </p>

      <button
        type="submit"
        className="bg-[#34d3bf] hover:bg-[#2fc0ad] text-white font-semibold text-sm uppercase tracking-wide rounded-full py-3.5 transition"
      >
        Call Me Back
      </button>
    </form>
  );
}

export default CallbackForm;
