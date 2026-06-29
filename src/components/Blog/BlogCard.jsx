function BlogCard({ image, title, description }) {
  return (
    <div className="group cursor-pointer">
      <img
        src={image}
        alt={title}
        className="w-full h-56 object-cover rounded-lg transition duration-300 group-hover:scale-105"
      />

      <h3 className="mt-5 text-md font-bold text-[#2f3b63] leading-snug">
        {title}
      </h3>

      <p className="mt-4 text-gray-500 text-sm leading-5">
        {description}
      </p>
    </div>
  );
}

export default BlogCard;