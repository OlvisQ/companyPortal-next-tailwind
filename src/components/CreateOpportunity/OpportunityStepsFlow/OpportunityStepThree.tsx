import React, { useState } from "react";
import DropdownSelect from "@/components/Global/DropdownSelect";
import * as actions from "@/redux/actions/createOpportunityActions";
import { connect } from "react-redux";
import cn from "classnames";
import Button from "@/components/Global/Button";

interface IRequiredBonusSkill {
  id: string | number;
  technology: string;
  technologyBg: string;
}

interface ICPFromRedux {
  store: {
    createOpportunity: {
      opportunityCategories: string[];
      selectedCategory: string;
      requiredSkills: IRequiredBonusSkill[];
      bonusSkills: IRequiredBonusSkill[];
    };
  };
}

type Props = {
  opportunityCategories: string[];
  selectedCategory: string;
  requiredSkills: IRequiredBonusSkill[];
  bonusSkills: IRequiredBonusSkill[];
  changeCat: (arg: string) => void;
  removeRequiredTech: (arg: number) => void;
  removeBonusTech: (arg: number) => void;
};

const OpportunityStepThree: React.FC<Props> = ({
  opportunityCategories,
  selectedCategory,
  requiredSkills,
  bonusSkills,
  changeCat,
  removeRequiredTech,
  removeBonusTech,
}) => {
  const [requiredTech, setRequiredTech] =
    useState<IRequiredBonusSkill[]>(requiredSkills);
  const [bonusTech, setBonusTech] =
    useState<IRequiredBonusSkill[]>(bonusSkills);

  const delReqTech = (index: number) => {
    let reqTechToDel: IRequiredBonusSkill[] = [...requiredTech];
    reqTechToDel.splice(index, 1);
    setRequiredTech(reqTechToDel);
    removeRequiredTech(index);
  };

  const delBonTech = (index: number) => {
    let bonTechToDel: IRequiredBonusSkill[] = [...bonusTech];
    bonTechToDel.splice(index, 1);
    setBonusTech(bonTechToDel);
    removeBonusTech(index);
  };

  const renderRequiredSkills = requiredTech.map(
    (skill: IRequiredBonusSkill, index: number) => {
      return (
        <React.Fragment key={skill.id}>
          <div
            className={cn(
              "rounded-lg px-6 flex items-center py-2 mr-4 mb-4",
              skill.technologyBg
            )}
          >
            <p className="text-sm text-titles mr-4">{skill.technology}</p>
            <button
              className="bg-transparent outline-none focus:outline-none"
              onClick={() => delReqTech(index)}
            >
              <img src="/img/icons/cross-icon-2.svg" alt="" />
            </button>
          </div>
        </React.Fragment>
      );
    }
  );

  const renderBonusSkills = bonusTech.map(
    (skill: IRequiredBonusSkill, index: number) => {
      return (
        <React.Fragment key={skill.id}>
          <div
            className={cn(
              "rounded-lg px-6 flex items-center py-2 mr-4 mb-4 py-4",
              skill.technologyBg
            )}
          >
            <p className="text-sm text-titles mr-4">{skill.technology}</p>
            <button
              className="bg-transparent outline-none focus:outline-none"
              onClick={() => delBonTech(index)}
            >
              <img src="/img/icons/cross-icon-2.svg" alt="" />
            </button>
          </div>
        </React.Fragment>
      );
    }
  );

  return (
    <>
      <div className="flex flex-wrap lg:w-1/2 w-full">
        <div className="w-full mb-10">
          <h1 className="text-titles text-3xl mb-3">Opportunity Category</h1>
          <p className="text-secondary font-sans text-sm">
            Please select wanted Opportunity category
          </p>
        </div>
        <div className="w-full flex items-c enter mb-20">
          <div className="flex-1">
            <DropdownSelect
              label="opportunity category"
              dropDownData={opportunityCategories}
              selectedValue={selectedCategory}
              selectedItem={(item) => changeCat(item)}
            />
          </div>
          <div className="text-center w-1/5">
            <p className="text-titles">60-80</p>
            <p className="text-titles text-xss uppercase">possible</p>
            <p className="text-titles text-xss uppercase">candidates</p>
          </div>
        </div>
        <div className="w-full mb-10">
          <h1 className="text-titles text-3xl mb-3">
            Required Skills ({requiredSkills.length}/10)
          </h1>
          <p className="text-secondary font-sans text-sm">
            Please select up to 10 Skills which are going to reflect the
            opportunity requirements
          </p>
        </div>
        <div className="w-full flex flex-wrap mb-10">
          <div className="w-full flex flex-wrap">{renderRequiredSkills}</div>
          <div className="w-full flex">
            <Button
              text="+ Add New Skill"
              isFullWidth={false}
              classNames="px-6"
            />
          </div>
        </div>
        <div className="w-full mb-10">
          <h1 className="text-titles text-3xl mb-3">
            Bonus Skills ({bonusSkills.length}/10)
          </h1>
          <p className="text-secondary font-sans text-sm">
            Please select up to 10 Skills which are going to reflect the
            opportunity requirments.
          </p>
        </div>
        <div className="w-full flex flex-wrap">
          <div className="w-full flex flex-wrap">{renderBonusSkills}</div>
          <div className="w-full flex">
            <Button
              text="+ Add New Bonus Skill"
              isFullWidth={false}
              classNames="px-6"
            />
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state: ICPFromRedux) => ({
  opportunityCategories: state.store.createOpportunity.opportunityCategories,
  selectedCategory: state.store.createOpportunity.selectedCategory,
  requiredSkills: state.store.createOpportunity.requiredSkills,
  bonusSkills: state.store.createOpportunity.bonusSkills,
});

const mapDispatchToProps = {
  changeCat: actions.changeOppCat,
  removeRequiredTech: actions.removeRequiredSkill,
  removeBonusTech: actions.removeBonusSkill,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OpportunityStepThree);
