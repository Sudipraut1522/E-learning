import React from "react";

type ButtonProps = {
  type?: "submit" | "button";   
  onClick?: () => void;
  buttonName: string;
  className: string;
  icon?: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({
  type = "button",
  onClick,
  buttonName,
  className,
  icon,
  ...props
}) => {
  return (
    <div>
      <button
        onClick={onClick}
        className={`flex items-center gap-2 text-center p-2 cursor-pointer ${className}`}
        type={type}
        {...props}
      >
        {icon && <span className="text-xl">{icon}</span>}
        <span>{buttonName}</span>
      </button>
    </div>
  );
};

export default Button;
