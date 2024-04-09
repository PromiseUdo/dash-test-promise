import ReviewCard from "@/common/reviewsCard";
import React from "react";
import Overlay from "./Overlay";
import "./styles.css";
const reviews = [
  {
    image: "/reviewer.jfif",
    name: "James T.",
    reviewAge: "5 months ago",
    location: "Ikate, Lekki",
    rating: "3",
    category: "network",
    comment:
      "There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are lots stores and Supermarkets.",
  },
  {
    image: "/reviewer.jfif",
    name: "James T.",
    reviewAge: "5 months ago",
    location: "Ikate, Lekki",
    rating: "3",
    category: "traffic",
    comment:
      "There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are lots stores and Supermarkets.",
  },
  {
    image: "/reviewer.jfif",
    name: "James T.",
    reviewAge: "5 months ago",
    location: "Ikate, Lekki",
    rating: "3",
    category: "power",
    comment:
      "There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are lots stores and Supermarkets.",
  },
  {
    image: "/reviewer.jfif",
    name: "James T.",
    reviewAge: "5 months ago",
    location: "Ikate, Lekki",
    rating: "3",
    category: "water",
    comment:
      "There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are lots stores and Supermarkets.",
  },
  {
    image: "/reviewer.jfif",
    name: "James T.",
    reviewAge: "5 months ago",
    location: "Ikate, Lekki",
    rating: "3",
    category: "security",
    comment:
      "There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are lots stores and Supermarkets.",
  },
  {
    image: "/reviewer.jfif",
    name: "James T.",
    reviewAge: "5 months ago",
    location: "Ikate, Lekki",
    rating: "3",
    category: "road",
    comment:
      "There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are lots stores and Supermarkets.",
  },
  {
    image: "/reviewer.jfif",
    name: "James T.",
    reviewAge: "5 months ago",
    location: "Ikate, Lekki",
    rating: "3",
    category: "network",
    comment:
      "There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are lots stores and Supermarkets.",
  },
  {
    image: "/reviewer.jfif",
    name: "James T.",
    reviewAge: "5 months ago",
    location: "Ikate, Lekki",
    rating: "3",
    category: "traffic",
    comment:
      "There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are lots stores and Supermarkets.",
  },
  {
    image: "/reviewer.jfif",
    name: "James T.",
    reviewAge: "5 months ago",
    location: "Ikate, Lekki",
    rating: "3",
    category: "water",
    comment:
      "There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are lots stores and Supermarkets.",
  },
  {
    image: "/reviewer.jfif",
    name: "James T.",
    reviewAge: "5 months ago",
    location: "Ikate, Lekki",
    rating: "3",
    category: "security",
    comment:
      "There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are lots stores and Supermarkets.",
  },
];
const Reviews = () => {
  return (
    <div className=" relative pt-16 p-1 w-full  lg:w-[506px]  h-[100vh] bg-dash-shades-gray-1 overflow-hidden  overflow-y-auto ">
      <Overlay />

      <div className="mx-auto relative grid grid-cols-1 sm:grid-cols-2  gap-[24px] w-full h-full overflow-auto scrollbar-hide z-20">
        {/* <div className="grid grid-cols-2 gap-[24px] w-full"> */}
        {reviews.map((review, idx) => (
          <ReviewCard
            key={idx}
            image={review.image}
            name={review.name}
            reviewAge={review.reviewAge}
            location={review.location}
            rating={review.rating}
            category={review.category}
            comment={review.comment}
          />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
