import React from "react";
import { connect } from "react-redux";

interface ICPFromRedux {
  store: {
    createOpportunity: {
      opportunityType: string;
    };
  };
}

type Props = {
  opportunityType: string;
};

const CongratsStep: React.FC<Props> = ({ opportunityType }) => {
  return (
    <>
      <div className="flex flex-wrap lg:flex-nowrap lg:space-x-8 items-center w-full md:px-6 px-4">
        <div className="lg:w-1/2 w-full md:pr-20">
          <p className="text-titles text-1xl md:mb-20 mb-10">
            Congratulations! <br /> <br /> You have successfully published your
            Opportunity: <span className="text-primary">{opportunityType}</span>{" "}
            and from this moment it's active. <br /> <br /> <br /> Good luck and
            we jope you find a perfect Talent for your business!
          </p>
          <p className="text-sm font-sans text-secondary">
            <span className="font-gilroy">Attention:</span> You have to Review every Talent and you have 7 days to respond to
            it. By reviewing you need to Approve or reject wanted Talent. If you
            Approve Talent, you both are going into Messages. If you reject it,
            you have to write a short reason why you are rejecting the Talent.{" "}
            <br /> <br /> Ass soon Talent accepts your invite, teh Talent will
            appear under Messages' page where you can engage in conversation.
          </p>
        </div>
        <div className="w-1/2 lg:block hidden">
          <img src="/img/create-opportunity/congrats-vector.svg" alt="" />
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state: ICPFromRedux) => ({
  opportunityType: state.store.createOpportunity.opportunityType,
});

export default connect(mapStateToProps)(CongratsStep);
