import * as React from "react";
import { FormInputProps } from "./types";

export const FormInput: React.FC<FormInputProps> = ({
  label,
  type,
  placeholder,
  id,
}) => {
  return (
    <div className="flex flex-col mt-8 w-full">
      <label htmlFor={id} className="text-lg tracking-normal text-black">
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className="flex-1 shrink gap-2.5 px-5 py-2.5 mt-3 w-full text-base tracking-normal leading-loose bg-white rounded-xl border border-solid border-neutral-200 text-neutral-500"
        aria-label={label}
      />
    </div>
  );
};
