import React from "react";

type Props = {
  location: string;
  salary: string;
};

const ViewOppLocationWage: React.FC<Props> = ({ location, salary }) => {
  return (
    <>
      <div className="flex flex-wrap items-start my-10 pb-10 border-secondary-elements border-b">
        <div className="lg:w-1/2 w-full lg:mb-0 mb-10">
          <p className="text-xss text-secondary uppercase mb-3">
            opportunity office location
          </p>
          <h1 className="text-titles text-1xl">{location}</h1>
        </div>
        <div className="lg:w-1/2 w-full">
          <p className="text-xss text-secondary uppercase mb-3">salary</p>
          <h1 className="text-titles text-1xl">{salary}</h1>
        </div>
      </div>
    </>
  );
};

export default ViewOppLocationWage;
