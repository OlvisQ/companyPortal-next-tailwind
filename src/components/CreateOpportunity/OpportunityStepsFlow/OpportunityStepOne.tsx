import React from "react";
import DropdownSelect from "@/components/Global/DropdownSelect";
import InputField from "@/components/Global/InputField";
import { connect } from "react-redux";
import * as actions from "@/redux/actions/createOpportunityActions";
import IconDropdown from "@/components/Global/IconDropdown";

interface ITalentOfficeLocation {
  id: string | number;
  title: string;
  icon: string;
}

interface ICPFromRedux {
  store: {
    createOpportunity: {
      opportunityTypes: string[];
      opportunityType: string;
      opportunityTitle: string;
      talentOfficeLocations: ITalentOfficeLocation[];
      selectedTalentOfficeLocations: ITalentOfficeLocation[];
    };
  };
}

type Props = {
  opportunityTypes: string[];
  opportunityType: string;
  opportunityTitle: string;
  talentOfficeLocations: ITalentOfficeLocation[];
  selectedTalentOfficeLocations: ITalentOfficeLocation[];
  changeType: (arg: string) => void;
  changeTitle: (arg: string) => void;
  changeLocation: (arg: ITalentOfficeLocation) => void;
  removeLocation: (arg: number) => void;
};

const OpportunityStepOne: React.FC<Props> = ({
  opportunityTypes,
  opportunityType,
  opportunityTitle,
  changeType,
  changeTitle,
  talentOfficeLocations,
  selectedTalentOfficeLocations,
  changeLocation,
  removeLocation,
}) => {
  return (
    <>
      <div className="lg:w-1/2 w-full flex flex-wrap">
        <div className="w-full mb-6">
          <h1 className="text-titles text-3xl mb-3">Opportunity About</h1>
          <p className="text-secondary font-sans text-sm">
            Please write opportunity title and add your office location
          </p>
        </div>
        <div className="w-full mt-6">
          <DropdownSelect
            label="opportunity type"
            dropDownData={opportunityTypes}
            selectedValue={opportunityType}
            selectedItem={(type) => changeType(type)}
          />
        </div>
        <div className="w-full my-10">
          <InputField
            label="opportunity title"
            value={opportunityTitle}
            onInputChange={(e) => changeTitle(e.target.value)}
          />
        </div>
        <div className="w-full">
          <IconDropdown
            label="talent office location"
            dropDownData={talentOfficeLocations}
            selectedValues={selectedTalentOfficeLocations}
            changeSelectedValues={(value) => changeLocation(value)}
            removeSelectedValue={(value) => removeLocation(value)}
          />
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state: ICPFromRedux) => ({
  opportunityTypes: state.store.createOpportunity.opportunityTypes,
  opportunityType: state.store.createOpportunity.opportunityType,
  opportunityTitle: state.store.createOpportunity.opportunityTitle,
  talentOfficeLocations: state.store.createOpportunity.talentOfficeLocations,
  selectedTalentOfficeLocations: state.store.createOpportunity.selectedTalentOfficeLocations,
});

const mapDispatchToProps = {
  changeType: actions.changeOpportunityType,
  changeTitle: actions.changeOpportunityTitle,
  changeLocation: actions.changeSelectedLocations,
  removeLocation: actions.removeSelectedLocation,
};

export default connect(mapStateToProps, mapDispatchToProps)(OpportunityStepOne);
