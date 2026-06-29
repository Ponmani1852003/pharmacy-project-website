import { useState } from "react";
import { Calendar, ThumbsUp, Star } from "lucide-react";
import Pagination from "../ProductGrid/Pagination.jsx";
import ReviewListItem from "./ReviewListItem.jsx";

const fillerA = `Day-to-day practice shows that the ongoing informational and promotional
support of our work plays an important role in shaping development forms.
Colleagues! The ongoing informational and promotional support of our work
requires us to analyze development forms. The significance of these
problems is so obvious that the new model of organizational activity
provides a wide range of specialists with a say in shaping the development
model. The significance of these problems is so obvious that the
established organizational structure entails a process of introducing and
modernizing systems of mass participation. Likewise, strengthening and
developing the structure lets us assess the significance of progressive
development directions.`;

const fillerB = `A diverse and rich experience starting from day-to-day work on shaping a
position contributes to the preparation and implementation of a staff
training system that matches urgent needs. Likewise, the framework and
venue for staff training provides a wide range of specialists with the
chance to take part in shaping development forms.`;

const fillerC = `Day-to-day practice shows that delivering on planned objectives largely
drives the creation of further directions. Colleagues! Delivering on
planned objectives entails a process of introducing and modernizing
development forms. A diverse and rich experience starting from day-to-day
work on shaping a position plays an important role in shaping new
proposals. High-level conceptual considerations, together with the start
of day-to-day work on shaping a position, require defining and refining
systems of mass participation. The task of the organization, particularly
delivering on planned objectives, lets us carry out the important tasks
involved in developing progressive development directions.`;

const reviews = [
  { name: "Liana", location: "Moscow", date: "July 25", rating: 5, likes: 2, dislikes: 0, text: fillerA },
  { name: "Liana", location: "Moscow", date: "July 25", rating: 4, likes: 0, dislikes: -4, text: fillerB },
  { name: "Liana", location: "Moscow", date: "July 25", rating: 5, likes: 2, dislikes: 0, text: fillerA },
  { name: "Liana", location: "Moscow", date: "July 25", rating: 4, likes: 2, dislikes: 0, text: fillerC },
  { name: "Liana", location: "Moscow", date: "July 25", rating: 4, likes: 0, dislikes: -4, text: fillerB },
  { name: "Liana", location: "Moscow", date: "July 25", rating: 5, likes: 2, dislikes: 0, text: fillerA },
  { name: "Liana", location: "Moscow", date: "July 25", rating: 4, likes: 2, dislikes: 0, text: fillerC },
  { name: "Liana", location: "Moscow", date: "July 25", rating: 4, likes: 2, dislikes: 0, text: fillerC },
  { name: "Liana", location: "Moscow", date: "July 25", rating: 4, likes: 0, dislikes: -4, text: fillerB },
];

const sortOptions = [
  { key: "date", label: "By Date", icon: Calendar },
  { key: "helpful", label: "Most Helpful", icon: ThumbsUp },
  { key: "rating", label: "By Rating", icon: Star },
];

function ReviewsList() {
  const [sort, setSort] = useState("date");
  const [visibleCount, setVisibleCount] = useState(9);

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-6 text-sm">
          <span className="text-gray-500 font-medium">Sort by:</span>
          {sortOptions.map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setSort(key)}
              className={`flex items-center gap-1.5 font-medium ${
                sort === key ? "text-teal-500" : "text-gray-500 hover:text-teal-500"
              }`}
            >
              <Icon className="w-4 h-4" />
              {label}
            </button>
          ))}
        </div>

        <Pagination totalPages={32} />
      </div>

      <div>
        {reviews.slice(0, visibleCount).map((review, i) => (
          <ReviewListItem key={i} review={review} />
        ))}
      </div>

      <button
        onClick={() => setVisibleCount((c) => c + 9)}
        className="w-full bg-teal-400 hover:bg-teal-500 text-white text-sm font-semibold uppercase tracking-wide rounded-xl py-4 mt-4 transition-colors"
      >
        » Show More Reviews
      </button>
    </div>
  );
}

export default ReviewsList;
