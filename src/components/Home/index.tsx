import React from "react";
import Layout from "@/components/layouts/Layout";
import LatestTalentsCard from "@/components/Home/HomeComponents/LatestTalentsCard";
import CreateOpportunityCard from "@/components/Home/HomeComponents/CreateOpportunityCard";
import UnreadMessagesCard from "@/components/Home/HomeComponents/UnreadMessagesCard";
import InviteMemberCard from "@/components/Home/HomeComponents/InviteMemberCard";
import InfoCard from "@/components/Home/HomeComponents/InfoCard";
import ChatInitiater from "@/components/Global/ChatInitiater/index";

const Home: React.FC = () => {
  return (
    <Layout title="Home | Gethired Company">
      <section className="min-h-screen bg-secondary-light pt-24 px-6 lg:pb-0 pb-10">
        <div className="flex w-full flex-wrap items-start">
          <div className="lg:w-1/3 w-full lg:pr-3">
            <LatestTalentsCard />
          </div>
          <div className="lg:w-1/3 w-full lg:my-0 my-5 lg:px-3">
            <UnreadMessagesCard />
          </div>
          <div className="lg:w-1/3 w-full lg:pl-3 flex flex-wrap">
            <div className="w-1/2 pr-3 mb-5">
              <InfoCard
                cardValue="1"
                cardTitle="Active Opportunity"
                cardSubtitle="24 days remaining"
                cardSubtitleBreak="(Expires: 12 Oct, 2019)"
                classNames="md:p-6 p-0"
              />
            </div>
            <div className="w-1/2 pl-3 lg:mb-0 mb-5">
              <InfoCard
                cardValue="82%"
                cardTitle="Average % of Match"
                cardSubtitle="This is your match"
                cardSubtitleBreak="percentage per opportunity"
                classNames="md:p-6 p-0"
              />
            </div>
            <div className="w-1/2 pr-3 lg:mb-0 mb-5">
              <InfoCard
                cardValue="1"
                cardTitle="Latest Invited Talents"
                cardSubtitle="On average you invite 1-2"
                cardSubtitleBreak="Talent per Opportunity"
                classNames="md:p-6 p-0"
              />
            </div>
            <div className="w-1/2 pl-3 lg:mb-0 mb-5">
              <InfoCard
                cardValue="3"
                cardTitle="Members in Team"
                cardSubtitle="You have 3 Members"
                cardSubtitleBreak="in your Team so far"
                classNames="md:p-6 p-0"
              />
            </div>
          </div>
          <div className="lg:w-1/3 w-full lg:pr-3">
            <CreateOpportunityCard />
          </div>
          <div className="lg:w-1/3 w-full lg:my-0 my-5 lg:px-3">
            <InviteMemberCard />
          </div>
          <div className="lg:w-1/3 w-full lg:pl-3 flex flex-wrap lg:mt-46">
            <ChatInitiater classNames="pb-4 pt-2" />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
