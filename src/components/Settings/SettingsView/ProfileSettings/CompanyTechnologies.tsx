import React, { useEffect, useState } from "react";
import cn from "classnames";
import { connect } from "react-redux";
import Button from "@/components/Global/Button";
import * as actions from "@/redux/actions/profileSettingsAction";

interface ITech {
  id: string | number;
  technology: string;
  technologyBg?: string;
}

interface ICPFromRedux {
  store: {
    technologiesUsed: ITech[];
  };
}

type Props = {
  technologiesUsed: ITech[];
  changeSkills: (skills: ITech[]) => void;
};

const CompanyTechnologies: React.FC<Props> = ({
  technologiesUsed,
  changeSkills,
}) => {
  let [skills, setSkills] = useState<ITech[]>(technologiesUsed);

  const deleteSkill = (index: number) => {
    let newSkills: ITech[] = [...skills];
    let deletedSkill = newSkills.splice(index, 1);

    setSkills(newSkills);
    deletedSkill.pop();
  };

  useEffect(() => {
    setSkills(skills);
  }, [skills]);

  const saveChanges = () => {
    changeSkills(skills);

    alert("Changes Saved");
  };

  const renderTechnologies = skills.map((skill: ITech, index: number) => {
    return (
      <React.Fragment key={skill.id}>
        <div
          className={cn(
            "px-6 flex items-center h-10 rounded-lg mr-4 mb-4",
            skill.technologyBg
          )}
        >
          <p className="text-titles text-sm mr-5">{skill.technology}</p>
          <button
            className="bg-transparent outline-none focus:outline-none"
            onClick={() => deleteSkill(index)}
          >
            <img src="/img/icons/cross-icon-2.svg" alt="" />
          </button>
        </div>
      </React.Fragment>
    );
  });

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full flex md:flex-nowrap flex-wrap justify-between mb-8">
          <div className="md:w-auto w-full md:mb-0 mb-4">
            <h1 className="text-titles md:text-3xl text-1xl">
              Technologies Used
            </h1>
          </div>
          <div>
            <button className="text-primary text-sm outline-none focus:outline-none">
              + Add new Technology
            </button>
          </div>
        </div>
        <div className="w-full flex flex-wrap items-start">
          {renderTechnologies}
        </div>
        <div className="w-full">
          <Button text="Save Changes" onClick={saveChanges} />
          <hr className="border-secondary-elements mb-10" />
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state: ICPFromRedux) => ({
  technologiesUsed: state.store.technologiesUsed,
});

const mapDispatchToProps = {
  changeSkills: actions.changeTechnologies,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CompanyTechnologies);
