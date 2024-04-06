import React from "react";
import iconComponents from "@/assets/icons/iconComponents";
import Avatar from "../Avatar";
import Typography from "../Typograhpy";
import Category from "./Category";
interface ReviewCardProps {
  image: string;
  name: string;
  reviewAge: string;
  location: string;
  rating: string;
  comment: string;
  category: string;
}
const ReviewCard: React.FC<ReviewCardProps> = ({
  image,
  name,
  reviewAge,
  location,
  rating,
  comment,
  category,
}) => {
  return (
    <div className="rounded-[15px] min-w-[239px] col-span-1 p-4 h-[fit-content] bg-dash-shades-gray-1 shadow ">
      <div className="h-full w-full flex flex-col gap-[8px]">
        <div className="flex items-center gap-[46px]">
          <div className="flex items-center gap-[4px]">
            <Avatar className="" image="/reviewer.jfif" />

            <div className="flex items-center justify-center flex-col">
              <Typography
                as="p"
                className="font-medium text-[12px] leading-[14.52px] text-dash-shades-black"
              >
                {name}
              </Typography>
              <Typography
                as="p"
                className="font-[300] text-[8px] leading-[9.68px] text-dash-shades-black"
              >
                {reviewAge}
              </Typography>
            </div>
          </div>
          <div className="flex flex-col gap-[1px]">
            <Typography
              as="p"
              className="font-[500] text-[11px] leading-[15.4px] "
            >
              {location}
            </Typography>
            <div className="flex items-center ">
              <iconComponents.util.FilledStarIcon />
              <iconComponents.util.FilledStarIcon />
              <iconComponents.util.FilledStarIcon />
              <iconComponents.util.OutlinedStarIcon />
              <iconComponents.util.OutlinedStarIcon />
            </div>
          </div>
        </div>
        <Typography
          as="p"
          className="font-[400] text-sm leading-[19.6px] text-dash-shades-black"
        >
          {comment}
        </Typography>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <div className="flex items-center gap-1">
              <iconComponents.review.ThumbsUpIcon />
              <Typography
                as="span"
                className="text-[10px] font-[500] leading-[12.1px] text-dash-shades-gray-3"
              >
                24
              </Typography>
            </div>
            <div className="flex items-center gap-1">
              <iconComponents.review.ThumbsDownIcon />
              <Typography
                as="span"
                className="text-[10px] font-[500] leading-[12.1px] text-dash-shades-gray-3"
              >
                02
              </Typography>
            </div>
            <div className="flex items-center gap-1">
              <iconComponents.review.ChatIcon />
              <Typography
                as="span"
                className="text-[10px] font-[500] leading-[12.1px] text-dash-shades-gray-3"
              >
                125
              </Typography>
            </div>
          </div>
          <Category label={category} variant={`${category}`} />
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
