import React from "react";
import Checkbox from "@/components/Global/Checkbox";
import cn from "classnames";

type Props = {
  isOppSelected: boolean;
  oppName: string;
  applicantsApplied: string | number;
  fieldOfOccupations: string;
  oppDuration: string;
  oppDateCreated: string;
  oppStatus: string;
  checkToggle?: () => void;
};

const OpportunitiesRow: React.FC<Props> = ({
  isOppSelected,
  oppName,
  applicantsApplied,
  fieldOfOccupations,
  oppDuration,
  oppDateCreated,
  oppStatus,
  checkToggle,
}) => {
  const renderFieldOfOccupation = () => {
    if (fieldOfOccupations !== "") {
      return (
        <>
          <div className="lg:w-auto w-full lg:my-0 my-5">
            <div className="flex items-center py-3 lg:px-5 px-2 rounded-xl bg-secondary-light3">
              <div className="w-5 h-5 rounded-full bg-secondary-green -mt-px"></div>
              <p className="text-titles lg:text-sm text-xs ml-3 truncate">
                {fieldOfOccupations}
              </p>
            </div>
          </div>
        </>
      );
    } else null;
  };

  const renderOppStatus = () => {
    if (oppStatus !== "") {
      return (
        <>
          <div className="flex items-center lg:pr-6 lg:w-auto w-full justify-center py-4 lg:border-0 border-t border-secondary-elements lg:mt-0 mt-5 lg:mb-0 -mb-5">
            <div
              className={cn("h-5 w-5 rounded-full", {
                "bg-secondary-green": oppStatus === "Active",
                "bg-secondary-yellow": oppStatus === "Draft",
                "bg-secondary-icon": oppStatus === "Closed",
              })}
            ></div>
            <p className="text-secondary ml-2">{oppStatus}</p>
          </div>
        </>
      );
    } else null;
  };

  return (
    <>
      <div className="flex lg:flex-nowrap flex-wrap items-center lg:h-20 bg-white rounded-xl shadow-main lg:px-6 px-4 justify-around lg:py-0 py-6">
        <div className="lg:block hidden w-12">
          <Checkbox
            borderColor="border-secondary-elements"
            onCheck={checkToggle}
            isChecked={isOppSelected}
          />
        </div>
        <div className="lg:w-60 w-full lg:mb-0 mb-5 lg:pl-2 xl:pl-0 pl-0">
          <p className="text-primary xl:text-base lg:text-xs text-1xl">
            {oppName}
          </p>
        </div>

        <div className="lg:w-36 w-full flex items-end">
          <p className="text-titles text-1xl -mb-1">{applicantsApplied}</p>
          <p className="text-secondary text-xss uppercase lg:hidden block ml-2">
            applicants applied
          </p>
        </div>

        {renderFieldOfOccupation()}

        <div className="lg:w-56 xl:ml-16 lg:ml-4 ml-0 w-1/2">
          <p className="text-titles text-sm truncate">{oppDuration}</p>
        </div>
        <div className="lg:w-56 w-1/2 xl:ml-0 lg:ml-4 ml-0 lg:text-left text-right">
          <p className="font-sans text-secondary text-sm">{oppDateCreated}</p>
        </div>

        {renderOppStatus()}
      </div>
    </>
  );
};

export default OpportunitiesRow;
