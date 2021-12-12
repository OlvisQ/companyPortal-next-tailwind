import React, { useState, useEffect } from "react";
import cn from "classnames";

interface InnerMessages {
  id: number;
  type: string;
  profileImg: string;
  msg: string;
}

interface ChatHeaderStructure {
  userName: string;
  userImg: string;
  jobTitle: string;
}

interface MessageStructure {
  id: number;
  userImg: string;
  userName: string;
  chatData: ChatHeaderStructure;
  deliveredTime: string;
  displayMessage: [];
  isOpened: boolean;
  innerMessages: [InnerMessages];
}

type Props = {
  message: MessageStructure;
  isOpened: boolean;
  onClick: () => void;
};

const MessageBox: React.FC<Props> = ({ message, isOpened, onClick }) => {
  let [currentMessage, setCurrentMessage] = useState<MessageStructure>(message);

  useEffect(() => {
    setCurrentMessage(currentMessage);
  }, []);

  const renderMessage = currentMessage.displayMessage.map(
    (msg: string, index: number) => {
      return (
        <React.Fragment key={index}>
          <p className="font-sans text-secondary truncate text-sm">{msg}</p>
        </React.Fragment>
      );
    }
  );

  return (
    <>
      <div
        id="chat-box"
        className={cn(
          "flex flex-wrap items-center border-solid cursor-pointer border-b",
          {
            "active-message": isOpened === true,
          }
        )}
        onClick={onClick}
      >
        <div className="w-full flex items-center mt-3">
          <div className="w-8 h-8 rounded-full flex items-center justify-center avatar-border">
            <img src={currentMessage.userImg} alt="" className="w-8 h-8 rounded-full"/>
          </div>
          <p className="text-titles text-sm ml-3 truncate">
            {currentMessage.userName}
          </p>
          <p
            className="text-secondary ml-auto truncate"
            style={{ fontSize: "10px" }}
          >
            {currentMessage.deliveredTime}
          </p>
        </div>
        <div className="w-full pt-2 pb-5">{renderMessage}</div>
      </div>
    </>
  );
};

export default MessageBox;
