import React from "react";
import { connect } from "react-redux";

interface ICPFromRedux {
  store: {
    createOpportunity: {
      opportunityType: string;
      opportunityTitle: string;
    };
  };
}

type Props = {
  opportunityType: string;
  opportunityTitle: string;
};

const ReviewHeader: React.FC<Props> = ({
  opportunityType,
  opportunityTitle,
}) => {
  return (
    <>
      <div className="flex xl:flex-nowrap flex-wrap xl:space-x-6 md:px-4 py-8 items-center w-full">
        <div className="flex justify-center lg:w-auto w-full">
          <div className="border border-secondary-elements rounded-full w-36 h-36 flex justify-center items-center md:mx-0">
            <img src="/img/companies/pixel-&-graph-large.svg" alt="" />
          </div>
        </div>
        <div className="w-full xl:mt-0 mt-6 flex flex-wrap items-start">
          <div className="w-full">
            <h1 className="text-title text-3xl">{opportunityType}</h1>
          </div>
          <div className="w-full flex flex-wrap items-center my-4">
            <p className="text-primary mr-3">Pixels & Graphs</p>
            <p className="text-secondary font-sans text-sm">
              30 days remaining - ends on 14/08/2021
            </p>
          </div>
          <div className="w-full flex">
            <div className="flex items-center px-4 h-11 space-x-4 bg-secondary-light3 rounded-xl">
              <div className="bg-secondary-green rounded-full w-5 h-5"></div>
              <p className="text-titles text-sm">{opportunityTitle}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mb-10">
        <hr className="border-secondary-elements" />
      </div>
    </>
  );
};

const mapStateToProps = (state: ICPFromRedux) => ({
  opportunityType: state.store.createOpportunity.opportunityType,
  opportunityTitle: state.store.createOpportunity.opportunityTitle,
});

export default connect(mapStateToProps)(ReviewHeader);
