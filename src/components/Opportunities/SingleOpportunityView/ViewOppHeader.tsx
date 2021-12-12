import React from "react";

type Props = {
  companyImgUrl: string;
  oppTitle: string;
  companyName: string;
  oppRemainingTime: string;
  fieldOfOccupation: string;
};

const ViewOppHeader: React.FC<Props> = ({
  companyImgUrl,
  oppTitle,
  companyName,
  oppRemainingTime,
  fieldOfOccupation,
}) => {
  return (
    <>
      <div className="flex flex-wrap items-center pb-10 mb-10 border-b border-secondary-elements">
        <div className="lg:w-auto w-full lg:block flex justify-center lg:mt-0 md:-mt-24 -mt-28">
          <div className="w-36 h-36 rounded-full border border-secondary-elements flex items-center justify-center bg-white">
            <img src={companyImgUrl} alt="" />
          </div>
        </div>
        <div className="lg:ml-8 lg:w-auto w-full lg:block flex flex-wrap items-start">
          <p className="text-titles text-3xl lg:w-auto w-full lg:mt-0 mt-5">{oppTitle}</p>
          <div className="flex lg:flex-nowrap flex-wrap items-center mt-4 mb-6">
            <p className="lg:w-auto w-full text-titles mr-4 lg:mb-0 mb-4">{companyName}</p>
            <p className="lg:w-auto w-full text-secondary font-sans">
              {oppRemainingTime}
            </p>
          </div>
          <div className="flex items-center bg-secondary-light3 rounded-xl p-4">
            <div className="w-5 h-5 rounded-full bg-secondary-green -mt-px"></div>
            <p className="text-titles ml-4 lg:text-base text-xs">{fieldOfOccupation}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewOppHeader;
