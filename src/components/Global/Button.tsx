import React from "react";
import cn from "classnames";

type Props = {
  text?: string;
  onClick?: () => void;
  isTransparent?: boolean;
  radius?: string;
  classNames?: string;
  isFullWidth?: boolean;
};

const Button: React.FC<Props> = ({
  text,
  onClick,
  isTransparent,
  radius = "rounded-lg",
  classNames,
  isFullWidth = true,
  children,
}) => {
  return (
    <button
      className={cn(
        "outline-none focus:outline-none my-8 btn-hover cool-transition h-1xl ",
        {
          "text-white bg-primary": !isTransparent,
          "bg-transparent": isTransparent === true,
          "w-full": isFullWidth,
        },
        radius,
        classNames
      )}
      onClick={onClick}
    >
      {text}
      {children}
    </button>
  );
};

export default Button;
