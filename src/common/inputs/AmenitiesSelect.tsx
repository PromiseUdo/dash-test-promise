"use client";

import useGetCssValue from "@/hooks/useGetCssValue";
import React, { AllHTMLAttributes, FC, forwardRef, useState } from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface IProps extends AllHTMLAttributes<HTMLInputElement> {
  id: string;
  error?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  left?: React.ReactNode;
  right?: React.ReactNode;
  style?: React.CSSProperties;
  height?: string;
  className?: string;
  name?: string;
  register?: UseFormRegister<FieldValues>;
  errors?: FieldErrors;
  type?: string;
  amenities?: string[];
}
const AmenitiesSelect = forwardRef<HTMLInputElement, IProps>(
  (
    {
      id,
      left,
      right,
      onChange,
      placeholder,
      className,
      height,
      name,
      amenities,
      error,
      style,
      register,
      disabled,
      errors,
      required,
      type,
      ...rest
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(false);

    const [leftContainer, leftWidth] = useGetCssValue("width", "16px", left);
    const [rightContainer, rightWidth] = useGetCssValue("width", "16px", right);
    const extraWidth =
      (left ? parseFloat(leftWidth) : 0) + (right ? parseFloat(rightWidth) : 0);
    const toggleDropdown = () => {
      setIsOpen((prevState) => !prevState);
    };

    return (
      <div className="relative flex-1 flex flex-col gap-1 z-10 w-full ">
        <div
          onClick={toggleDropdown}
          className={
            "w-full flex items-center justify-between py-0 rounded bg-[#F1F3F4] border border-slate-300 focus-within:border-dash-border" +
            (error ? " !border-dash-primary border-solid  " : "") +
            (height ? `h-[${height}]` : "h-[53px]")
          }
          style={style}
        >
          {left && <span ref={leftContainer}>{left}</span>}
          <p>Select Amenities</p>
          {right && <span ref={rightContainer}>{right}</span>}
        </div>
        {isOpen && (
          <div className="absolute top-full left-0 w-full rounded bg-[#F3F7FE] border border-[#D4DCF1] grid grid-cols-5 gap-[8px] p-4">
            {amenities?.map((item, idx) => (
              <div key={idx} className="flex items-center gap-[12px]">
                <input type="checkbox" id="item1" />
                <label
                  htmlFor="item1"
                  className="text-dash-shades-black-2 text-[14px] font-[400] leading-[20px]"
                >
                  {item}
                </label>
              </div>
            ))}
          </div>
        )}
        <small className="text-dash-primary z-10">{error}</small>
      </div>
    );
  }
);
AmenitiesSelect.displayName = "InputWithAdornment";
export default AmenitiesSelect;
