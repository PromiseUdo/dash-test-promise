"use client";

import clsx from "clsx";
import React from "react";
import {
  FieldErrors,
  FieldValue,
  FieldValues,
  UseFormRegister,
} from "react-hook-form";
import Typography from "../Typograhpy";

interface TextAreaProps {
  id: string;
  label: string;
  defaultValue?: string;
  disabled?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  placeholder: string;
}

const TextArea: React.FC<TextAreaProps> = ({
  id,
  label,
  disabled,
  defaultValue,
  required,
  register,
  errors,
  placeholder,
}) => {
  return (
    <div className="w-full relative flex flex-col gap-[14px] ">
      <Typography
        as="p"
        className="font-[400] text-[14px] text-dash-shades-black-2 leading-[16.94px]"
      >
        Write Review
      </Typography>
      <textarea
        className={clsx(
          "peer w-full max-h-[100px] min-h-[100px] p-4 pt-1 outline-none bg-white font-light border border-[#D4DCF1] rounded-md transition disabled:opacity-70 disabled:cursor-not-allowed",
          errors[id]
            ? "border-rose-400 focus:border-rose-400"
            : "border-slate-300 focus:border-slate-300"
        )}
        id={id}
        disabled={disabled}
        {...register(id, { required })}
        placeholder={placeholder}
        defaultValue={defaultValue}
      />
      {/* <label
        className={clsx(
          "absolute cursor-text text-md duration-150 transform -translate-y-3 top-5 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 ",
          errors[id] ? "text-rose-500 " : "text-slate-400 "
        )}
        htmlFor={id}
      >
        {label}
      </label> */}
    </div>
  );
};

export default TextArea;
