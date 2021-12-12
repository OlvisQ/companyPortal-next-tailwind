import React from "react";
import cn from "classnames";

type Props = {
  profile_img?: string;
  username?: string;
  deliveredTime?: string;
  unreadMsg?: string;
  classNames?: string;
};

const UnreadMessage: React.FC<Props> = ({
  profile_img,
  username,
  deliveredTime,
  unreadMsg,
  classNames,
}) => {
  return (
    <>
      <div
        className={cn(
          "flex flex-wrap border-b border-secondary-elements py-4",
          classNames
        )}
      >
        <div className="w-full flex items-center">
          <div className="w-1/2 flex items-center">
            <img src={profile_img} alt="" />
            <p className="text-xs ml-2 text-titles">{username}</p>
          </div>
          <div className="w-1/2 text-right">
            <p className="text-xss text-secondary">{deliveredTime}</p>
          </div>
        </div>
        <div className="w-full flex items-center mt-3">
          <div className="w-2 h-2 rounded-full bg-primary mr-4"></div>
          <div className="flex-1">
            <p className="text-titles text-sm">{unreadMsg}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default UnreadMessage;
