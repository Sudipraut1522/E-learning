import React, { useState } from "react";
import { UseFormRegister } from "react-hook-form";
import { HiEye, HiEyeOff } from "react-icons/hi";

type InputFieldType = {
  error?: string | null;
  type: string;
  labelName?: string;
  inputClassName?: string;
  name: string;
  placeHolder?: string;
  register: UseFormRegister<any>;
  errorClassName?: string;
  required?: boolean;
};

const InputField: React.FC<InputFieldType> = ({
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
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name}>{labelName}</label>

      <div className="relative">
        <input
          required={required}
          type={isPasswordVisible && type === "password" ? "text" : type}
          className={`flex h-10 w-full border-1 border-gray-300 outline-none px-3 py-4 text-sm focus:ring-[1px] placeholder:text-gray-500 ${inputClassName}`}
          placeholder={placeHolder}
          {...register(name)}
          {...props}
        />

        {type === "password" && (
          <span
            className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
            onClick={togglePasswordVisibility}
          >
            {isPasswordVisible ? (
              <HiEyeOff size={20} color="gray" />
            ) : (
              <HiEye size={20} color="gray" />
            )}
          </span>
        )}
      </div>

      {error && <p className={`${errorClassName}`}>*{error}</p>}
    </div>
  );
};

export default InputField;
