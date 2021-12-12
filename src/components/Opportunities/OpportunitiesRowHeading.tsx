import React from "react";
import Checkbox from "@/components/Global/Checkbox";

const OpportunitiesRowHeading: React.FC = () => {
  return (
    <>
      <div className="lg:flex hidden lg:flex-nowrap flex-wrap items-center lg:px-6 px-4 justify-around pb-8">
        <div className="lg:block hidden w-0 -ml-3">
          <Checkbox borderColor="border-secondary-elements" classNames="ml-1"/>
        </div>
        <div className="lg:w-60 w-full lg:mb-0 mb-5 pl-8">
          <p className="text-xss text-secondary uppercase ml-2">opportunity name</p>
        </div>

        <div className="lg:w-36 w-full flex items-end pl-4">
          <p className="text-secondary text-xss uppercase ml-3 truncate">applicants applied</p>
        </div>

        <div className="lg:w-303 w-full lg:my-0 my-5 mr-12">
          <p className="text-secondary text-xss uppercase ml-3">
            field of occupation
          </p>
        </div>

        <div className="lg:w-56 w-1/2">
          <p className="text-secondary text-xss uppercase ml-7">
            opportunity duration
          </p>
        </div>
        <div className="lg:w-56">
          <p className="text-secondary text-xss uppercase ml-3">
            opportunity created
          </p>
        </div>

        <div className="flex items-center lg:pr-14 lg:w-auto w-full justify-center">
          <p className="text-secondary text-xss uppercase">status</p>
        </div>
      </div>
    </>
  );
};

export default OpportunitiesRowHeading;
