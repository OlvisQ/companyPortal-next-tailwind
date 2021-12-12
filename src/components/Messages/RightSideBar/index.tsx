import React from "react";
import { connect } from "react-redux";
import { updateMsgRightbar } from "@/redux/actions/messagesActions";
import Button from "@/components/Global/Button";

interface chatHeaderDataStructure {
  userImg: string;
  userName: string;
  jobTitle: string;
  location: string;
  jobMatch: string;
}

interface CPFromRedux {
  store: {
    messages: {
      chatHeaderData: chatHeaderDataStructure;
    };
  };
}

type Props = {
  chatHeaderData: chatHeaderDataStructure;
  // chatHeaderData: ChatHeaderStructure;
  updateRightbar: (arg: boolean) => void;
};

const RightSideBar: React.FC<Props> = ({ chatHeaderData, updateRightbar }) => {
  const closeRightBar = () => {
    updateRightbar(false);
  };

  return (
    <>
      <div className="lg:hidden flex py-3 md:pl-3 md:pr-7 fixed items-center z-50 w-full -mt-8 border-b bg-white">
        <button
          className="bg-transparent outline-none focus:outline-none ml-4 mr-4 p lg:hidden flex text-secondary"
          onClick={closeRightBar}
        >
          <i className="fas fa-chevron-left text-secondary "></i>
        </button>
        <div className="h-14 w-14 flex items-center justify-center rounded-full mr-4 border border-secondary-elements">
          <img src={chatHeaderData.userImg} alt="" className="h-14 w-14 rounded-full"/>
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
          disabled={true}
        >
          <svg
            width="18"
            height="4"
            viewBox="0 0 18 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="16"
              cy="2"
              r="2"
              transform="rotate(90 16 2)"
              fill="#C8CFE2"
            />
            <circle
              cx="9"
              cy="2"
              r="2"
              transform="rotate(90 9 2)"
              fill="#C8CFE2"
            />
            <circle
              cx="2"
              cy="2"
              r="2"
              transform="rotate(90 2 2)"
              fill="#C8CFE2"
            />
          </svg>
        </button>
      </div>
      <div className="inbox-layout max-h-screen overflow-y-auto overflow-hidden pb-4 bg-white lg:pt-6 pt-20">
        <div className="h-36 w-36 rounded-full mx-auto avatar-border bg-white flex items-center justify-center mb-8">
          <img src={chatHeaderData.userImg} alt="" className="h-36 w-36 rounded-full" />
        </div>
        <div className="pr-4">
          <p className="text-titles text-1xl text-center mb-1">
            {chatHeaderData.userName}
          </p>
          <p className="text-xs text-secondary text-center">
            {chatHeaderData.location}
          </p>
          <div className="w-full flex">
            <div className="flex mx-auto">
              <p
                className="text-titles text-xs px-4 py-3 rounded-xl flex items-center ml-5 my-5"
                style={{ background: "#EAFCF7" }}
              >
                <span
                  className="h-5 w-5 rounded-full mr-3 block"
                  style={{ background: "#31DFAD" }}
                ></span>
                <span className="block truncate">
                  Web, Mobile & Software Development
                </span>
              </p>
            </div>
          </div>
          <p className="text-titles text-3xl text-center">
            {chatHeaderData.jobMatch}
          </p>
          <p className="text-xs text-primary text-center my-4">
            {chatHeaderData.jobTitle}
          </p>
        </div>
        <div className="h-px w-full bg-secondary-elements mx-auto ml-2"></div>
        <div className="mb-10 px-4">
          <h1 className="text-1xl text-titles ml-2 my-4">Required Skills</h1>
          <div className="flex flex-wrap">
            <div className="pr-2">
              <h1
                className="text-sm py-3 px-4 rounded-xl truncate"
                style={{ background: "#edf2fd" }}
              >
                HTML (5 years)
              </h1>
            </div>
            <div className="pl-2">
              <h1
                className="text-sm py-3 px-6 rounded-xl ml-auto truncate"
                style={{ background: "#FFF8E7" }}
              >
                CSS (5 years)
              </h1>
            </div>
            <div className="my-4 w-full">
              <div className="flex">
                <h1
                  className="text-sm py-3 px-6 rounded-xl"
                  style={{ background: "#FFF0EC" }}
                >
                  Javascript: Angular (3 years)
                </h1>
              </div>
            </div>
            <div className="w-full">
              <div className="flex">
                <h1
                  className="text-sm py-3 px-6 rounded-xl"
                  style={{ background: "#EAFCF7" }}
                >
                  Javascript: React (3 years)
                </h1>
              </div>
            </div>
            <div className="my-4 w-full">
              <div className="flex">
                <h1
                  className="text-sm py-3 px-6 rounded-xl"
                  style={{ background: "#EFEDFE" }}
                >
                  Javascript: Node.js (3 years)
                </h1>
              </div>
            </div>
          </div>
          <p className="text-secondary -mb-3 mt-3">
            <span className="font-sans">You have match of</span> 6 Skills{" "}
            <span className="font-sans">out of</span> 8.{" "}
            <span className="font-sans">Which are</span> HTML, CSS, Javascript:
            Angular, Javascript: React, Javascript: Node.js{" "}
            <span className="font-sans">and</span> PHP.
          </p>
        </div>
        <div className="h-px w-full bg-secondary-elements mx-auto ml-2"></div>
        <div className="mb-10 px-4">
          <h1 className="text-1xl text-titles ml-2 my-4">Bonus Skills</h1>
          <div className="flex flex-wrap">
            <div className="pr-2">
              <h1
                className="text-sm py-3 px-4 rounded-xl truncate"
                style={{ background: "#edf2fd" }}
              >
                HTML (5 years)
              </h1>
            </div>
            <div className="pl-2">
              <h1
                className="text-sm py-3 px-6 rounded-xl ml-auto truncate"
                style={{ background: "#FFF8E7" }}
              >
                CSS (5 years)
              </h1>
            </div>
            <div className="my-4 w-full">
              <div className="flex">
                <h1
                  className="text-sm py-3 px-6 rounded-xl"
                  style={{ background: "#FFF0EC" }}
                >
                  Javascript: Angular (3 years)
                </h1>
              </div>
            </div>
            <div className="w-full">
              <div className="flex">
                <h1
                  className="text-sm py-3 px-6 rounded-xl"
                  style={{ background: "#EAFCF7" }}
                >
                  Javascript: React (3 years)
                </h1>
              </div>
            </div>
            <div className="my-4 w-full">
              <div className="flex">
                <h1
                  className="text-sm py-3 px-6 rounded-xl"
                  style={{ background: "#EFEDFE" }}
                >
                  Javascript: Node.js (3 years)
                </h1>
              </div>
            </div>
          </div>
          <p className="text-secondary -mb-3 mt-3">
            <span className="font-sans">You have match of</span> 6 Skills{" "}
            <span className="font-sans">out of</span> 8.{" "}
            <span className="font-sans">Which are</span> HTML, CSS, Javascript:
            Angular, Javascript: React, Javascript: Node.js{" "}
            <span className="font-sans">and</span> PHP.
          </p>
        </div>
        <div className="h-px w-full bg-secondary-elements mx-auto ml-2"></div>
        <div className="px-2 -mt-4">
          <Button onClick={closeRightBar} text="Return to conversation" />
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state: CPFromRedux) => ({
  chatHeaderData: state.store.messages.chatHeaderData,
  // chatHeaderData: state.store.messages.chatHeaderData
});

const mapDispatchToProps = {
  updateRightbar: updateMsgRightbar,
};

export default connect(mapStateToProps, mapDispatchToProps)(RightSideBar);
