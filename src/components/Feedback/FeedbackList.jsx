import FeedbackCard from "./FeedbackCard";
import feedbackData from "./feedbackData";

const FeedbackList = () => {
  return (
    <div className="flex flex-col">

      {feedbackData.map((item) => (
        <FeedbackCard
          key={item.id}
          name={item.name}
          city={item.city}
          date={item.date}
          rating={item.rating}
          review={item.review}
          likes={item.likes}
          dislikes={item.dislikes}
        />
      ))}

    </div>
  );
};

export default FeedbackList;