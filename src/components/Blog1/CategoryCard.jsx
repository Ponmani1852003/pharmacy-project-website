const CategoryCard = ({ icon: Icon, title, count }) => {
  return (
    <div
      className="
        w-[121px]
        h-[52px]
        flex-shrink-0
        bg-white
        border
        border-[#E8EDF3]
        rounded-2xl
        px-2
        flex
        items-center
        justify-between
        cursor-pointer
        transition-all
        duration-300
        hover:shadow-md
        hover:border-[#27C7A8]
      "
    >
      {/* Left Side */}
      <div className="flex items-center gap-2">
        <div className="w-4 h-4 rounded-full bg-[#F4FBF9] flex items-center justify-center">
          <Icon
            size={15}
            className="text-[#27C7A8]"
            strokeWidth={2}
          />
        </div>

        <span
          className="
            text-[12px]
            text-[#29385D]
            leading-3
            truncate
            max-w-[60px]
          "
        >
          {title}
        </span>
      </div>

      {/* Right Side */}
      <span
        className="
          text-[11px]
          font-medium
          text-[#A5AFBC]
        "
      >
        {count}
      </span>
    </div>
  );
};

export default CategoryCard;