import React from "react";
import CreateOpportunityLayout from "@/components/layouts/CreateOpportunityLayout";
import CreateOpportunity from "@/components/CreateOpportunity";

const CreateOpportunityPage: React.FC = () => {
  return (
    <CreateOpportunityLayout title="Create Opportunity | GetHired">
      <CreateOpportunity />
    </CreateOpportunityLayout>
  );
};

export default CreateOpportunityPage;
