import { Link2 } from "lucide-react";

const articles = [
  "Silver Ions for Wound and Burn Treatment",
  "How Hormonal Balance Helps You Stay Young and Beautiful",
  "Active Living Without Hot Flashes — It's All in Your Hands",
  "A Pharmacy Customer Asks What to Do If Joints Crack",
];

function RelatedArticles() {
  return (
    <div>
      <h3 className="text-xl font-bold text-gray-800 mb-4">Read Also</h3>
      <ul className="space-y-3">
        {articles.map((title) => (
          <li key={title} className="flex items-start gap-2.5">
            <Link2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
            <a href="#" className="text-gray-600 hover:text-teal-500 transition-colors">
              {title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RelatedArticles;
