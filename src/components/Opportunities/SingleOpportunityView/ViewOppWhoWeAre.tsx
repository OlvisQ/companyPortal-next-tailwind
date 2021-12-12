import React from "react";

type Props = {
  whoWeAre: string[];
};

const ViewOppWhoWeAre: React.FC<Props> = ({ whoWeAre }) => {
  const renderWhoWeAreDetails = whoWeAre.map(
    (detail: string, index: number) => {
      return (
        <React.Fragment key={index}>
          <p className="text-secondary font-sans mb-5 text-lg">{detail}</p>
        </React.Fragment>
      );
    }
  );

  return (
    <>
      <div className="border-b border-secondary-elements pb-6">
        <h1 className="text-titles text-1xl mb-5">Who We Are</h1>
        {renderWhoWeAreDetails}
      </div>
    </>
  );
};

export default ViewOppWhoWeAre;
