import { FaVk, FaInstagram, FaYoutube } from "react-icons/fa";

const links = [
  { Icon: FaVk, handle: "/namepublick" },
  { Icon: FaInstagram, handle: "@namepublick" },
  { Icon: FaYoutube, handle: "/namepublick" },
];

function SocialLinks() {
  return (
    <div className="bg-gray-50 rounded-2xl p-6">
      <p className="font-semibold text-gray-800 mb-5 leading-snug">
        Follow us on social media
      </p>

      <div className="space-y-4">
        {links.map(({ Icon, handle }, index) => (
          <div key={index} className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-teal-400 flex items-center justify-center shrink-0">
              <Icon className="text-white text-sm" />
            </div>
            <span className="text-sm text-gray-700">{handle}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SocialLinks;
