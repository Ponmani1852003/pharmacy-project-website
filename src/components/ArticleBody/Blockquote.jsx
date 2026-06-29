import { Quote } from "lucide-react";

function Blockquote({ children }) {
  return (
    <div className="bg-teal-50/60 rounded-2xl p-6 flex gap-4 items-start">
      <Quote className="w-8 h-8 text-teal-300 shrink-0" fill="currentColor" />
      <p className="text-gray-700 leading-relaxed">{children}</p>
    </div>
  );
}

export default Blockquote;
