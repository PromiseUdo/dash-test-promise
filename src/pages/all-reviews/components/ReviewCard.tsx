import Avatar from "@/common/Avatar";
import Typography from "@/common/Typograhpy";
import React from "react";
import iconComponents from "@/assets/icons/iconComponents";
const ReviewCard = () => {
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
                James T.
              </Typography>
              <Typography className="text-dash-shades-black-2 font-[700] text-[14px] leading-[16.1px]">
                (Admin)
              </Typography>
              <Typography
                as="p"
                className="text-[#1e1e1e60] text-[14px] leading-[16.1px] font-[400]"
              >
                5 months ago
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
              4.0
            </Typography>
          </div>
        </div>
        <div>
          <Typography
            as="p"
            className="font-[400] leading-[24px] text-[16px] text-[#18181b]"
          >
            There is no stable electricity. The roads are fairly good and there
            is a sense of community. The drainage system is poor and most
            residents litter their surroundings. There are several grocery
            stores and Supermarkets.
          </Typography>
        </div>
      </div>

      {/* actions bottom*/}
      <div className="flex items-center gap-[32px]">
        <div className="flex items-center gap-1">
          <iconComponents.util.ThumbsUpUtilIcon color="#0d2159" />
          <Typography
            as="p"
            className="text-[14px] font-[400] leading-[16.1px] text-[#0d2159]"
          >
            1224
          </Typography>
        </div>
        <div className="flex items-center gap-1">
          <iconComponents.util.ThumbsDownUtilIcon color="#0d2159" />
          <Typography
            as="p"
            className="text-[14px] font-[400] leading-[16.1px] text-[#0d2159]"
          >
            1224
          </Typography>
        </div>
        <div className="flex items-center gap-1">
          <iconComponents.util.ChatUtilIcon color="#0d2159" />
          <Typography
            as="p"
            className="text-[14px] font-[400] leading-[16.1px] text-[#0d2159]"
          >
            1224
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
