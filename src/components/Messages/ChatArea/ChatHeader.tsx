import React, { useState } from "react";
import { connect } from "react-redux";
import { updateMsgbar, updateMsgRightbar } from "@/redux/actions/messagesActions";

interface ChatHeaderStructure {
  userImg: string;
  userName: string;
  jobTitle: string;
}

interface CPFromRedux {
  store: {
    messages: {
      chatHeaderData: ChatHeaderStructure;
    };
  };
}

type Props = {
  chatHeaderData: ChatHeaderStructure;
  updateRightBar: (arg: boolean) => void;
  updateChatBar: (arg: boolean) => void;
};

const ChatHeader: React.FC<Props> = ({
  chatHeaderData,
  updateChatBar,
  updateRightBar,
}) => {
  let [chatBar, setChatBar] = useState<boolean>(false);
  let [rightbar, setRightBar] = useState<boolean>(false);

  const closeChatBar = () => {
    setChatBar((chatBar = false));
    updateChatBar(chatBar);
  };

  const toggleRightBar = () => {
    setRightBar((rightbar = true));
    updateRightBar(rightbar);
  };

  return (
    <>
      <div className="flex py-3 md:pl-3 md:pr-7 fixed items-center bg-white z-20 lg:w-7/12 w-full lg:border-b-0 border-b border-secondary-elements">
        <button
          className="bg-transparent outline-none focus:outline-none ml-4 mr-4 p lg:hidden flex text-secondary"
          onClick={closeChatBar}
        >
          <i className="fas fa-chevron-left text-secondary "></i>
        </button>
        <div className="h-14 w-14 avatar-border flex items-center justify-center rounded-full mr-4">
          <img src={chatHeaderData.userImg} alt="" className="w-14 h-14 rounded-full"/>
        </div>
        <div>
          <h1 className="text-titles sm:text-1xl">
            {chatHeaderData.userName}
          </h1>
          <p className="sm:text-xs text-xss text-primary">
            {chatHeaderData.jobTitle}
          </p>
        </div>
        <img
          src="/img/messages/message-dropdownIcon.svg"
          alt=""
          className="ml-auto lg:flex hidden"
        />
        <button
          className="bg-transparent outline-none focus:outline-none mr-4 ml-auto lg:hidden flex text-secondary"
          onClick={toggleRightBar}
        >
          <img
            src="/img/messages/message-dropdownIcon.svg"
            alt=""
            className="ml-auto"
          />
        </button>
      </div>
    </>
  );
};

const mapStateToProps = (state: CPFromRedux) => ({
  chatHeaderData: state.store.messages.chatHeaderData,
});

const mapDispatchToProps = {
  updateChatBar: updateMsgbar,
  updateRightBar: updateMsgRightbar,
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatHeader);
