import React from "react";
import cn from "classnames";
import InitiaterSentMessage from "@/components/Global/ChatInitiater/InitiaterSentMessage";
import InitiaterRecievedMessage from "@/components/Global/ChatInitiater/InitiaterRecievedMessage";
import ChatInitiaterHeader from "@/components/Global/ChatInitiater/ChatInitiaterHeader";
import ChatInitiaterFooter from "@/components/Global/ChatInitiater/ChatInitiaterFooter";

// interface ChatInitiaterInterface {
//   id?: string | number;
//   sent?: boolean;
//   msg?: string;
//   profilePic?: string;
// }

// interface CPFromRedux {
//   store: {
//     chatInitiaterData: ChatInitiaterInterface[];
//   };
// }

type Props = {
  isChatOpen: boolean;
  closeSidebar: () => void;
};

const ChatInitiaterSidebar: React.FC<Props> = ({
  isChatOpen,
  closeSidebar,
}) => {
  return (
    <>
      <div
        className={cn(
          "fixed bg-black left-0 right-0 bottom-0 top-0 opacity-20",
          {
            block: isChatOpen === true,
            hidden: isChatOpen === false,
          }
        )}
        style={{ zIndex: 9999999999999999 }}
        onClick={closeSidebar}
      ></div>
      <div
        className={cn(
          "h-screen bg-white cool-transition fixed top-0 bottom-0 lg:w-1/3 md:w-1/2 w-full flex flex-wrap shadow-light pb-16",
          {
            "right-0": isChatOpen === true,
            "-right-full": isChatOpen === false,
          }
        )}
        style={{ zIndex: 9999999999999 }}
      >
        <ChatInitiaterHeader
          onCrossClick={closeSidebar}
          onMinusClick={closeSidebar}
        />

        <div className="w-full flex flex-wrap self-end pr-5 pl-8 pt-10 max-h-screen overflow-scroll lg:pb-0 pb-36">
          <div>
            <InitiaterRecievedMessage
              message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor mattis nunc commodo pharetra vel elit. Elementum enim, mollis id dolor, tortor in. Turpis sed arcu suspendisse neque. Varius sem feugiat lacus et se?"
              profilePic="/img/chat-initiater.png"
            />
          </div>
          <div className="mt-12">
            <InitiaterRecievedMessage
              message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor mattis nunc commodo pharetra vel elit. Elementum enim, mollis id dolor, tortor in. Turpis sed arcu suspendisse neque. Varius sem feugiat lacus et se?"
              profilePic="/img/chat-initiater.png"
            />
          </div>
          <div>
            <InitiaterSentMessage sentMessage="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor mattis nunc commodo pharetra vel elit. Elementum enim, mollis id dolor, tortor in. Turpis sed arcu suspendisse neque. Varius sem feugiat lacus et se?" />
          </div>
        </div>

        <ChatInitiaterFooter isFooterVisible={isChatOpen} />
      </div>
    </>
  );
};

// const mapStateToProps = (state: CPFromRedux) => ({
//   chatInitiaterData: state.store.chatInitiaterData,
// });

export default ChatInitiaterSidebar;
