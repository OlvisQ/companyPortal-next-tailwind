import React from "react";
import cn from "classnames";

type Props = {
  isFooterVisible?: boolean;
};

const ChatInitiaterFooter: React.FC<Props> = ({ isFooterVisible }) => {
  return (
    <>
      <div
        className={cn(
          "flex bottom-0 fixed items-center z-50 h-16 lg:w-1/3 md:w-1/2 w-full bg-white cool-transition",
          {
            "right-0": isFooterVisible,
            "-right-full": !isFooterVisible,
          }
        )}
      >
        <button className="lg:px-6 lg:mx-0 mx-4 lg:w-auto w-7 bg-transparent outline-none focus:outline-none">
          <img
            src="/img/icons/clip-icon.svg"
            alt=""
            className="lg:w-auto w-full"
          />
        </button>
        <div className="flex items-center h-full bg-secondary-light2 px-6 lg:rounded-tl-3xl rounded-tl-2xl w-full justify-between">
          <input
            type="text"
            className="lg:pr-0 pr-4 h-full bg-transparent text-sm outline-none focus:outline-none text-secondary"
            placeholder="Start typing here..."
          />
          <button className="outline-none focus:outline-none">
            <img src="/img/icons/send-message-icon.svg" alt="" />
          </button>
        </div>
      </div>
    </>
  );
};

export default ChatInitiaterFooter;
