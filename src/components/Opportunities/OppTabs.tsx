import React, { useState } from "react";
import cn from "classnames";
import ActiveOpportunities from "@/components/Opportunities/ActiveOpportunities";
import DraftOpportunities from "@/components/Opportunities/DraftOpportunities";
import ClosedOpportunities from "@/components/Opportunities/ClosedOpportunites";

const OppTabs: React.FC = () => {
  let [tabs, setTabs] = useState<number>(1);

  const renderTabDetails = () => {
    switch (tabs) {
      case 1:
        return (
          <>
            <ActiveOpportunities />
          </>
        );

      case 2:
        return (
          <>
            <DraftOpportunities />
          </>
        );

      case 3:
        return (
          <>
            <ClosedOpportunities />
          </>
        );
    }
  };

  return (
    <>
      <div className="flex border-b border-secondary-elements">
        <button
          className={cn(
            "bg-transparent outline-none focus:outline-none lg:mr-10 lg:w-auto w-full lg:block flex justify-center lg:py-4 py-6",
            {
              "active-tab text-titles": tabs === 1,
              "text-secondary": tabs > 1,
            }
          )}
          onClick={() => setTabs(1)}
        >
          Active
        </button>
        <button
          className={cn(
            "bg-transparent outline-none focus:outline-none lg:mr-10 lg:w-auto w-full lg:block flex justify-center lg:py-4 py-6",
            {
              "active-tab text-titles": tabs === 2,
              "text-secondary": tabs > 2 || tabs < 2,
            }
          )}
          onClick={() => setTabs(2)}
        >
          Draft
        </button>
        <button
          className={cn(
            "bg-transparent outline-none focus:outline-none lg:mr-10 lg:w-auto w-full lg:block flex justify-center lg:py-4 py-6",
            {
              "active-tab text-titles": tabs >= 3,
              "text-secondary": tabs < 3,
            }
          )}
          onClick={() => setTabs(3)}
        >
          Closed
        </button>
      </div>
      <div className="w-full mt-8">{renderTabDetails()}</div>
    </>
  );
};

export default OppTabs;
