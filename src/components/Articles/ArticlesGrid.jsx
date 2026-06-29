import ArticleCard from "./ArticleCard";

import article1 from "../../assets/images/blog1.jpg";
import article2 from "../../assets/images/blog2.jpg";
import article3 from "../../assets/images/blog3.jpg";
import article4 from "../../assets/images/blog4.jpg";

const articles = [
  {
    image: article3,
    title: "Causes of Digestive Problems",
    description:
      "Learn about the most common digestive disorders, their causes, and how lifestyle changes can improve your gut health.",
  },
  {
    image: article4,
    title: "Healthy Nutrition Tips",
    description:
      "Discover healthy eating habits and balanced nutrition to support better digestion and overall wellness.",
  },
  {
    image: article1,
    title: "Daily Vitamin Guide",
    description:
      "Understand the essential vitamins and minerals your body needs to stay healthy and energetic every day.",
  },
  {
    image: article2,
    title: "Strengthen Your Immune System",
    description:
      "Simple daily habits and nutrient-rich foods that naturally help strengthen your immune system.",
  },
];

const ArticlesGrid = () => {
  return (
    <div className="grid grid-cols-2 gap-x-5 gap-y-6">
      {articles.map((item, index) => (
        <ArticleCard key={index} {...item} />
      ))}
    </div>
  );
};

export default ArticlesGrid;