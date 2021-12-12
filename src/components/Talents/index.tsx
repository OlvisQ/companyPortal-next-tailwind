import React from "react";
import SingleOppTabs from "@/components/Opportunities/SingleOpportunityDetails/SingleOppTabs";

const Talents: React.FC = () => {
  return (
    <>
      <div className="min-h-screen bg-secondary-light py-28 md:px-6 px-4">
        <div className="flex flex-wrap">
          <div className="w-full mb-8">
            <h1 className="text-3xl">Overview of Talents</h1>
          </div>
          <div className="w-full">
            <SingleOppTabs
              hasTotalAmount={false}
              tabOne="Latest"
              appliedRoute="/talents/talent-review"
              shortlistedRoute="/talents/"
              invitedRoute="/talents/talent-invited"
              acceptedRoute="/talents/talent-accepted"
              rejectedRoute="/talents/talent-rejected"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Talents;
