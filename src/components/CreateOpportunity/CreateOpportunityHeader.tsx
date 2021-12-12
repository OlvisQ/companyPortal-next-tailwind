import React from "react";
import { connect } from "react-redux";
import Link from "next/link";

interface ICPFromRedux {
  store: {
    opportunitySteps: number;
  };
}

type Props = {
  opportunitySteps: number;
};

const CreateOpportunityHeader: React.FC<Props> = ({ opportunitySteps }) => {
  let opportunityStepNotifier = () => {
    let steps = [];
    for (let i = 0; i < opportunitySteps; i++) {
      if (i < 6) {
        steps.push(
          <div className="h-1 bg-primary steps__oppStep" key={i}></div>
        );
      } else {
        steps = [];
      }
    }
    return steps;
  };
  return (
    <header
      className="w-full shadow-sm bg-white h-16 px-6 fixed top-0 left-0 items-center flex justify-between"
      style={{ zIndex: 9999999999999 }}
    >
      <div className="flex w-full fixed top-0 left-0 steps">
        {opportunityStepNotifier()}
      </div>
      <div>
        <img src="/img/logo.svg" alt="" />
      </div>
      {opportunitySteps < 7 ? (
        <div>
          <Link href="/opportunities">
            <button className="text-primary text-sm">
              Exit & Continue Later
            </button>
          </Link>
        </div>
      ) : null}
    </header>
  );
};

const mapStateToProps = (state: ICPFromRedux) => ({
  opportunitySteps: state.store.opportunitySteps,
});

export default connect(mapStateToProps)(CreateOpportunityHeader);
