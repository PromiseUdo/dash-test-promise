import React from "react";
import ReviewCard from "./components/ReviewCard";
import Typography from "@/common/Typograhpy";
import "./styles.css";
import { useReviewContext } from "@/context/ReviewContext";
import { useToggleState } from "@/hooks/useToggleState";
import AddReview from "./components/AddReview";
const images = [
  "/location1.jfif",
  "/location2.jfif",
  "/location3.jfif",
  "/location4.jfif",
];

const reviews = [1, 2, 3, 4, 5, 6];
const AllReviewsPage = () => {
  const { reviewClicked } = useReviewContext();

  console.log(reviewClicked);

  const {
    state: isAddReviewModalOpen,
    open: openAddReviewModal,
    close: closeAddReviewModal,
  } = useToggleState(false);

  return (
    <div className="w-full grid grid-cols-12 gap-[28px]">
      {/* <NoScroll active={true} /> */}

      <div className="col-span-8  w-full h-full">
        {reviews.map((item, idx) => (
          <div key={idx}>
            <ReviewCard />
            {idx !== reviews.length - 1 && (
              <div className="border-b border-dash-border-color"></div>
            )}
          </div>
        ))}
      </div>
      <div className="images-container col-span-4  gap-[16px]">
        {images.map((image, idx) => (
          <div
            className=" relative rounded-[8px] overflow-hidden h-[224px]"
            style={{
              backgroundImage: `url(${image})`,
              backgroundPosition: "center",
            }}
          >
            {idx === images.length - 1 && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute inset-0 bg-black bg-opacity-50 rounded flex items-center justify-center  uppercase font-[500] text-[16px] leading-[16px] text-[#fbfafc] cursor-pointer">
                  View More
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <AddReview open={reviewClicked} onClose={closeAddReviewModal} />
    </div>
  );
};

export default AllReviewsPage;
