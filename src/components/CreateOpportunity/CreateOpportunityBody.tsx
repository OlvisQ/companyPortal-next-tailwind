import React from "react";
import { connect } from "react-redux";
import cn from "classnames";
import ChatIntiater from "@/components/Global/ChatInitiater";
import OpportunityStepOne from "@/components/CreateOpportunity/OpportunityStepsFlow/OpportunityStepOne";
import OpportunityStepTwo from "@/components/CreateOpportunity/OpportunityStepsFlow/OpportunityStepTwo";
import OpportunityStepThree from "@/components/CreateOpportunity/OpportunityStepsFlow/OpportunityStepThree";
import OpportunityStepFour from "@/components/CreateOpportunity/OpportunityStepsFlow/OpportunityStepFour";
import OpportunityStepFive from "@/components/CreateOpportunity/OpportunityStepsFlow/OpportunityStepFive";
import OpportunityReivew from "@/components/CreateOpportunity/OpportunityStepsFlow/OpportunityReview";
import CongratsStep from "@/components/CreateOpportunity/OpportunityStepsFlow/CongratsStep";

interface ICPFromRedux {
  store: {
    opportunitySteps: number;
  };
}

type Props = {
  opportunitySteps: number;
};

const CreateOpportunityBody: React.FC<Props> = ({ opportunitySteps }) => {
  const renderOpportunitySteps = () => {
    switch (opportunitySteps) {
      case 1:
        return <OpportunityStepOne />;
      case 2:
        return <OpportunityStepTwo />;
      case 3:
        return <OpportunityStepThree />;
      case 4:
        return <OpportunityStepFour />;
      case 5:
        return <OpportunityStepFive />;
      case 6:
        return <OpportunityReivew />;
      case 7:
        return <CongratsStep />;

      default:
        return null;
    }
  };

  return (
    <>
      <div
        className={cn(
          "2xl:container w-full flex xl:ml-225px lg:py-28 py-36 cool-transition pr-6 items-start md:px-6 px-4 lg:space-x-6 space-x-0",
          {
            "lg:pl-16 lg:ml-48": opportunitySteps < 7,
            "lg:ml-0 pl-0 pt-24 lg:pl-0 pr-zero": opportunitySteps === 7,
          }
        )}
      >
        {renderOpportunitySteps()}
        <div
          className={cn("lg:block hidden w-1/2", {
            "lg:hidden hidden": opportunitySteps === 7,
          })}
        >
          <ChatIntiater
            hasDivider
            classNames={cn("xl:w-3/5 w-full ml-auto", {
              "xl:w-11/12": opportunitySteps === 6,
            })}
            imgWidth="xl:w-auto w-full mr-5"
            initiaterInfoWidth="xl:w-auto w-full"
            headerWidth="w-full"
          />
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state: ICPFromRedux) => ({
  opportunitySteps: state.store.opportunitySteps,
});

export default connect(mapStateToProps)(CreateOpportunityBody);
