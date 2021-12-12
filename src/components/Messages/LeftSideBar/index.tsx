import React from "react";
import MessageBox from "@/components/Messages/LeftSideBar/MessageBox";
import { connect } from "react-redux";
import {
  updateClickedMessage,
  updateChatBox,
  updateChatHeader,
  updateMsgbar,
} from "@/redux/actions/messagesActions";

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
  location: string;
  jobMatch: string;
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

interface CPFromRedux {
  store: {
    messages: {
      latestMessages: [MessageStructure];
    };
  };
}

type Props = {
  latestMessages: [MessageStructure];
  clickedMessage: (arg: MessageStructure) => void;
  updateChat: (arg: [InnerMessages]) => void;
  updateHeader: (arg: ChatHeaderStructure) => void;
  updateLeftbar: (arg: boolean) => void;
};

const LeftSideBar: React.FC<Props> = ({
  latestMessages,
  clickedMessage,
  updateChat,
  updateHeader,
  updateLeftbar,
}) => {
  const changeMessage = (item: MessageStructure) => {
    clickedMessage(item);
    updateChat(item.innerMessages);
    updateHeader(item.chatData);
    updateLeftbar(true);
  };

  const renderMessages = latestMessages.map(
    (message: MessageStructure, index: number) => {
      return (
        <React.Fragment key={index}>
          <MessageBox
            message={message}
            isOpened={message.isOpened}
            onClick={() => changeMessage(message)}
          />
        </React.Fragment>
      );
    }
  );

  return (
    <>
      <div className="w-full">
        <div
          className="flex w-full border-b border-solid py-4 px-6 items-center"
          style={{ borderColor: "#efefef" }}
        >
          <img src="/img/icons/search-icon.svg" alt="" className="mr-4" />
          <input
            type="text"
            placeholder="Search your messages"
            className="w-full outline-none focus:outline-none bg-transparent search-placeholder-color text-titles text-sm"
          />
        </div>
        <div className="w-full px-5 pb-4 overflow-y-visible overflow-hidden max-h-screen inbox-layout relative">
          <div className="fixed bottom-0 h-24 msgbox-gradient"></div>
          {renderMessages}
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state: CPFromRedux) => ({
  latestMessages: state.store.messages.latestMessages,
});

const mapDispatchToProps = {
  clickedMessage: updateClickedMessage,
  updateChat: updateChatBox,
  updateHeader: updateChatHeader,
  updateLeftbar: updateMsgbar,
};

export default connect(mapStateToProps, mapDispatchToProps)(LeftSideBar);
