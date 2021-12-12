import React, { useState } from "react";
import cn from "classnames";
import MembersTab from "@/components/Team/MembersTab";
import AdminMembers from "@/components/Team/AdminMembers";
import SuccessManager from "@/components/Team/SuccessManager";

const TeamTabs: React.FC = () => {
  let [tabs, setTabs] = useState<number>(1);

  const renderTabDetails = () => {
    switch (tabs) {
      case 1:
        return (
          <>
            <MembersTab />
          </>
        );

      case 2:
        return (
          <>
            <AdminMembers />
          </>
        );

      case 3:
        return (
          <>
            <SuccessManager />
          </>
        );
    }
  };

  return (
    <>
      <div className="flex border-b border-secondary-elements">
        <button
          className={cn(
            "bg-transparent outline-none focus:outline-none lg:mr-10 lg:w-auto w-full lg:block flex justify-center lg:py-4 py-3 md:text-base text-sm",
            {
              "active-tab text-titles": tabs === 1,
              "text-secondary": tabs > 1,
            }
          )}
          onClick={() => setTabs(1)}
        >
          Members
        </button>
        <button
          className={cn(
            "bg-transparent outline-none focus:outline-none lg:mr-10 lg:w-auto w-full lg:block flex justify-center lg:py-4 py-3 md:text-base text-sm",
            {
              "active-tab text-titles": tabs === 2,
              "text-secondary": tabs > 2 || tabs < 2,
            }
          )}
          onClick={() => setTabs(2)}
        >
          Admin
        </button>
        <button
          className={cn(
            "bg-transparent outline-none focus:outline-none lg:mr-10 lg:w-auto w-full lg:block flex justify-center lg:py-4 py-3 md:text-base text-sm",
            {
              "active-tab text-titles": tabs >= 3,
              "text-secondary": tabs < 3,
            }
          )}
          onClick={() => setTabs(3)}
        >
          <span className="md:inline hidden">Gethired - Success Manager</span>
          <span className="md:hidden inline">Success Manager</span>
        </button>
      </div>
      <div className="w-full mt-8">{renderTabDetails()}</div>
    </>
  );
};

export default TeamTabs;
