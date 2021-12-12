import React from "react";
import Layout from "@/components/layouts/Layout";
import ViewOpportunityBoard from "@/components/Opportunities/SingleOpportunityView/ViewOpportunityBoard";
import OppOverviewCard from "@/components/Opportunities/SingleOpportunityView/OppOverviewCard";
import ChatInitiater from "@/components/Global/ChatInitiater";

const SingleOpportunityView: React.FC = () => {
  return (
    <Layout title="Single Opportunity View | GetHired Company">
      <div className="pt-24 pb-16 min-h-screen bg-secondary-light">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-around items-start">
            <div className="lg:w-3/5 w-full lg:order-first order-last bg-white lg:p-8 py-8 px-4 rounded-xl border border-secondary-elements lg:mt-0 mt-20">
              <ViewOpportunityBoard />
            </div>
            <div className="lg:w-1/4 w-full lg:p-0 p-5">
              <OppOverviewCard />
              <div className="mt-12 lg:block hidden">
                <ChatInitiater headerWidth="w-full pb-6" imgWidth="w-1/3" initiaterInfoWidth="w-2/3 pl-6" hasDivider/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SingleOpportunityView;
