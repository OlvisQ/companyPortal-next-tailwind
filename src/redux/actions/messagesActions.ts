import * as t from "@/redux/types";

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

export const updateClickedMessage = (message: MessageStructure) => ({
  type: t.UPDATE_CLICKED_MESSAGE,
  payload: message,
});

export const updateChatBox = (chat: [InnerMessages]) => ({
  type: t.UPDATE_CHATBOX,
  payload: chat,
});

export const updateChatHeader = (chatHeader: object) => ({
  type: t.UPDATE_CHAT_HEADER,
  payload: chatHeader,
});

export const updateMsgbar = (isOpen: boolean) => ({
  type: t.UPDATE_CHAT_BAR,
  payload: isOpen,
});

export const updateMsgRightbar = (isOpen: boolean) => ({
  type: t.UPDATE_MSG_RIGHT_BAR,
  payload: isOpen,
});

export const updateMsgToSend = (msg: string) => ({
  type: t.UPDATE_SENT_MSG,
  payload: msg,
});

interface MessageToSendStructure {
  id: number;
  profileImg: string;
  type: string;
  msg: string;
}

export const updateMsgView = (msg: MessageToSendStructure) => ({
  type: t.UPDATE_MSG_VIEW,
  payload: msg,
});
