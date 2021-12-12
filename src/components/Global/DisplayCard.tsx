import React from "react";
import GetHiredCard from "@/components/Global/GetHiredCard";

type Props = {
  cardCompany: string;
  cardTitle: string;
  cardRemainingTime: string;
  cardJobTitle: string;
  cardJobMatch: string;
  cardHighlightSkill: string;
};

const DisplayCard: React.FC<Props> = ({
  cardCompany,
  cardTitle,
  cardRemainingTime,
  cardJobTitle,
  cardJobMatch,
  cardHighlightSkill,
}) => {
  return (
    <>
      <GetHiredCard size="small" classNames="p-4">
        <div className="flex flex-wrap w-full">
          <div className="w-full">
            <button className="outline-none focus:outline-none w-full flex justify-end">
              <img src="/img/icons/toggle-icon.svg" alt="" />
            </button>
          </div>
          <div className="w-full flex items-center">
            <div className="h-1xl md:w-52-width flex items-center justify-center rounded-full border border-secondary-elements">
              <img src={cardCompany} alt="" />
            </div>
            <h1 className="text-titles ml-4 mr-2">{cardTitle}</h1>
            <p className="text-xs text-secondary">{cardRemainingTime}</p>
          </div>
          <div className="w-full mt-4">
            <h2 className="text-titles text-1xl">{cardJobTitle}</h2>
          </div>
          <div className="w-full my-4">
            <p className="text-titles">{cardJobMatch}</p>
          </div>
          <div className="w-full flex items-center mb-2 bg-secondary-light3 p-3 rounded-xl">
            <div className="w-5 h-5 rounded-full bg-secondary-green mr-3"></div>
            <h2 className="text-titles text-sm truncate">
              {cardHighlightSkill}
            </h2>
          </div>
        </div>
      </GetHiredCard>
    </>
  );
};

export default DisplayCard;
