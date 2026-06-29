import Breadcrumb from "../components/Breadcrumb.jsx";
import ReviewsSummary from "../components/ReviewsSummary/ReviewsSummary.jsx";
import ReviewsList from "../components/ReviewsList/ReviewsList.jsx";
import ReviewForm from "../components/Reviews/ReviewForm.jsx";

export default function ReviewsPage() {
  function scrollToForm() {
    document.getElementById("leave-review")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <>
      <Breadcrumb trail={["Home", "Reviews About Us"]} />

      <section className="max-w-7xl mx-auto px-4 py-6">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6">Reviews About Us</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-[280px] shrink-0">
            <ReviewsSummary onLeaveReview={scrollToForm} />
          </div>

          <div className="flex-1 min-w-0">
            <ReviewsList />
          </div>
        </div>

        <div id="leave-review" className="mt-10 scroll-mt-24">
          <ReviewForm />
        </div>
      </section>
    </>
  );
}
