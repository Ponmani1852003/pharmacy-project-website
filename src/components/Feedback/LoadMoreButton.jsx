const LoadMoreButton = () => {
  return (
    <div className="flex justify-center mt-14">
      <button
        className="
          h-[58px]
          px-10
          rounded-full
          bg-[#28C8A4]
          text-white
          text-[16px]
          font-semibold
          transition-all
          duration-300
          hover:bg-[#22B393]
          hover:shadow-lg
        "
      >
        Show More Reviews
      </button>
    </div>
  );
};

export default LoadMoreButton;