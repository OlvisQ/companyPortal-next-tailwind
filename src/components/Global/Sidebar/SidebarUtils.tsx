import React from "react";

const SidebarUtils: React.FC = () => {
  return (
    <>
      <div className="flex flex-wrap px-5 pt-5">
        <div className="flex flex-wrap w-full space-y-4 pb-6">
          <div className="w-full">
            <button className="outline-none focus:outline-none bg-transparent text-sm text-titles">
              Account
            </button>
          </div>
          <div className="w-full">
            <button className="outline-none focus:outline-none bg-transparent text-sm text-titles">
              + Invite a member
            </button>
          </div>
          <div className="w-full">
            <button className="outline-none focus:outline-none bg-transparent text-sm text-titles">
              Contact Support
            </button>
          </div>
        </div>
        <div className="w-full h-px bg-secondary-elements"></div>
      </div>
    </>
  );
};

export default SidebarUtils;
