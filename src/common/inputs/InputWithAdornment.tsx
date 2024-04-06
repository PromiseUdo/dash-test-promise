"use client";

import useGetCssValue from "@/hooks/useGetCssValue";
import React, { AllHTMLAttributes, FC, forwardRef } from "react";
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
  type: string;
}
const InputWithAdornment = forwardRef<HTMLInputElement, IProps>(
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
    const [leftContainer, leftWidth] = useGetCssValue("width", "16px", left);
    const [rightContainer, rightWidth] = useGetCssValue("width", "16px", right);
    const extraWidth =
      (left ? parseFloat(leftWidth) : 0) + (right ? parseFloat(rightWidth) : 0);
    return (
      <div className="flex-1 flex flex-col gap-1 z-10 w-full ">
        <div
          className={
            "w-full flex items-center py-0 rounded bg-[#F1F3F4] border border-slate-300 focus-within:border-voks-border" +
            (error ? " !border-voks-primary border-solid  " : "") +
            (height ? `h-[${height}]` : "h-[53px]")
          }
          style={style}
        >
          {left && <span ref={leftContainer}>{left}</span>}
          <input
            placeholder={placeholder}
            autoComplete="off"
            id={id}
            disabled={disabled}
            // {...register(id, { required })}
            // onChange={onChange}
            // ref={ref}
            name={name}
            style={{
              maxWidth: `calc(100% - ${extraWidth + 16}px)`,
            }}
            {...rest}
            className={`appearance-none max-h-full focus:outline-none outline-none active:outline-none  flex-1 border-none md px-4 py-3 text-jaa-shades-black placeholder-jaa-dark-teal-60 bg-[#F1F3F4]  ${
              className ? className : ""
            } ${
              left || right
                ? "rounded-none focus:outline-none active:outline-none"
                : "rounded"
            }`}
            type={type}
          />
          {right && <span ref={rightContainer}>{right}</span>}
        </div>
        <small className="text-voks-primary z-10">{error}</small>
      </div>
    );
  }
);
InputWithAdornment.displayName = "InputWithAdornment";
export default InputWithAdornment;
