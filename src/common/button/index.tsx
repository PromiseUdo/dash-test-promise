import clsx from "clsx";
import React, {
  forwardRef,
  HTMLAttributes,
  MutableRefObject,
  RefObject,
} from "react";
// import MoonLoader from "react-spinners/MoonLoader";
// import CircularProgress from "../spinners/CircularProgress";
// import LazySpinner from "../spinners/LazySpinner";

type Variant = "primary" | "secondary";
//   | "empty"
//   | "hollow"
//   | "cancel"
//   | "outlined";
interface Props extends HTMLAttributes<HTMLButtonElement> {
  label?: React.ReactNode;
  loading?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
  type?: "button" | "reset" | "submit";
  delay?: number;
  variant?: Variant;
  btnRef?: RefObject<HTMLButtonElement>;
}

const classesMap: Record<Variant, string> = {
  primary:
    "bg-dash-primary hover:bg-jaa-teal-80 disabled:bg-jaa-shades-gray-3 disabled:text-jaa-gray-2 text-jaa-shades-white",
  secondary:
    "bg-dash-primary hover:bg-jaa-teal-80 disabled:bg-jaa-shades-gray-3 disabled:text-jaa-gray-2 text-jaa-shades-white",

  //   empty:
  //     "bg-jaa-shades-white text-jaa-teal-100 hover:text-jaa-teal-80 disabled:text-jaa-shades-gray-3",
  //   hollow:
  //     "h-[37px] px-4 py-1 gap-2 bg-[#CCECEF26] text-jaa-teal-100 hover:text-jaa-teal-80 disabled:text-jaa-shades-gray-3",
  //   cancel: "bg-[#F7F7F7] text-jaa-shades-black sm active:scale-95",
  //   outlined:
  //     "border border-[#E2E7E9] h-8 py-1 px-6 flex justify-center items-center sm",
};
function Button({
  label,
  className,
  loading,
  fullWidth,
  type = "button",
  delay = 300,
  variant = "primary",
  btnRef,
  ...rest
}: Props) {
  return (
    <button
      type={type}
      ref={btnRef}
      className={clsx(
        "flex sm font-medium justify-center items-center  rounded-md h-[50px] gap-[10px]  select-none whitespace-nowrap py-[16px] px-[40px] text-[#ffffff] text-base uppercase",
        classesMap[variant],
        className ? className : "",
        fullWidth ? "w-full" : "w-auto",
        loading ? "!bg-jaa-shades-white" : ""
      )}
      {...rest}
    >
      {loading ? (
        // <LazySpinner show={loading} delay={delay}>
        //   <CircularProgress size='18px' color='var(--teal-100)' />
        // </LazySpinner>
        <p>Loading...</p>
      ) : (
        label
      )}
    </button>
  );
}

export default Button;
