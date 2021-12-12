import React from "react";
import ReviewHeader from "@/components/CreateOpportunity/OpportunityStepsFlow/OpportunityReview/ReviewHeader";
import ReviewInfo from "@/components/CreateOpportunity/OpportunityStepsFlow/OpportunityReview/ReviewInfo";
import ReviewLocationAndSalary from "@/components/CreateOpportunity/OpportunityStepsFlow/OpportunityReview/ReviewLocationAndSalary";
import ReviewDesc from "@/components/CreateOpportunity/OpportunityStepsFlow/OpportunityReview/ReviewDesc";
import ReviewTodos from "@/components/CreateOpportunity/OpportunityStepsFlow/OpportunityReview/ReviewTodos";
import ReviewRequiredSkills from "@/components/CreateOpportunity/OpportunityStepsFlow/OpportunityReview/ReviewRequiredSkills";
import ReviewBonusSkills from "@/components/CreateOpportunity/OpportunityStepsFlow/OpportunityReview/ReviewBonusSkills";
import ReviewLinks from "@/components/CreateOpportunity/OpportunityStepsFlow/OpportunityReview/ReviewLinks";

const OpportunityReview: React.FC = () => {
  return (
    <>
      <div className="flex flex-wrap w-full bg-white rounded-xl border border-secondary-elements md:px-6 px-4">
        <ReviewHeader />
        <ReviewInfo />
        <ReviewLocationAndSalary />
        <ReviewDesc />
        <ReviewTodos />
        <ReviewRequiredSkills />
        <ReviewBonusSkills />
        <ReviewLinks />
      </div>
    </>
  );
};

export default OpportunityReview;
