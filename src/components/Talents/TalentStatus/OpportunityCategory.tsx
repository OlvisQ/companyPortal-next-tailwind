import React from "react";
import cn from "classnames";

interface IOppCategory {
  id: string | number;
  skill: string;
  skillBg: string;
}

type Props = {
  opportunityCategories?: IOppCategory[];
};

const OpportunityCategory: React.FC<Props> = ({
  opportunityCategories = [
    {
      id: 1,
      skill: "Web, Mobile & Software Development",
      skillBg: "bg-secondary-light3",
    },
  ],
}) => {
  const renderOppCategory = opportunityCategories.map((tech: IOppCategory) => {
    return (
      <React.Fragment key={tech.id}>
        <div
          className={cn(
            "p-4 rounded-xl flex items-center mr-4 mb-4 space-x-4 truncate",
            tech.skillBg
          )}
        >
          <div>
            <div className="w-5 h-5 rounded-full bg-secondary-green"></div>
          </div>
          <div className="truncate">
            <p className="text-titles text-sm truncate">
              Web, Mobile & Software Development
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  });

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full mb-3">
          <p className="text-xss text-secondary uppercase">
            opportunity category
          </p>
        </div>
        <div className="w-full mb-10 flex flex-wrap">{renderOppCategory}</div>
        <div className="w-full">
          <hr className="border-secondary-elements" />
        </div>
      </div>
    </>
  );
};

export default OpportunityCategory;
