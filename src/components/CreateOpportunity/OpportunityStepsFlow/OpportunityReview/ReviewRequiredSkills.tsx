import React from "react";
import cn from "classnames";
import { connect } from "react-redux";

interface IRequiredBonusSkills {
  id: number;
  technology: string;
  technologyBg: string;
}

interface ICPFromRedux {
  store: {
    createOpportunity: {
      requiredSkills: IRequiredBonusSkills[];
    };
  };
}

type Props = {
  requiredSkills: IRequiredBonusSkills[];
};

const ReviewRequiredSkills: React.FC<Props> = ({ requiredSkills }) => {
  const renderRequiredSkills = requiredSkills.map(
    (skill: IRequiredBonusSkills, index: number) => {
      return (
        <React.Fragment key={index}>
          <div
            className={cn(
              "text-titles rounded-lg py-2 flex items-center px-6 mr-5 mb-5",
              skill.technologyBg
            )}
          >
            {skill.technology}
          </div>
        </React.Fragment>
      );
    }
  );

  return (
    <>
      <div className="flex flex-wrap w-full">
        <div className="w-full mb-6">
          <h1 className="text-titles text-1xl">Required Skills</h1>
        </div>
        <div className="w-full flex flex-wrap">{renderRequiredSkills}</div>
        <div className="w-full my-10">
          <hr className="border-secondary-elements" />
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state: ICPFromRedux) => ({
  requiredSkills: state.store.createOpportunity.requiredSkills,
});

export default connect(mapStateToProps)(ReviewRequiredSkills);
