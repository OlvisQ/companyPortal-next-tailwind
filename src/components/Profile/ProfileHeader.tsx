import React from "react";
import Button from "@/components/Global/Button";

const ProfileHeader: React.FC = () => {
  return (
    <>
      <div className="w-full h-90 profile-header-bg mt-18 flex mb-2"></div>
      <div className="container mx-auto self-end px-4 -mt-20">
        <div className="lg:w-1/2 mx-auto flex items-center justify-between">
          <div className="w-1/2">
            <div className="w-36 h-36 relative bg-white rounded-full flex items-center justify-center border border-secondary-elements">
              <img src="/img/companies/pixel-&-graph-large.svg" alt="" />
              <button className="bg-transparent outline-none focus:outline-none absolute bottom-5 right-0">
                <img src="/img/icons/plus-icon-fill.svg" alt="" />
              </button>
            </div>
          </div>
          <div className="w-auto">
            <Button text="Edit Profile" classNames="px-7" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileHeader;
