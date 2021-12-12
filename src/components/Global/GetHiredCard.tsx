import React from "react";
import cn from "classnames";

type Props = {
  cardTitle?: string;
  classNames?: string;
  size?: string;
};

const GetHiredCard: React.FC<Props> = ({
  cardTitle,
  children,
  classNames,
  size = "medium",
}) => {
  return (
    <>
      <div
        className={cn(
          "bg-white shadow-main rounded-xl flex flex-wrap",
          {
            "p-6": size === "medium",
            "p-0": size === "small",
            "p-8": size === "large",
          },
          classNames
        )}
      >
        {cardTitle ? (
          <div className="w-full">
            <h1 className="text-1xl text-titles">{cardTitle}</h1>
          </div>
        ) : null}
        {children}
      </div>
    </>
  );
};

export default GetHiredCard;
