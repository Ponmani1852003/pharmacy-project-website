import { FaFacebookF, FaVk, FaTwitter, FaTelegramPlane, FaWhatsapp, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const shareLinks = [
  { Icon: FaFacebookF, count: 104, color: "bg-blue-600" },
  { Icon: FaVk, count: 27, color: "bg-blue-500" },
  { Icon: FaTwitter, count: 12, color: "bg-sky-400" },
  { Icon: FaTelegramPlane, count: 40, color: "bg-blue-400" },
  { Icon: FaWhatsapp, count: 22, color: "bg-green-500" },
  { Icon: FaInstagram, count: 0, color: "bg-pink-500" },
  { Icon: FaYoutube, count: 341, color: "bg-red-500" },
];

function ArticleShare() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-6 border-y border-gray-100 py-6">
      <div>
        <p className="font-bold text-gray-800 mb-3">Liked the article? Share the link with friends!</p>
        <div className="flex items-center gap-2 flex-wrap">
          {shareLinks.map(({ Icon, count, color }, i) => (
            <a
              key={i}
              href="#"
              className={`flex items-center gap-1.5 ${color} text-white text-xs font-semibold rounded-full pl-2.5 pr-3 py-1.5 hover:opacity-90 transition-opacity`}
            >
              <Icon className="text-sm" />
              {count > 0 && <span>{count}</span>}
            </a>
          ))}
        </div>
      </div>

      <div className="text-right">
        <p className="font-bold text-gray-800 mb-2">Rate the Article</p>
        <span className="flex items-center gap-1 text-amber-400 justify-end">
          {Array.from({ length: 5 }).map((_, i) => (
            <FaStar key={i} className={i < 4 ? "" : "text-gray-200"} />
          ))}
        </span>
      </div>
    </div>
  );
}

export default ArticleShare;
