import React from "react";
import DropdownSelect from "@/components/Global/DropdownSelect";
import InputField from "@/components/Global/InputField";
import * as actions from "@/redux/actions/createOpportunityActions";
import { connect } from "react-redux";

interface ICPFromRedux {
  store: {
    createOpportunity: {
      salary: {
        currencies: string[];
        selectedCurrency: string;
        salaryFrom: string;
        salaryTo: string;
      };
    };
  };
}

type Props = {
  currencies: string[];
  selectedCurrency: string;
  salaryFrom: string;
  salaryTo: string;
  changeCurrency: (arg: string) => void;
  changeSalaryFrom: (arg: string) => void;
  changeSalaryTo: (arg: string) => void;
};

const OpportunityStepFour: React.FC<Props> = ({
  currencies,
  selectedCurrency,
  salaryFrom,
  salaryTo,
  changeCurrency,
  changeSalaryFrom,
  changeSalaryTo,
}) => {
  return (
    <>
      <div className="flex flex-wrap lg:w-1/2 w-full">
        <div className="w-full mb-8">
          <h1 className="text-titles text-3xl mb-4">Salary</h1>
          <p className="text-secondary text-sm font-sans">
            Please define wanted salary for a opportunity you are creating.
          </p>
        </div>
        <div className="w-full mb-8">
          <DropdownSelect
            dropDownData={currencies}
            selectedItem={(item) => changeCurrency(item)}
            selectedValue={selectedCurrency}
          />
        </div>
        <div className="w-full flex flex-wrap md:space-x-5 md:flex-nowrap">
          <div className="md:w-1/2 w-full md:mb-0 mb-6">
            <InputField
              label="salary from"
              type="text"
              value={salaryFrom}
              onInputChange={(e) => changeSalaryFrom(e.target.value)}
            />
          </div>
          <div className="md:w-1/2 w-full">
            <InputField
              label="salary to"
              type="text"
              value={salaryTo}
              onInputChange={(e) => changeSalaryTo(e.target.value)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state: ICPFromRedux) => ({
  currencies: state.store.createOpportunity.salary.currencies,
  selectedCurrency: state.store.createOpportunity.salary.selectedCurrency,
  salaryFrom: state.store.createOpportunity.salary.salaryFrom,
  salaryTo: state.store.createOpportunity.salary.salaryTo,
});

const mapDispatchToProps = {
  changeCurrency: actions.updateCurrency,
  changeSalaryFrom: actions.updateSalaryFrom,
  changeSalaryTo: actions.updateSalaryTo,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OpportunityStepFour);
