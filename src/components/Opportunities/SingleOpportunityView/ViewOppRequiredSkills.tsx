import React from "react";
import cn from "classnames";

interface ViewOppRequiredSkillsInterface {
  id: string | number;
  skill: string;
  skillBg: string;
}

type Props = {
  requiredSkills: ViewOppRequiredSkillsInterface[];
};

const ViewOppRequiredSkills: React.FC<Props> = ({ requiredSkills }) => {
  const renderRequiredSkills = requiredSkills.map(
    (skills: ViewOppRequiredSkillsInterface) => {
      return (
        <React.Fragment key={skills.id}>
          <p className={cn("p-4 rounded-lg text-titles mb-5 mr-6", skills.skillBg)}>{skills.skill}</p>
        </React.Fragment>
      );
    }
  );

  return (
    <>
      <div className="flex flex-wrap mb-5 mt-10 pb-6 border-b border-secondary-elements">
        <div className="w-full mb-5">
          <h1 className="text-titles text-1xl">Required Skills</h1>
        </div>
        <div className="w-full flex flex-wrap">{renderRequiredSkills}</div>
      </div>
    </>
  );
};

export default ViewOppRequiredSkills;
