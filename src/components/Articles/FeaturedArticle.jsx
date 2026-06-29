import featuredImage from "../../assets/images/blog1.jpg";

const FeaturedArticle = () => {
  return (
    <div className="w-full">

      {/* Image */}
      <img
        src={featuredImage}
        alt="Featured Article"
        className="w-full h-[420px] object-cover rounded-xl"
      />

      {/* Content */}
      <div className="mt-6">

        <h2 className="text-[22px] lg:text-[28px] font-bold leading-tight text-[#2D3553]">
          Common Digestive Disorders and
          <br />
          Their Symptoms
        </h2>

        <p className="mt-6 text-[14px] leading-5 text-[#8C96A7]">
          Digestive disorders are among the most common health concerns,
          affecting millions of people every year. Understanding the early
          symptoms and maintaining a healthy lifestyle can significantly reduce
          the risk of long-term complications.
        </p>

        <p className="mt-5 text-[14px] leading-5 text-[#8C96A7]">
          This article explores the causes, warning signs, prevention methods,
          and treatment options to help you make informed decisions about your
          digestive health and overall well-being.
        </p>

      </div>

    </div>
  );
};

export default FeaturedArticle;