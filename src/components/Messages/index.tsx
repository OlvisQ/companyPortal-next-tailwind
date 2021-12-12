import React from "react";
import LeftSideBar from "@/components/Messages/LeftSideBar";
import ChatArea from "@/components/Messages/ChatArea";
import RightSideBar from "@/components/Messages/RightSideBar";
import { connect } from "react-redux";
import cn from "classnames";

interface CPFromRedux {
  store: {
    messages: {
      messageOpen: boolean;
      messageRightbarOpen: boolean;
    };
  };
}

type Props = {
  messageOpen: boolean;
  messageRightbarOpen: boolean;
};

const Messages: React.FC<Props> = ({ messageOpen, messageRightbarOpen }) => {
  return (
    <>
      <div className="flex">
        <div
          className="lg:w-1/5 w-full h-full border-solid border-r bg-white pb-16"
          style={{ borderColor: "#efefef" }}
        >
          <LeftSideBar />
        </div>
        <div
          className={cn(
            "lg:w-7/12 w-full h-full lg:static fixed lg:bg-transparent bg-white top-0 cool-transition",
            {
              "-right-full": messageOpen === false,
              "right-0": messageOpen === true,
            }
          )}
          style={{ zIndex: 99999999900 }}
        >
          <ChatArea />
        </div>
        <div
          className={cn(
            "lg:w-1/5 w-full lg:static lg:bg-transparent fixed flex flex-col top-0 border-l cool-transition mx-auto",
            {
              "-right-full": messageRightbarOpen === false,
              "right-0": messageRightbarOpen === true,
            }
          )}
          style={{ borderColor: "#efefef", zIndex: 999999999000 }}
        >
          <RightSideBar />
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state: CPFromRedux) => ({
  messageOpen: state.store.messages.messageOpen,
  messageRightbarOpen: state.store.messages.messageRightbarOpen,
});

export default connect(mapStateToProps)(Messages);
