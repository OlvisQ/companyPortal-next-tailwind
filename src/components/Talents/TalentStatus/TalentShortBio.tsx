import React from "react";

type Props = {
  shortBio: string;
};

const TalentShortBio: React.FC<Props> = ({ shortBio }) => {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full mb-3">
          <p className="text-xss text-secondary uppercase">short bio</p>
        </div>
        <div className="w-full mb-10">
          <p className="text-secondary font-sans">{shortBio}</p>
        </div>
        <div className="w-full">
          <hr className="border-secondary-elements" />
        </div>
      </div>
    </>
  );
};

export default TalentShortBio;
