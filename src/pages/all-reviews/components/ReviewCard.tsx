import Avatar from "@/common/Avatar";
import Typography from "@/common/Typograhpy";
import React from "react";
import iconComponents from "@/assets/icons/iconComponents";
interface ReviewCardProps {
  author: string;
  image: string | null;
  timeAgo: string;
  rating: string;
  comment: string;
  upVotes: string;
  downVotes: string;
  commentCount: string;
  admin?: boolean;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  author,
  image,
  timeAgo,
  rating,
  comment,
  upVotes,
  downVotes,
  commentCount,
  admin,
}) => {
  return (
    <div className="h-[143px] w-full ">
      {/* top */}
      <div>
        <div className="flex items-center justify-between">
          <div className="grow flex items-center gap-[8px]">
            <Avatar image="/reviewer.jfif" />
            <div className="w-full flex gap-[8px] items-center">
              <Typography
                as="p"
                className="font-[400] text-[14px] leading-[16.1px]"
              >
                {author}
              </Typography>
              {admin && (
                <Typography className="text-dash-shades-black-2 font-[700] text-[14px] leading-[16.1px]">
                  (Admin)
                </Typography>
              )}

              <Typography
                as="p"
                className="text-[#1e1e1e60] text-[14px] leading-[16.1px] font-[400]"
              >
                {timeAgo}
              </Typography>
            </div>
          </div>
          {/* rating */}
          <div className="flex items-center gap-[4px]">
            <iconComponents.util.FilledStarIcon />
            <Typography
              as="p"
              className="font-[400] text-[14px] leading-[16.1px] text-dash-shades-black-2"
            >
              {rating}
            </Typography>
          </div>
        </div>
        <div>
          <Typography
            as="p"
            className="font-[400] leading-[24px] text-[14px] md:text-[16px] text-[#18181b]"
          >
            {comment}
          </Typography>
        </div>
      </div>

      {/* actions bottom*/}
      <div className="flex items-center gap-[32px]">
        <div className="flex items-center gap-1">
          <iconComponents.util.ThumbsUpUtilIcon color="#0d2159" />
          <Typography
            as="p"
            className="text-[11px] md:text-[14px] font-[400] leading-[16.1px] text-[#0d2159]"
          >
            {upVotes}
          </Typography>
        </div>
        <div className="flex items-center gap-1">
          <iconComponents.util.ThumbsDownUtilIcon color="#0d2159" />
          <Typography
            as="p"
            className="text-[11px] md:text-[14px] font-[400] leading-[16.1px] text-[#0d2159]"
          >
            {downVotes}
          </Typography>
        </div>
        <div className="flex items-center gap-1">
          <iconComponents.util.ChatUtilIcon color="#0d2159" />
          <Typography
            as="p"
            className="text-[11px] md:text-[14px] font-[400] leading-[16.1px] text-[#0d2159]"
          >
            {commentCount}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
