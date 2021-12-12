import React, { useState } from "react";
import * as actions from "@/redux/actions/opportunityStepsActions";
import { changeCreateOppSideLinks } from "@/redux/actions/createOpportunityActions";
import { connect } from "react-redux";
import Link from "next/link";
import { useRouter } from "next/router";
import Button from "@/components/Global/Button";
import cn from "classnames";

interface IStepIdentifier {
  id: string | number;
  title: string;
  isActive: boolean;
  completed: boolean;
}

interface ICPFromRedux {
  store: {
    opportunitySteps: number;
    maxOpportunitySteps: number;
    stepIdentifiers: IStepIdentifier[];
  };
}

type Props = {
  opportunitySteps: number;
  maxOpportunitySteps: number;
  stepIdentifiers: IStepIdentifier[];
  increaseStep: (arg: number) => void;
  decreaseStep: (arg: number) => void;
  changeSideLinks: (arg: IStepIdentifier[]) => void;
};

const CreateOpportunityFooter: React.FC<Props> = ({
  opportunitySteps,
  maxOpportunitySteps,
  stepIdentifiers,
  increaseStep,
  decreaseStep,
  changeSideLinks,
}) => {
  const defaultStepIdentifiers: IStepIdentifier[] = [
    {
      id: 1,
      title: "About",
      isActive: true,
      completed: false,
    },
    {
      id: 2,
      title: "Description",
      isActive: false,
      completed: false,
    },
    {
      id: 3,
      title: "Category (& Skills)",
      isActive: false,
      completed: false,
    },
    {
      id: 4,
      title: "Salary",
      isActive: false,
      completed: false,
    },
    {
      id: 5,
      title: "Talent",
      isActive: false,
      completed: false,
    },
    {
      id: 6,
      title: "Review",
      isActive: false,
      completed: false,
    },
  ];
  const [steps, setSteps] = useState<IStepIdentifier[]>(stepIdentifiers);

  const router = useRouter();
  let initialStep = opportunitySteps;
  let maxSteps = maxOpportunitySteps;

  let incrementStep = () => {
    let updatedSteps: IStepIdentifier[] = [...steps];
    updatedSteps.forEach((step: IStepIdentifier, index: number) => {
      if (index === initialStep) {
        step.isActive = true;
        step.completed = false;
      } else if (index < initialStep) {
        step.isActive = false;
        step.completed = true;
      } else {
        step.isActive = false;
        step.completed = false;
      }
    });
    setSteps(updatedSteps);
    changeSideLinks(steps);

    if (initialStep !== maxSteps) {
      increaseStep(initialStep + 1);
    } else {
      increaseStep(initialStep);
    }
  };

  const reduceStep = () => {
    let updatedSteps: IStepIdentifier[] = [...steps];
    updatedSteps.forEach((step: IStepIdentifier) => {
      if (step.id < initialStep - 1) {
        step.isActive = false;
        step.completed = true;
      } else if (step.id === initialStep - 1) {
        step.isActive = true;
        step.completed = false;
      } else {
        step.isActive = false;
        step.completed = false;
      }
    });
    setSteps(updatedSteps);
    changeSideLinks(steps);
    decreaseStep(initialStep - 1);
  };

  let renderBackButton = () => {
    if (opportunitySteps === 1) {
      return (
        <>
          <div className="flex">
            <div className="cursor-default">
              <Link href="/opportunities">
                <span className="text-secondary">Cancle</span>
              </Link>
            </div>
          </div>
        </>
      );
    } else if (opportunitySteps < 7) {
      return (
        <div className="flex">
          <button
            className="bg-transparent outline-none focus:outline-none text-secondary"
            onClick={reduceStep}
          >
            Back
          </button>
        </div>
      );
    } else {
      return <span></span>;
    }
  };

  const goToHome = () => {
    decreaseStep(1);
    changeSideLinks(defaultStepIdentifiers);
    router.push("/opportunities");
  };

  let renderNextButton = () => {
    if (opportunitySteps < 6) {
      return (
        <>
          <Button
            text="Next"
            classNames="px-8"
            onClick={incrementStep}
            isFullWidth={false}
          />
        </>
      );
    } else if (opportunitySteps === 6) {
      return (
        <>
          <Button classNames="px-8" onClick={incrementStep} isFullWidth={false}>
            <span className="sm:inline hidden">Publish Opportunity</span>
            <span className="sm:hidden inline">Publish</span>
          </Button>
        </>
      );
    } else {
      return (
        <>
          <div className="sm:pr-20">
            <button
              className="bg-primary text-white md:px-16 px-8 md:py-3 py-2 rounded-lg outline-none focus:outline-none h-1xl"
              onClick={goToHome}
            >
              Continue
            </button>
          </div>
        </>
      );
    }
  };

  const renderDraftButton = () => {
    if (opportunitySteps === 6 && opportunitySteps < 7) {
      return (
        <>
          <button
            className="bg-white sm:px-8 px-2 rounded-lg outline-none focus:outline-none h-1xl flex items-center text-secondary border-secondary border sm:text-base text-sm"
            onClick={() => router.push("/opportunities")}
          >
            Save as Draft
          </button>
        </>
      );
    } else {
      return null;
    }
  };

  return (
    <footer
      className="bg-white h-20 flex items-center fixed left-0 bottom-0 w-full"
      style={{ zIndex: 9999999 }}
    >
      <div
        className={cn(
          "flex items-center md:px-8 px-4 justify-between mx-auto sm:space-x-0 space-x-3 2xl:container",
          {
            "lg:w-3/5 w-full lg:ml-225px lg:pl-20": opportunitySteps < 7,
            "w-full": opportunitySteps === 7,
          }
        )}
      >
        <div className="w-auto md:text-left text-center">
          {renderBackButton()}
        </div>
        <div
          className={cn(
            "flex items-center md:space-x-6 space-x-3 justify-end",
            {
              "lg:w-2/3 w-full": opportunitySteps < 7,
              "w-full": opportunitySteps === 7,
            }
          )}
        >
          {renderDraftButton()}
          {renderNextButton()}
        </div>
      </div>
    </footer>
  );
};

const mapStateToProps = (state: ICPFromRedux) => ({
  opportunitySteps: state.store.opportunitySteps,
  maxOpportunitySteps: state.store.maxOpportunitySteps,
  stepIdentifiers: state.store.stepIdentifiers,
});

const mapDispatchToProps = {
  increaseStep: actions.increaseOpportunityStep,
  decreaseStep: actions.decreaseOpportunityStep,
  changeSideLinks: changeCreateOppSideLinks,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateOpportunityFooter);
