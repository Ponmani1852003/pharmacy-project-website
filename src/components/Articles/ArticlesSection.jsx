import ArticleTags from "./ArticleTags";
import FeaturedArticle from "./FeaturedArticle";
import ArticlesGrid from "./ArticlesGrid";

const ArticlesSection = () => {
  return (
    <section className="max-w-[1340px] mx-auto px-6 lg:px-8 py-10">

      {/* Tags */}
      <ArticleTags />

      {/* Main Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">

        {/* Left Side - Featured Article */}
        <div className="lg:col-span-6">
          <FeaturedArticle />
        </div>

        {/* Right Side - 4 Article Cards */}
        <div className="lg:col-span-6">
          <ArticlesGrid />
        </div>
        
      </div>

    </section>
  );
};

export default ArticlesSection;