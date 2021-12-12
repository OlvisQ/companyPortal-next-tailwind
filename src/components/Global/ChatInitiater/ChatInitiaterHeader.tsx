import React from "react";
import { connect } from "react-redux";

interface HeaderInterface {
  username: string;
  roll: string;
  userPic: string;
}

interface CPFromRedux {
  store: {
    chatInitiaterHeaderInfo: HeaderInterface;
  };
}

type Props = {
  onCrossClick?: () => void;
  onMinusClick?: () => void;
  initiaterName?: string;
  initiaterRoll?: string;
  initiaterPic?: string;
};

const ChatInitiaterHeader: React.FC<Props> = ({
  onCrossClick,
  onMinusClick,
  initiaterName,
  initiaterRoll,
  initiaterPic,
}) => {
  return (
    <div className="w-full flex items-center self-start border-b border-secondary-elements lg:mx-5 lg:px-0 px-5 py-6 lg:static relative lg:z-0 z-50 lg:bg-transparent bg-white">
      <div className="lg:w-1/2 w-ful flex items-center">
        <div className="lg:w-1/3 w-11 h-11 lg:h-auto bg-secondary-elements lg:p-1 rounded-full mr-3">
          <img
            src={initiaterPic}
            alt=""
          />
        </div>
        <div className="w-3/4 pl-1">
          <h1 className="lg:text-3xl text-titles">{initiaterName}</h1>
          <p className="lg:text-xs text-xss text-secondary uppercase">
            {initiaterRoll}
          </p>
        </div>
      </div>
      <div className="lg:w-1/2 flex justify-end ml-auto">
        <button
          className="bg-transparent outline-none focus:outline-none"
          onClick={onMinusClick}
        >
          <img src="/img/icons/minimize-icon.svg" alt="" />
        </button>
        <button
          className="bg-transparent outline-none focus:outline-none ml-5"
          onClick={onCrossClick}
        >
          <img src="/img/icons/cross-circle-icon.svg" alt="" />
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state: CPFromRedux) => ({
  initiaterName: state.store.chatInitiaterHeaderInfo.username,
  initiaterRoll: state.store.chatInitiaterHeaderInfo.roll,
  initiaterPic: state.store.chatInitiaterHeaderInfo.userPic,
});

export default connect(mapStateToProps)(ChatInitiaterHeader);
