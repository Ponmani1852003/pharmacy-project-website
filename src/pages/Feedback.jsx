import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import FeedbackHeader from "../components/Feedback/FeedbackHeader";
import RatingSummary from "../components/Feedback/RatingSummary";
import FeedbackFilter from "../components/Feedback/FeedbackFilter";
import FeedbackList from "../components/Feedback/FeedbackList";
import LoadMoreButton from "../components/Feedback/LoadMoreButton";

const Feedback = () => {
  return (
    <>
      <Header />

      <FeedbackHeader />

      <section className="max-w-[1440px] mx-auto px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* Left Side */}
          <div className="lg:col-span-3">
            <RatingSummary />
          </div>

          {/* Right Side */}
          <div className="lg:col-span-9">
            <FeedbackFilter />
            <FeedbackList />
            <LoadMoreButton />
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default Feedback;