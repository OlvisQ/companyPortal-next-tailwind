import React from "react";
import GetHiredCard from "@/components/Global/GetHiredCard";

const CreateOpportunityCard: React.FC = () => {
  return (
    <>
      <GetHiredCard classNames="flex items-center justify-center">
        <button className="flex w-full justify-center cursor-pointer">
          <div className="w-full">
            <img
              src="/img/icons/create-opportunity-icon.svg"
              alt=""
              className="mx-auto mb-3"
            />
            <p className="text-sm text-secondary">+ Create new Opportunity</p>
          </div>
        </button>
      </GetHiredCard>
    </>
  );
};

export default CreateOpportunityCard;
