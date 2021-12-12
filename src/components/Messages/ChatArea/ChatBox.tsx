import React from "react";
import ReceivedMsg from "@/components/Messages/ChatArea/ReceivedMsg";
import SentMessage from "@/components/Messages/ChatArea/SentMessage";
import { connect } from "react-redux";

interface DisplayedMessageStructure {
  id: number;
  type: string;
  msg: string;
  profileImg: string;
}

interface CPFromRedux {
  store: {
    messages: {
      displayedMessages: [DisplayedMessageStructure];
    };
  };
}

type Props = {
  displayedMessages: [DisplayedMessageStructure];
};

const ChatBox: React.FC<Props> = ({ displayedMessages }) => {
  const renderMessage = displayedMessages.map((msg) => {
    if (msg.type === "Recieved") {
      return (
        <React.Fragment key={msg.id}>
          <ReceivedMsg msg={msg.msg} profile_img={msg.profileImg} />
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment key={msg.id}>
          <SentMessage msg={msg.msg} profile_img={msg.profileImg} />
        </React.Fragment>
      );
    }
  });

  return (
    <>
      <div className="flex flex-wrap lg:pl-16 lg:px-0 px-5 lg:my-20 mt-24 pb-24">
        {renderMessage}
      </div>
    </>
  );
};

const mapStateToProps = (state: CPFromRedux) => ({
  displayedMessages: state.store.messages.displayedMessages,
});

export default connect(mapStateToProps)(ChatBox);
