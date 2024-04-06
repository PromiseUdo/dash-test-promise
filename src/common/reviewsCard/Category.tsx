import Typography from "../Typograhpy";
import clsx from "clsx";
import React, {
  forwardRef,
  HTMLAttributes,
  MutableRefObject,
  RefObject,
} from "react";
type Variant = "network" | "traffic" | "road" | "water" | "security" | "power";
interface CategoryProps extends HTMLAttributes<HTMLButtonElement> {
  label: string;
  variant?: Variant | string;
}

const classesMap: Record<Variant, string> = {
  network:
    "bg-dash-shades-purple-3  border-dash-shades-purple-1   text-dash-shades-purple-2",
  traffic:
    "bg-dash-shades-goldenrod-3 border-dash-shades-goldenrod-2 text-dash-shades-goldenrod-1",
  road: "bg-dash-shades-dark-brown-3 border-shades-dark-brown-2 text-shades-dark-brown-1",
  water:
    "bg-dash-shades-blue-3 border-dash-shades-blue-2 text-dash-shades-blue-1",
  security:
    "bg-dash-shades-dark-purple-3 border-dash-shades-dark-purple-2 text-dash-shades-dark-purple-1",
  power: "bg-dash-shades-coral border-dash-shades-coral text-dash-shades-black",
};

const Category: React.FC<CategoryProps> = ({ label, variant }) => {
  const variantClass = classesMap[variant as Variant] || classesMap["traffic"];

  return (
    <div
      className={clsx(
        "bg-dash-shades-purple-3 h-[14px] rounded-[7px] px-[8px] py-[2px] border-[0.5px] border-dash-shades-purple-1 flex items-center justify-center",
        variantClass
      )}
    >
      <Typography
        as="p"
        className="text-[9px] font-[500] leading-[10px] text-dash-shades-purple-2"
      >
        {label}
      </Typography>
    </div>
  );
};

export default Category;
