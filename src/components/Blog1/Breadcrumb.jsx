import { Home, ChevronRight } from "lucide-react";

const links = [
  "Home",
  "Medicines",
  "Enzyme Supplements",
  "Irritable Bowel Syndrome",
];

const Breadcrumb = () => {
  return (
    <div className="flex flex-wrap items-center gap-2 text-sm">

      <Home
        size={16}
        className="text-[#1CC7A0]"
      />

      {links.map((item, index) => (
        <div
          key={index}
          className="flex items-center gap-2"
        >
          <span
            className={`${
              index === links.length - 1
                ? "text-gray-400"
                : "text-[#1CC7A0]"
            }`}
          >
            {item}
          </span>

          {index !== links.length - 1 && (
            <ChevronRight
              size={14}
              className="text-gray-300"
            />
          )}
        </div>
      ))}

    </div>
  );
};

export default Breadcrumb;