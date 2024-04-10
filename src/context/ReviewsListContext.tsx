import React, { createContext, useContext, useState, ReactNode } from "react";

interface Review {
  author: string;
  image: string | null;
  timeAgo: string;
  rating: string;
  comment: string;
  upVotes: string;
  downVotes: string;
  commentCount: string;
  admin: boolean;
}

interface ReviewsContextType {
  reviews: Review[];
  addReview: (newReview: Review) => void;
}

const ReviewsContext = createContext<ReviewsContextType | undefined>(undefined);

interface ReviewsProviderProps {
  children: ReactNode; // Define children prop explicitly
}

export const ReviewsListProvider: React.FC<ReviewsProviderProps> = ({
  children,
}) => {
  const [reviews, setReviews] = useState<Review[]>([
    {
      author: "James T.",
      image: "/reviewer.jfif",
      timeAgo: "5 months ago",
      rating: "4.0",
      comment:
        "There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are several grocery stores and Supermarkets.",
      upVotes: "1224",
      downVotes: "4",
      commentCount: "24",
      admin: true,
    },
  ]);

  const addReview = (newReview: Review) => {
    setReviews((prevReviews) => [...prevReviews, newReview]);
  };

  return (
    <ReviewsContext.Provider value={{ reviews, addReview }}>
      {children}
    </ReviewsContext.Provider>
  );
};

export const useReviewsContext = () => {
  const context = useContext(ReviewsContext);
  if (!context) {
    throw new Error("error");
  }
  return context;
};
