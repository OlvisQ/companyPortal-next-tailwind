import React from "react";
import GetHiredCard from "@/components/Global/GetHiredCard";

const InviteMemberCard: React.FC = () => {
  return (
    <>
      <GetHiredCard classNames="flex items-center justify-center">
        <button className="flex w-full justify-center cursor-pointer">
          <div className="w-full">
            <img
              src="/img/icons/user-invite-icon.svg"
              alt=""
              className="mx-auto mb-3"
            />
            <p className="text-sm text-secondary">Invite new Member to Team</p>
          </div>
        </button>
      </GetHiredCard>
    </>
  );
};

export default InviteMemberCard;
