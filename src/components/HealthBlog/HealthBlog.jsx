import { useState } from "react";
import { Link } from "react-router-dom";

const posts = [
  {
    image: "/blog/post-1.jpg",
    title: "Active Living Without Hot Flashes — It's All in Your Hands",
    excerpt:
      "Going through menopause doesn't have to mean giving anything up. Here's how women over 40 are staying active and comfortable.",
  },
  {
    image: "/blog/post-2.jpg",
    title: "Active Living Without Hot Flashes — It's All in Your Hands",
    excerpt:
      "Going through menopause doesn't have to mean giving anything up. Here's how women over 40 are staying active and comfortable.",
  },
  {
    image: "/blog/post-3.jpg",
    title: "Active Living Without Hot Flashes — It's All in Your Hands",
    excerpt:
      "Going through menopause doesn't have to mean giving anything up. Here's how women over 40 are staying active and comfortable.",
  },
  {
    image: "/blog/post-4.jpg",
    title: "Active Living Without Hot Flashes — It's All in Your Hands",
    excerpt:
      "Going through menopause doesn't have to mean giving anything up. Here's how women over 40 are staying active and comfortable.",
  },
];

function BlogImage({ src, alt }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="h-40 w-full rounded-lg bg-gray-100 border border-dashed border-gray-300 flex items-center justify-center text-xs text-gray-400">
        Add image to public{src}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setFailed(true)}
      className="h-40 w-full object-cover rounded-lg"
    />
  );
}

function HealthBlog() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-2xl font-bold text-gray-800">Health Blog</h2>
        <a href="#" className="text-teal-500 hover:text-teal-600 text-sm font-semibold">
          Latest posts
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {posts.map((post, i) => (
          <Link to="/article" key={i} className="block">
            <article>
              <BlogImage src={post.image} alt={post.title} />
              <h3 className="font-semibold text-gray-800 mt-3 leading-snug hover:text-teal-600 transition-colors">{post.title}</h3>
              <p className="text-sm text-gray-500 mt-2 leading-relaxed">{post.excerpt}</p>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default HealthBlog;
