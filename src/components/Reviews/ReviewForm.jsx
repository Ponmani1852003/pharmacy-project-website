import { useState } from "react";
import { FaStar } from "react-icons/fa";

function ReviewForm() {
  const [rating, setRating] = useState(4);
  const [hovered, setHovered] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log({ rating, name, email, text });
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-7xl mx-auto px-4 border border-gray-200 rounded-2xl p-5">
      <h3 className="font-bold text-gray-800 mb-3">Leave a Review</h3>

      <p className="text-xs text-gray-500 mb-2">Your rating:</p>
      <div className="flex items-center gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setRating(i + 1)}
            onMouseEnter={() => setHovered(i + 1)}
            onMouseLeave={() => setHovered(0)}
          >
            <FaStar
              className={
                i < (hovered || rating) ? "text-amber-400" : "text-gray-200"
              }
            />
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          className="border border-gray-200 rounded-full px-4 py-2.5 text-sm outline-none focus:border-teal-400"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your e-mail"
          className="border border-gray-200 rounded-full px-4 py-2.5 text-sm outline-none focus:border-teal-400"
        />
      </div>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write a detailed review, it matters"
        rows={3}
        className="w-full border border-gray-200 rounded-2xl px-4 py-3 text-sm outline-none focus:border-teal-400 mb-3 resize-none"
      />

      <div className="flex items-center justify-between gap-4">
        <button
          type="submit"
          className="bg-teal-400 hover:bg-teal-500 text-white text-sm font-semibold rounded-full px-6 py-2.5 transition-colors shrink-0"
        >
          Submit
        </button>
        <p className="text-xs text-gray-400">
          By clicking the button, you agree to the processing of{" "}
          <a href="#" className="text-teal-500 underline">
            personal data
          </a>
        </p>
      </div>
    </form>
  );
}

export default ReviewForm;
