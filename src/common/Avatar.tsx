import clsx from "clsx";
import React from "react";

interface AvatarProps {
  className?: string;
  image?: string;
}

const Avatar: React.FC<AvatarProps> = ({ className, image }) => {
  return (
    <div
      className={clsx(
        "w-[25px] h-[25px] rounded-full border flex justify-center items-center relative",
        className ? className : ""
      )}
    >
      <img
        src={image || "/defaultImage.png"}
        alt="Profile of User"
        className="w-[25px] h-[25px] object-cover rounded-full"
        onError={(e) => {
          e.currentTarget.src = "/defaultImage.png";
        }}
      />
    </div>
  );
};

export default Avatar;
