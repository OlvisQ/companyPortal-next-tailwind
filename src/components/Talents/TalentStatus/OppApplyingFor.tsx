import React from "react";

type Props = {
  applyingFor?: string;
};

const OppApplyingFor: React.FC<Props> = ({ applyingFor }) => {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full mb-3">
          <p className="text-xss text-secondary uppercase">
            opportunity applying for
          </p>
        </div>
        <div className="w-full mb-10">
          <h1 className="text-primary text-1xl">{applyingFor}</h1>
        </div>
        <div className="w-full">
          <hr className="border-secondary-elements" />
        </div>
      </div>
    </>
  );
};

export default OppApplyingFor;
