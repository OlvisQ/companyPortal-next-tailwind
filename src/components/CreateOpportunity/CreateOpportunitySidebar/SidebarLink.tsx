import React from "react";
import cn from "classnames";

type Props = {
  isActive: boolean;
  completed: boolean;
  title: string;
};

const SidebarLink: React.FC<Props> = ({ title, isActive, completed }) => {
  return (
    <>
      <div className="w-full flex items-center relative overflow-x-hidden">
        <div
          className={cn("absolute cool-transition", {
            "left-0": completed,
            "-left-1/2": !completed,
          })}
        >
          <img src="/img/icons/completed-icon.svg" alt="" />
        </div>
        <div
          className={cn("w-1 h-6 rounded bg-primary absolute cool-transition", {
            "left-0": isActive,
            "-left-1/2": !isActive,
          })}
        ></div>
        <div className="pt-px">
          <p
            className={cn("ml-6 cool-transition", {
              "ml-6": isActive,
              "ml-9": completed,
              "text-titles": isActive,
              "text-secondary": completed || !isActive,
            })}
          >
            {title}
          </p>
        </div>
      </div>
    </>
  );
};

export default SidebarLink;
