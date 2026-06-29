import { useState } from "react";

function CommentForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [source, setSource] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log({ name, email, source, message });
  }

  return (
    <div className="max-w-2xl">
      <h3 className="text-xl font-bold text-gray-800 mb-5">Leave a Comment</h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="border border-gray-200 rounded-full px-5 py-3 text-sm outline-none focus:border-teal-400"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your e-mail"
            className="border border-gray-200 rounded-full px-5 py-3 text-sm outline-none focus:border-teal-400"
          />
        </div>

        <select
          value={source}
          onChange={(e) => setSource(e.target.value)}
          className="w-full border border-gray-200 rounded-full px-5 py-3 text-sm outline-none focus:border-teal-400 text-gray-500"
        >
          <option value="">How did you hear about us?</option>
          <option value="search">Search engine</option>
          <option value="social">Social media</option>
          <option value="friend">From a friend</option>
          <option value="other">Other</option>
        </select>

        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Write your comment"
          rows={4}
          className="w-full border border-gray-200 rounded-2xl px-5 py-3 text-sm outline-none focus:border-teal-400 resize-none"
        />

        <div className="flex items-center gap-5 flex-wrap">
          <button
            type="submit"
            className="bg-teal-400 hover:bg-teal-500 text-white text-sm font-semibold uppercase tracking-wide rounded-full px-8 py-3 transition-colors"
          >
            Submit
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
  );
}

export default CommentForm;
