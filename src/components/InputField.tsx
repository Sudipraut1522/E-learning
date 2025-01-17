import React from "react";
import { UseFormRegister } from "react-hook-form";

type inputFieldType = {
  errors?: string | null;
  type: string;
  labelName: String;
  className: string;
  name: string;
  placeHolder: string;
  register: UseFormRegister<any>;
  errorClassName: string;
};
const InputField: React.FC<inputFieldType> = ({
  type = "text",
  labelName,
  className,
  name,
  placeHolder,
  register,
  errors,
  errorClassName,
  ...props
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name}>{labelName}</label>
      <input
        type={type}
        className={`flex h-12 w-full  border-1 border-gray-300 outline-none  px-3 py-4 text-sm focus:ring-[1px]  focus:border-red-700 focus:ring-red-700  placeholder:text-gray-500 ${className}`}
        placeholder={placeHolder}
        {...register(name)}
        {...props}
      />
      {errors && (
        <p className={`text-base text-red-500 text-xs", ${errorClassName}`}>
          *{errors}
        </p>
      )}
    </div>
  );
};

export default InputField;
