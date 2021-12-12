import React from "react";
import { connect } from "react-redux";
import { updateMsgToSend, updateMsgView } from "@/redux/actions/messagesActions";

interface CPFromRedux {
  store: {
    messages: {
      messageToSend: string;
    };
  };
}

interface MessageToSendStructure {
  id: number;
  profileImg: string;
  type: string;
  msg: string;
}

type Props = {
  messageToSend: string;
  updateMsg: (arg: string) => void;
  updateView: (arg: MessageToSendStructure) => void;
};

const ChatFooter: React.FC<Props> = ({
  messageToSend,
  updateMsg,
  updateView,
}) => {
  const changeMsgView = () => {
    const getRanNo = (min: number, max: number) => {
      return Math.floor(Math.random() * (max - min + 1) + min);
    };

    let sentMessage = {
      id: getRanNo(1, 100),
      profileImg: "/img/user.jpg",
      type: "sent",
      msg: messageToSend,
    };

    updateView(sentMessage);
    updateMsg("");

    let chatBox: any = document.getElementById("chat-box");
    chatBox.scrollTop = chatBox.scrollHeight - chatBox.clientHeight;
    console.log(chatBox.scrollTop, chatBox.scrollHeight, chatBox.clientHeight);
  };

  const sendOnEnter = (
    e:
      | React.KeyboardEvent<HTMLTextAreaElement>
      | React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.keyCode === 13) {
      const getRanNo = (min: number, max: number) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
      };

      let sentMessage = {
        id: getRanNo(1, 100),
        profileImg: "/img/user.svg",
        type: "sent",
        msg: messageToSend,
      };

      updateView(sentMessage);
      updateMsg("");

      let chatBox: any = document.getElementById("chat-box");
      chatBox.scrollTop = chatBox.scrollHeight - chatBox.clientHeight;
    }
  };

  return (
    <>
      <div className="flex bottom-0 z-10 absolute items-center h-16 bg-white lg:w-3/5 w-full">
        <button className="lg:px-6 lg:mx-0 mx-4 lg:w-auto w-7 bg-transparent outline-none focus:outline-none">
          <img
            src="/img/messages/clip-icon.svg"
            alt=""
            className="lg:w-auto w-full"
          />
        </button>
        <div className="w-full flex items-center h-full bg-secondary-light2 pl-6 lg:rounded-tl-3xl rounded-tl-2xl">
          <input
            type="text"
            className="w-11/12 h-full bg-transparent text-sm outline-none focus:outline-none text-secondary"
            placeholder="Start typing here..."
            value={messageToSend}
            onChange={(e) => updateMsg(e.target.value)}
            onKeyDown={sendOnEnter}
          />
          <button
            className="bg-transparent outline-none focus:outline-none w-1/12 flex justify-center pr-2"
            onClick={changeMsgView}
          >
            <img src="/img/messages/send-message-icon.svg" alt="" />
          </button>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state: CPFromRedux) => ({
  messageToSend: state.store.messages.messageToSend,
});

const mapDispatchToProps = {
  updateMsg: updateMsgToSend,
  updateView: updateMsgView,
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatFooter);
