import React from "react";
import CreateOpportunityHeader from "@/components/CreateOpportunity/CreateOpportunityHeader";
import CreateOpportunitySidebar from "@/components/CreateOpportunity/CreateOpportunitySidebar";
import CreateOpportunityBody from "@/components/CreateOpportunity/CreateOpportunityBody";
import CreateOpportunityFooter from "@/components/CreateOpportunity/CreateOpportunityFooter";

const CreateOpportunity: React.FC = () => {
  return (
    <>
      <div className="w-full flex min-h-screen bg-secondary-light">
        <CreateOpportunityHeader />
        <CreateOpportunitySidebar />
        <CreateOpportunityBody />
        <CreateOpportunityFooter />
      </div>
    </>
  );
};

export default CreateOpportunity;
