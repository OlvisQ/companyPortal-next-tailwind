import React from "react";
import cn from "classnames";
import { connect } from "react-redux";

interface TechnologiesInterface {
  id: string | number;
  technology: string;
  technologyBg: string;
}

interface CPFromRedux {
  store: {
    technologiesUsed: TechnologiesInterface[];
  };
}

type Props = {
  technologiesUsed: TechnologiesInterface[];
};

const ProfileTechnologies: React.FC<Props> = ({ technologiesUsed }) => {
  const renderUsedTechnologies = technologiesUsed.map(
    (technology: TechnologiesInterface) => {
      return (
        <React.Fragment key={technology.id}>
          <div
            className={cn(
              "px-6 py-3 rounded-lg mr-4 mb-4",
              technology.technologyBg
            )}
          >
            <p className="text-titles text-sm">{technology.technology}</p>
          </div>
        </React.Fragment>
      );
    }
  );

  return (
    <>
      <div className="container mx-auto px-4">
        <div className="lg:w-1/2 mx-auto flex flex-wrap border-b border-secondary-elements py-10">
          <div className="w-full mb-5">
            <h1 className="text-titles text-1xl">Technologies Used</h1>
          </div>
          <div className="w-full flex flex-wrap items-start">
            {renderUsedTechnologies}
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state: CPFromRedux) => ({
  technologiesUsed: state.store.technologiesUsed,
});

export default connect(mapStateToProps)(ProfileTechnologies);
