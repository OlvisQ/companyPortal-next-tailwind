import React from "react";
import { connect } from "react-redux";

interface ICPFromRedux {
  store: {
    createOpportunity: {
      selectedTalentLocation: string;
      salary: {
        salaryFrom: string;
        salaryTo: string;
      };
    };
  };
}

type Props = {
  selectedTalentLocation: string;
  salaryFrom: string;
  salaryTo: string;
};

const ReviewLocationAndSalary: React.FC<Props> = ({
  selectedTalentLocation,
  salaryFrom,
  salaryTo,
}) => {
  return (
    <>
      <div className="flex flex-wrap w-full justify-between">
        <div className="md:w-1/2 w-full md:mb-0 mb-6">
          <p className="text-secondary text-xss uppercase mb-3">
            opportunity office location
          </p>
          <h1 className="text-titles text-1xl">{selectedTalentLocation}</h1>
        </div>
        <div className="md:w-1/2 w-full">
          <p className="text-secondary text-xss uppercase mb-3">salary</p>
          <h1 className="text-titles text-1xl">
            {salaryFrom} - {salaryTo}
          </h1>
        </div>
        <div className="w-full my-10">
          <hr className="border-secondary-elements" />
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state: ICPFromRedux) => ({
  selectedTalentLocation: state.store.createOpportunity.selectedTalentLocation,
  salaryFrom: state.store.createOpportunity.salary.salaryFrom,
  salaryTo: state.store.createOpportunity.salary.salaryTo,
});

export default connect(mapStateToProps)(ReviewLocationAndSalary);
