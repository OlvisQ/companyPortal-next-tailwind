import React from "react";

type Props = {
  oppDescription: string[];
};

const ViewOppDescription: React.FC<Props> = ({ oppDescription }) => {
  const renderOppDesc = oppDescription.map((desc: string, index: number) => {
    return (
      <React.Fragment key={index}>
        <p className="text-secondary font-sans mb-5 text-lg">{desc}</p>
      </React.Fragment>
    );
  });

  return (
    <>
      <div className="border-b border-secondary-elements pb-6">
        <h1 className="text-titles text-1xl mb-5">Opportunity Description</h1>
        {renderOppDesc}
      </div>
    </>
  );
};

export default ViewOppDescription;
