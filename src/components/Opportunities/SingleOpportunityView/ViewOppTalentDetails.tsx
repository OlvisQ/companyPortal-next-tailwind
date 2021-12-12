import React from "react";

type Props = {
  talentLocation: string[];
  talentWorkTimeFrom: string;
  talentWorkTimeTo: string;
};

const ViewOppTalentDetails: React.FC<Props> = ({
  talentLocation,
  talentWorkTimeFrom,
  talentWorkTimeTo,
}) => {
  const renderTalentLocation = talentLocation.map(
    (location: string, index: number) => {
      return (
        <React.Fragment key={index}>
          <h1 className="text-titles text-1xl">{location}</h1>
        </React.Fragment>
      );
    }
  );

  return (
    <>
      <div className="flex flex-wrap items-start my-10 pb-10 border-secondary-elements border-b">
        <div className="lg:w-1/2 w-full lg:mb-0 mb-10">
          <p className="text-xss text-secondary uppercase mb-3">
            talent location
          </p>
          {renderTalentLocation}
        </div>
        <div className="lg:w-1/2 w-full">
          <p className="text-xss text-secondary uppercase mb-3">
            talent work hour timezone
          </p>
          <h1 className="text-titles text-1xl">
            <span className="font-sans">From </span>
            {talentWorkTimeFrom}
            <span className="font-sans"> to </span>
            {talentWorkTimeTo}
          </h1>
        </div>
      </div>
    </>
  );
};

export default ViewOppTalentDetails;
