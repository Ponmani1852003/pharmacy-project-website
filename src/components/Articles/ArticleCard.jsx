const ArticleCard = ({ image, title, description }) => {
  return (
    <div className="w-full">
      {/* Image */}
      <div className="overflow-hidden rounded-[20px]">
        <img
          src={image}
          alt={title}
          className="w-full h-[220px] object-cover"
        />
      </div>

      {/* Content */}
      <div className="mt-5">
        <h3 className="text-[15px] font-semibold leading-[20px] text-[#29385D]">
          {title}
        </h3>

        <p className="mt-3 text-[14px] leading-[26px] text-[#8A94A6]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ArticleCard;