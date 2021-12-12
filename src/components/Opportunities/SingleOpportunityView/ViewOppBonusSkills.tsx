import React from "react";
import cn from "classnames";

interface ViewOppBonusSkillsInterface {
  id: string | number;
  skill: string;
  skillBg: string;
}

type Props = {
  bonusSkills: ViewOppBonusSkillsInterface[];
};

const ViewOppBonusSkills: React.FC<Props> = ({ bonusSkills }) => {
  const renderBonusSkills = bonusSkills.map(
    (skills: ViewOppBonusSkillsInterface) => {
      return (
        <React.Fragment key={skills.id}>
          <p
            className={cn(
              "p-4 rounded-lg text-titles mb-5 mr-6",
              skills.skillBg
            )}
          >
            {skills.skill}
          </p>
        </React.Fragment>
      );
    }
  );

  return (
    <>
      <div className="flex flex-wrap mb-5 mt-10 pb-6 border-b border-secondary-elements">
        <div className="w-full mb-5">
          <h1 className="text-titles text-1xl">Bonus Skills</h1>
        </div>
        <div className="w-full flex flex-wrap">{renderBonusSkills}</div>
      </div>
    </>
  );
};

export default ViewOppBonusSkills;
