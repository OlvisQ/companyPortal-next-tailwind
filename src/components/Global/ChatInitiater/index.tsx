import React, { useState } from "react";
import GetHiredCard from "@/components/Global/GetHiredCard";
import Button from "@/components/Global/Button";
import ChatInitiaterSidebar from "@/components/Global/ChatInitiater/ChatInitiaterSidebar";
import cn from "classnames";

type Props = {
  classNames?: string;
  headerWidth?: string;
  imgWidth?: string;
  initiaterInfoWidth?: string;
  hasDivider?: boolean;
};

const ChatInitiater: React.FC<Props> = ({
  classNames,
  headerWidth = "md:w-2/3 w-full",
  imgWidth = "w-1/2",
  initiaterInfoWidth = "w-1/2",
  hasDivider,
}) => {
  let [openChatSidebar, setOpenChatSidebar] = useState<boolean>(false);

  const initiateChat = () => {
    setOpenChatSidebar((openChatSidebar = !openChatSidebar));
  };

  return (
    <>
      <GetHiredCard classNames={classNames}>
        <div className="flex flex-wrap w-full">
          <div
            className={cn(
              "flex items-center mx-auto",
              {
                "border-b border-secondary-elements": hasDivider,
                "border-b-0": !hasDivider,
              },
              headerWidth
            )}
          >
            <div className={cn(imgWidth)}>
              <img src="/img/chat-initiater.png" alt="" />
            </div>
            <div className={cn(initiaterInfoWidth)}>
              <h1 className="text-titles text-lg">Kelly</h1>
              <p className="text-xs text-secondary upprecase mb-2">
                gethired chat support
              </p>
              <p className="text-sm text-titles mb-2">kelly@gethired.ai</p>
              <p className="text-sm text-primary">+44 1632 960673</p>
            </div>
          </div>
          <div className="w-full">
            <Button
              text="+ Initiate Chat"
              onClick={initiateChat}
              classNames="bg-secondary-light2 text-primary"
            />
          </div>
          <div className="w-2/3 mx-auto text-center">
            <p className="text-secondary text-sm">
              (2){" "}
              <span className="font-sans">
                people in queue before you. Average wait time
              </span>{" "}
              less than 5 mins.
            </p>
          </div>
        </div>
        <ChatInitiaterSidebar
          isChatOpen={openChatSidebar}
          closeSidebar={initiateChat}
        />
      </GetHiredCard>
    </>
  );
};

export default ChatInitiater;
