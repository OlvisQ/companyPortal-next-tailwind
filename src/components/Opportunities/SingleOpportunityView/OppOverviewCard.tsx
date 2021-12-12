import React from "react";
import Button from "@/components/Global/Button";

const OppOverviewCard: React.FC = () => {
  return (
    <>
      <div className="p-6 bg-white rounded-xl shadow-main">
        <div className="flex flex-wrap pb-6 border-b border-secondary-elements">
          <div className="w-full mb-8">
            <h1 className="text-titles text-1xl">Opportunity Overview</h1>
          </div>
          <div className="w-2/3 mb-8">
            <h1 className="text-3xl text-titles">12</h1>
            <p className="text-secondary text-sm">Applied Talent</p>
          </div>
          <div className="w-1/3 mb-8">
            <h1 className="text-3xl text-titles">4</h1>
            <p className="text-secondary text-sm">Shortlisted</p>
          </div>
          <div className="w-2/3 mb-8">
            <h1 className="text-3xl text-titles">6</h1>
            <p className="text-secondary text-sm">Invited Talents</p>
          </div>
          <div className="w-1/3 mb-8">
            <h1 className="text-3xl text-titles">2</h1>
            <p className="text-secondary text-sm">Rejected</p>
          </div>
          <div className="w-full">
            <h1 className="text-3xl text-titles">42</h1>
            <p className="text-secondary text-sm">
              Opportunity viewed by Talents
            </p>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full mt-6 mb-3">
            <h1 className="text-1xl text-titles">30 days</h1>
            <p className="text-1xl text-titles font-sans">
              (ends on 14/08/2019)
            </p>
          </div>
          <div className="w-full mt-5 -mb-1">
            <div className="px-4 h-52px bg-secondary-light2 flex items-center justify-between rounded-lg cursor-pointer">
              <div className="flex">
                <div className="h-5 w-5 rounded-full bg-secondary-green"></div>
                <p className="text-secondary text-sm ml-3">Active</p>
              </div>
              <div>
                <img
                  src="/img/icons/chevron-icon.svg"
                  alt=""
                  className="transform -rotate-90 w-3 h-3"
                />
              </div>
            </div>
          </div>
          <div className="w-full -mb-10">
            <Button text="View Applied Talents" />
          </div>
        </div>
      </div>
    </>
  );
};

export default OppOverviewCard;
