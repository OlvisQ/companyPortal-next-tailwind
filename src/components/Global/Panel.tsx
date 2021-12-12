import React, { useState } from "react";
import cn from "classnames";

type PanelProps = {
  icon?: any;
  title?: string;
};

const Panel: React.FC<PanelProps> = ({ icon, title, children }) => {
  let [panel, setPanel] = useState<boolean>(false);

  return (
    <>
      <div className="flex flex-wrap w-full mt-2 border-b overflow-hidden">
        <div className="w-full">
          <button
            className="w-full flex items-center justify-between h-full outline-none focus:outline-none py-8"
            onClick={() => setPanel((panel = !panel))}
          >
            <div
              className={cn("flex items-center", {
                "text-primary": panel === true,
                "text-secondary": panel === false,
              })}
            >
              <div className="w-8 h-8 flex items-center mr-4">{icon}</div>
              <span
                className={cn("text-1xl", {
                  "text-titles": panel === true,
                  "text-secondary": panel === false,
                })}
              >
                {title}
              </span>
            </div>
            <div className="flex justify-end">
              <i
                className={cn(
                  "fas fa-chevron-down transform text-xl text-secondary",
                  {
                    "rotate-180": panel === true,
                    "rotate-0": panel === false,
                  }
                )}
              ></i>
            </div>
          </button>
        </div>
        <div
          className={cn("w-full mb-6 cool-transition transform", {
            block: panel === true,
            hidden: panel === false,
          })}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default Panel;
