import React from "react";
import { UseFormRegister } from "react-hook-form";

type inputFieldType = {
  error?: string | null;
  type: string;
  labelName: String;
  inputClassName?: string;
  name: string;
  placeHolder?: string;
  register: UseFormRegister<any>;
  errorClassName?: string;
  required: boolean;
};
const InputField: React.FC<inputFieldType> = ({
  type = "text",
  labelName,
  inputClassName,
  name,
  placeHolder,
  register,
  error,
  errorClassName,
  required,
  ...props
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name}>{labelName}</label>
      <input
        required={required}
        type={type}
        className={`flex h-10 w-full  border-1 border-gray-300 outline-none  px-3 py-4 text-sm focus:ring-[1px]  focus:border-red-700 focus:ring-red-700  placeholder:text-gray-500 ${inputClassName}`}
        placeholder={placeHolder}
        {...register(name)}
        {...props}
      />
      {error && <p className={`${errorClassName}`}>*{error}</p>}
    </div>
  );
};

export default InputField;
