import React from "react";
import { useRouter } from "next/router";

const SingleOppHeader: React.FC = () => {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
    <>
      <div className="flex flex-wrap w-full mb-8 lg:mt-0 -mt-6">
        <div className="lg:w-1/2 w-full flex items-start">
          <button
            className="bg-transparent outline-none focus:outline-none mr-6 cursor-pointer"
            onClick={() => goBack()}
          >
            <img src="/img/icons/chevron-left-icon.svg" alt="" />
          </button>
          <div className="-mt-1">
            <h1 className="text-titles text-3xl mb-3">
              Front-End <br className="lg:hidden block" /> Developer
            </h1>
            <div className="flex items-center">
              <div className="h-5 w-5 rounded-full bg-secondary-green"></div>
              <p className="text-secondary ml-2">Active</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 w-full mt-10">
          <div className="mb-6 w-full flex lg:justify-end">
            <p className="text-secondary">
              30 days remaining{" "}
              <span className="font-sans">(ebds on 14/08/2019)</span>
            </p>
          </div>
          <div className="flex items-center justify-end">
            <button className="outline-none focus:outline-none bg-transparent text-primary mr-10 lg:text-base text-xs">
              View Opportunity
            </button>
            <button className="outline-none focus:outline-none bg-transparent text-primary mr-10 lg:text-base text-xs">
              Edit Opportunity
            </button>
            <button className="outline-none focus:outline-none bg-transparent text-primary lg:text-base text-xs">
              Close Opportunity
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleOppHeader;
