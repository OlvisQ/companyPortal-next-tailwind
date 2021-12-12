import React from "react";
import Layout from "@/components/layouts/Layout";
import TalentStatus from "@/components/Talents/TalentStatus";
import SelectionDropdown from "@/components/Global/SelectionDropdown";
import ChatInitiater from "@/components/Global/ChatInitiater";

const TalentAcceptedPage: React.FC = () => {
  return (
    <Layout title="Talent Accepted | GetHired">
      <section className="min-h-screen relative">
        <div className="flex container mx-auto py-28 items-start lg:space-x-20 lg:px-10 md:px-6 px-4">
          <div className="lg:w-2/3 w-full">
            <TalentStatus
              hasImg={true}
              imgUrl="/img/user.png"
              firstName="Jim"
              lastName="Halpert"
            />
          </div>
          <div className="lg:flex hidden w-1/3 flex-wrap">
            <div className="w-full shadow-main rounded-xl flex flex-wrap px-6 py-4 mb-6">
              <div className="w-full">
                <h1 className="text-titles text-1xl">Talent status</h1>
              </div>
              <div className="w-full mt-4 mb-6">
                <p className="font-sans text-secondary text-sm">
                  You have{" "}
                  <span className="font-gilroy">You have 7 days remaining</span>{" "}
                  to decide
                </p>
              </div>
              <div className="w-full">
                <SelectionDropdown selectedItem="Accepted" />
              </div>
            </div>
            <div className="w-full">
              <ChatInitiater headerWidth="w-full" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TalentAcceptedPage;
