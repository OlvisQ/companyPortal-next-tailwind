import React, { useState } from "react";
import SidebarLink from "@/components/CreateOpportunity/CreateOpportunitySidebar/SidebarLink";
import { connect } from "react-redux";
import cn from "classnames";

interface IStepIdentifier {
  id: string | number;
  title: string;
  isActive: boolean;
  completed: boolean;
}

interface ICPFromRedux {
  store: {
    stepIdentifiers: IStepIdentifier[];
    opportunitySteps: number;
  };
}

type Props = {
  stepIdentifiers: IStepIdentifier[];
  opportunitySteps: number;
};

const CreateOpportunitySidebar: React.FC<Props> = ({
  stepIdentifiers,
  opportunitySteps,
}) => {
  let [showMobMenu, setMobMenu] = useState<boolean>(false);

  const renderStepToShow = stepIdentifiers.map(
    (step: IStepIdentifier, index: number) => {
      if (step.isActive) {
        return (
          <React.Fragment key={index}>
            <SidebarLink
              title={step.title}
              isActive={step.isActive}
              completed={step.completed}
            />
          </React.Fragment>
        );
      }
    }
  );

  const renderStepIdentifiers = stepIdentifiers.map(
    (identifier: IStepIdentifier) => {
      return (
        <React.Fragment key={identifier.id}>
          <div className="w-full mb-6">
            <SidebarLink
              title={identifier.title}
              isActive={identifier.isActive}
              completed={identifier.completed}
            />
          </div>
        </React.Fragment>
      );
    }
  );

  return (
    <>
      <aside
        className={cn(
          "w-225px bg-white fixed top-0 bottom-0 pl-6 cool-transition lg:block hidden",
          {
            "left-0": opportunitySteps < 7,
            "-left-full": opportunitySteps === 7 || opportunitySteps > 7,
          }
        )}
        style={{ zIndex: 99999999 }}
      >
        <div className="flex flex-wrap mt-28">{renderStepIdentifiers}</div>
      </aside>

      <aside
        className={cn("fixed top-20 w-full bg-white h-14 lg:hidden -mt-4 flex items-center justify-between px-4", {
          "hidden": opportunitySteps === 7
        })}
        onClick={() => setMobMenu((showMobMenu = !showMobMenu))}
        style={{ zIndex: 99999999 }}
      >
        <div className="flex items-center">{renderStepToShow}</div>
        <div className="absolute right-6" style={{ zIndex: 999999999999 }}>
          <button className="bg-transparent outline-none focus:outline-none">
            <img
              src="/img/icons/chevron-icon.svg"
              alt=""
              className="w-4 h-4 transform -rotate-90"
            />
          </button>
        </div>
      </aside>
      <div
        className={cn(
          "w-full bg-white fixed px-4 rounded-b-5xl cool-transition -mt-4 pt-4",
          {
            "top-20": showMobMenu,
            "-top-full": !showMobMenu,
          }
        )}
        style={{ zIndex: 999999999 }}
        onClick={() => setMobMenu(false)}
      >
        {renderStepIdentifiers}
        <button
          className="bg-transparent outline-none focus:outline-none absolute top-5 right-6"
          onClick={() => setMobMenu(false)}
        >
          <img
            src="/img/icons/chevron-icon.svg"
            alt=""
            className="w-4 h-4 transform rotate-90"
          />
        </button>
      </div>
      <div
        className={cn("fixed w-full h-full cool-transition bg-popup-overlay", {
          "bottom-0": showMobMenu,
          "-bottom-full": !showMobMenu,
        })}
        style={{ zIndex: 99999999 }}
      ></div>
    </>
  );
};

const mapStateToProps = (state: ICPFromRedux) => ({
  stepIdentifiers: state.store.stepIdentifiers,
  opportunitySteps: state.store.opportunitySteps,
});

export default connect(mapStateToProps)(CreateOpportunitySidebar);
