import React from "react";
import ChatHeader from "@/components/Messages/ChatArea/ChatHeader";
import ChatBox from "@/components/Messages/ChatArea/ChatBox";
import ChatFooter from "@/components/Messages/ChatArea/ChatFooter";

const ChatArea: React.FC = () => {
  return (
    <>
      <div
        id="chat-box"
        className="chatBox-layout max-h-screen overflow-x-hidden overflow-y-auto"
      >
        <ChatHeader />
        <ChatBox />
        <ChatFooter />
      </div>
    </>
  );
};

export default ChatArea;
