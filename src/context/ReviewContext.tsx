// ReviewContext.tsx
import React, { createContext, useState, useContext, ReactNode } from "react";

interface ReviewProviderProps {
  children: ReactNode;
}

interface ReviewContextType {
  reviewClicked: boolean;
  handleReviewClick: () => void;
  handleCloseReviewClick: () => void;
}

const ReviewContext = createContext<ReviewContextType | undefined>(undefined);

export const ReviewProvider: React.FC<ReviewProviderProps> = ({ children }) => {
  const [reviewClicked, setReviewClicked] = useState(false);

  const handleReviewClick = () => {
    setReviewClicked(true);
  };

  const handleCloseReviewClick = () => {
    setReviewClicked(false);
  };

  const contextValue: ReviewContextType = {
    reviewClicked,
    handleReviewClick: () => {
      handleReviewClick();
    },
    handleCloseReviewClick: () => {
      handleCloseReviewClick();
    },
  };

  return (
    <ReviewContext.Provider value={contextValue}>
      {children}
    </ReviewContext.Provider>
  );
};

export const useReviewContext = (): ReviewContextType => {
  const context = useContext(ReviewContext);
  if (!context) {
    throw new Error("useReviewContext must be used within a ReviewProvider");
  }
  return context;
};
