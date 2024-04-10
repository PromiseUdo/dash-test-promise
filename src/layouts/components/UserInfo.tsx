import Typography from "@/common/Typograhpy";
import clsx from "clsx";
import React from "react";

interface UserInfoProps {
  className?: string;
}
const UserInfo: React.FC<UserInfoProps> = ({ className }) => {
  return (
    <div className="flex items-center gap-[13px]">
      <Typography
        as="p"
        className={clsx(
          "text-dash-shades-black text-[16px] font-[500] leading-[10px]",
          className
        )}
      >
        Welcome!
      </Typography>
      <div
        className={clsx(
          "w-8 h-8 rounded-full border flex justify-center items-center relative"
        )}
      >
        <img
          src={"/user.jfif" || "/defaultImage.png"}
          alt="Profile of User"
          className="w-[36px] h-[36px] object-cover rounded-full"
          onError={(e) => {
            e.currentTarget.src = "/defaultImage.png";
          }}
        />
      </div>
    </div>
  );
};

export default UserInfo;
