import React from "react";
import { connect } from "react-redux";

interface CPFromRedux {
  store: {
    userProfilePic: string;
    firstName: string;
    lastName: string;
  };
}

type Props = {
  profilePic: string;
  userFirstName: string;
  userLastName: string;
  onCrossClick?: () => void;
};

const SidebarHeader: React.FC<Props> = ({
  profilePic,
  userFirstName,
  userLastName,
  onCrossClick,
}) => {
  return (
    <>
      <div className="flex flex-wrap px-5 pt-5">
        <div className="flex items-center w-full justify-between pb-4">
          <div className="flex items-center">
            <img src={profilePic} alt="" />
            <span className="text-secondary text-sm ml-3">
              {userFirstName} {userLastName.charAt(0)}.
            </span>
          </div>
          <button
            className="bg-transparent outline-none focus:outline-none"
            onClick={onCrossClick}
          >
            <img src="/img/icons/cross-icon.svg" alt="" />
          </button>
        </div>
        <div className="h-px bg-secondary-elements w-full"></div>
      </div>
    </>
  );
};

const mapStateToProps = (state: CPFromRedux) => ({
  profilePic: state.store.userProfilePic,
  userFirstName: state.store.firstName,
  userLastName: state.store.lastName,
});

export default connect(mapStateToProps)(SidebarHeader);
