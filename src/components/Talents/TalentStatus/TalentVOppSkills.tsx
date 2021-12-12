import React from "react";
import cn from "classnames";

interface ITalentOppSkills {
  id: string | number;
  technology: string;
  technologyBg: string;
}

const TalentVOppSkills: React.FC = () => {
  const talentSkills: ITalentOppSkills[] = [
    {
      id: 1,
      technology: "HTML (5 years) ",
      technologyBg: "bg-skills-skill1",
    },
    {
      id: 2,
      technology: "CSS (5 years)",
      technologyBg: "bg-skills-skill2",
    },
    {
      id: 3,
      technology: "Javascript: Angular (3 years)",
      technologyBg: "bg-skills-skill3",
    },
    {
      id: 4,
      technology: "Javascript: React (3 years)",
      technologyBg: "bg-skills-skill4",
    },
    {
      id: 5,
      technology: "Ruby (2 years)",
      technologyBg: "bg-skills-skill2",
    },
    {
      id: 6,
      technology: "Javascript: NodeJS (3 years)",
      technologyBg: "bg-skills-skill5",
    },
  ];

  const oppSkills: ITalentOppSkills[] = [
    {
      id: 1,
      technology: "HTML (5 years) ",
      technologyBg: "bg-skills-skill1",
    },
    {
      id: 2,
      technology: "CSS (5 years)",
      technologyBg: "bg-skills-skill2",
    },
    {
      id: 3,
      technology: "Javascript: Angular (3 years)",
      technologyBg: "bg-skills-skill3",
    },
    {
      id: 4,
      technology: "Javascript: React (3 years)",
      technologyBg: "bg-skills-skill4",
    },
    {
      id: 5,
      technology: "Ruby (2 years)",
      technologyBg: "bg-skills-skill2",
    },
    {
      id: 6,
      technology: "Javascript: NodeJS (3 years)",
      technologyBg: "bg-skills-skill5",
    },
  ];

  const renderTalentSkills = talentSkills.map(
    (skill: ITalentOppSkills, index: number) => {
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

  const renderOppSkills = oppSkills.map(
    (skill: ITalentOppSkills, index: number) => {
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
      <div className="flex flex-wrap">
        <div className="w-full mb-4">
          <p className="text-secondary text-xss uppercase">talent skills</p>
        </div>
        <div className="w-full flex flex-wrap">{renderTalentSkills}</div>
        <div className="w-full my-8">
          <p className="text-titles">vs.</p>
        </div>
        <div className="w-full mb-4">
          <p className="text-secondary text-xss uppercase">
            opportunity skills
          </p>
        </div>
        <div className="w-full flex flex-wrap mb-10">{renderOppSkills}</div>
        <div className="w-full">
          <hr className="border-secondary-elements" />
        </div>
      </div>
    </>
  );
};

export default TalentVOppSkills;
