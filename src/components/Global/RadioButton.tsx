import React from "react";
import cn from "classnames";

type Props = {
  checkRadio: boolean;
  onClick?: () => void;
};

const RadioButton: React.FC<Props> = ({ checkRadio, onClick }) => {
  return (
    <>
      <button
        className={cn(
          "bg-white w-7 h-7 rounded-full outline-none focus:outline-none flex items-center justify-center",
          {
            "border border-secondary-elements": !checkRadio,
            "border-primary border-2": checkRadio,
          }
        )}
        onClick={onClick}
      >
        <span
          className={cn("bg-primary w-3 h-3 rounded-full", {
            block: checkRadio,
            hidden: !checkRadio,
          })}
        ></span>
      </button>
    </>
  );
};

export default RadioButton;
