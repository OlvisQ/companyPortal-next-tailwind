import React from "react";
import cn from "classnames";

type Props = {
  onCheck?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isChecked?: boolean;
  classNames?: string;
  checkRef?: string;
  borderColor?: string;
};

const Checkbox: React.FC<Props> = ({
  onCheck,
  isChecked,
  classNames,
  checkRef,
  borderColor = "border-primary",
}) => {
  return (
    <>
      <label className="checkbox-container">
        <input
          type="checkbox"
          onChange={onCheck}
          checked={isChecked}
          ref={checkRef}
        />
        <span
          className={cn("checkmark border-2", classNames, borderColor)}
        ></span>
      </label>
    </>
  );
};

export default Checkbox;
