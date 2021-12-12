import React from "react";
import Layout from "@/components/layouts/Layout";
import SingleOppHeader from "@/components/Opportunities/SingleOpportunityDetails/SingleOppHeader";
import SingleOppTabs from "@/components/Opportunities/SingleOpportunityDetails/SingleOppTabs";

const SingleOpportunityDetails: React.FC = () => {
  return (
    <>
      <Layout title="Single Opportunity Details | GetHired Company">
        <div className="pt-32 pb-14 min-h-screen bg-secondary-light">
          <div className="px-6">
          <SingleOppHeader />
          <SingleOppTabs />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default SingleOpportunityDetails;
