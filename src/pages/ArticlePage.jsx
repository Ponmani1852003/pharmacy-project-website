import Breadcrumb from "../components/Breadcrumb.jsx";
import ArticleHero from "../components/ArticleHero/ArticleHero.jsx";
import ArticleMeta from "../components/ArticleMeta/ArticleMeta.jsx";
import ArticleSidebar from "../components/ArticleSidebar/ArticleSidebar.jsx";
import ArticleBody from "../components/ArticleBody/ArticleBody.jsx";
import ArticleShare from "../components/ArticleShare/ArticleShare.jsx";
import RelatedArticles from "../components/RelatedArticles/RelatedArticles.jsx";
import CommentForm from "../components/CommentForm/CommentForm.jsx";
import ReviewItem from "../components/Reviews/ReviewItem.jsx";

const articleTitle =
  "Staying a Woman. How Hormonal Balance Helps You Stay Young and Beautiful?";

const comments = [
  {
    name: "Elena",
    rating: 4,
    date: "January 17, 2026",
    likes: 2,
    text: `I ordered through the corporate transport company. Excellent product, fast and inexpensive. The courier was polite and helpful, brought everything right to the door. Such reliable companies are hard to find these days.`,
  },
  {
    name: "Vladimir",
    rating: 4,
    date: "January 17, 2026",
    likes: 4,
    text: `Big thanks to the team for their work. I'm grateful to the staff, especially the manager I worked with, for their professionalism and responsiveness. Happy holidays everyone — wishing you continued success.`,
  },
  {
    name: "Vladimir",
    rating: 5,
    date: "January 17, 2026",
    likes: 0,
    text: `Really helpful article — explained things in a way that finally made sense. Thanks for putting this together.`,
  },
];

export default function ArticlePage() {
  return (
    <>
      <Breadcrumb trail={["Home", "Health Blog", "Staying a Woman"]} />

      <section className="max-w-7xl mx-auto px-4 py-6">
        <ArticleHero title={articleTitle} />
        <ArticleMeta />

        <div className="flex flex-col lg:flex-row gap-10 mt-2">
          <div className="lg:w-[280px] shrink-0">
            <ArticleSidebar />
          </div>

          <div className="flex-1 min-w-0">
            <ArticleBody />
          </div>
        </div>

        <div className="mt-10 space-y-10">
          <ArticleShare />
          <RelatedArticles />

          <div>
            <CommentForm />

            <div className="max-w-2xl mt-6">
              {comments.map((comment, i) => (
                <ReviewItem key={i} review={comment} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
