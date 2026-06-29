import { useState } from "react";

function FeedbackForm() {
  const [subject, setSubject] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log({ subject, name, phone, email, message });
  }

  return (
    <section id="feedback" className="scroll-mt-24">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Feedback</h2>

      <div className="border border-gray-200 rounded-2xl p-6 max-w-3xl">
        <p className="text-gray-700 leading-relaxed mb-4">
          A diverse and rich experience, along with the organization's established structure,
          requires defining and refining the development model.
        </p>
        <p className="text-gray-500 leading-relaxed mb-6">
          High-level conceptual considerations, together with the organization's established
          structure, play an important role in shaping systems of mass participation.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <select
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full border border-gray-200 rounded-full px-5 py-3.5 text-sm outline-none focus:border-teal-400 text-gray-500"
          >
            <option value="">Choose a subject</option>
            <option value="order">Order question</option>
            <option value="delivery">Delivery question</option>
            <option value="other">Other</option>
          </select>

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full name"
            className="w-full border border-gray-200 rounded-full px-5 py-3.5 text-sm outline-none focus:border-teal-400"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone"
              className="border border-gray-200 rounded-full px-5 py-3.5 text-sm outline-none focus:border-teal-400"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="border border-gray-200 rounded-full px-5 py-3.5 text-sm outline-none focus:border-teal-400"
            />
          </div>

          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message"
            className="w-full border border-gray-200 rounded-full px-5 py-3.5 text-sm outline-none focus:border-teal-400"
          />

          <div className="flex items-center gap-5 flex-wrap pt-1">
            <button
              type="submit"
              className="bg-teal-400 hover:bg-teal-500 text-white text-sm font-semibold uppercase tracking-wide rounded-full px-8 py-3.5 transition-colors"
            >
              Write to Me
            </button>
            <p className="text-xs text-gray-400 max-w-[260px]">
              By clicking the button, you agree to the processing of{" "}
              <a href="#" className="text-teal-500 underline">
                personal data
              </a>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

export default FeedbackForm;
