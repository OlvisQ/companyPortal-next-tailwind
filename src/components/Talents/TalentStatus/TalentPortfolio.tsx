import React from "react";

type Props = {
  portfolioLink: string;
};

const TalentPortfolio: React.FC<Props> = ({ portfolioLink }) => {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full mb-3">
          <p className="text-xss text-secondary uppercase">portfolio link</p>
        </div>
        <div className="w-full mb-10">
          <h1 className="text-titles text-1xl">{portfolioLink}</h1>
        </div>
        <div className="w-full">
          <hr className="border-secondary-elements" />
        </div>
      </div>
    </>
  );
};

export default TalentPortfolio;
