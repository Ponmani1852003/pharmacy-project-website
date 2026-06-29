import BlogCard from "./BlogCard";
import blogData from "./blogData";
import { FaAngleDoubleRight } from "react-icons/fa";

function Blog({ repeat = 1, showHeader = true }) {
  // Repeat the same data multiple times
  const blogs = Array.from({ length: repeat }, () => blogData).flat();

  return (
    <section className="max-w-7xl mx-auto px-6 pb-24">

      {showHeader && (
        <div className="flex items-center gap-10 mb-14">
          <h2 className="text-3xl font-bold text-[#2f3b63]">
            Health Blog
          </h2>

          <div className="flex items-center gap-2 text-[#23d5c3] font-medium cursor-pointer">
            <FaAngleDoubleRight />
            <span>Latest Articles</span>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {blogs.map((item, index) => (
          <BlogCard
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>

    </section>
  );
}

export default Blog;