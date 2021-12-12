import React from "react";
import DropdownSelect from "@/components/Global/DropdownSelect";
import * as actions from "@/redux/actions/createOpportunityActions";
import { connect } from "react-redux";

interface ICPFromRedux {
  store: {
    createOpportunity: {
      talentLocations: string[];
      selectedTalentLocation: string;
      talentWorkHours: string[];
      selectedWorkHoursFrom: string;
      selectedWorkHoursTo: string;
    };
  };
}

type Props = {
  talentLocations: string[];
  selectedTalentLocation: string;
  talentWorkHours: string[];
  selectedWorkHoursFrom: string;
  selectedWorkHoursTo: string;
  changeTalentLocation: (arg: string) => void;
  changeWorkHoursFrom: (arg: string) => void;
  changeWorkHoursTo: (arg: string) => void;
};

const OpportunityStepFive: React.FC<Props> = ({
  talentLocations,
  selectedTalentLocation,
  talentWorkHours,
  selectedWorkHoursFrom,
  selectedWorkHoursTo,
  changeTalentLocation,
  changeWorkHoursFrom,
  changeWorkHoursTo,
}) => {
  return (
    <>
      <div className="flex flex-wrap lg:w-1/2 w-full">
        <div className="w-full mb-8">
          <h1 className="text-titles text-3xl mb-3">Talent Location</h1>
          <p className="text-secondary text-sm font-sans">
            Please select location of wanted talents to apply
          </p>
        </div>
        <div className="w-full mb-12">
          <DropdownSelect
            label="talent location"
            dropDownData={talentLocations}
            selectedItem={(item) => changeTalentLocation(item)}
            selectedValue={selectedTalentLocation}
          />
        </div>
        <div className="w-full mb-12">
          <h1 className="text-titles text-3xl mb-3">
            Talent Work hours Timezone
          </h1>
          <p className="text-secondary text-sm font-sans">
            Please select range of preferable timezones of your working hours.
          </p>
        </div>
        <div className="w-full mb-10">
          <DropdownSelect
            label="from timezone"
            dropDownData={talentWorkHours}
            selectedValue={selectedWorkHoursFrom}
            selectedItem={(item) => changeWorkHoursFrom(item)}
          />
        </div>
        <div className="w-full">
          <DropdownSelect
            label="to timezone"
            dropDownData={talentWorkHours}
            selectedValue={selectedWorkHoursTo}
            selectedItem={(item) => changeWorkHoursTo(item)}
          />
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state: ICPFromRedux) => ({
  talentLocations: state.store.createOpportunity.talentLocations,
  selectedTalentLocation: state.store.createOpportunity.selectedTalentLocation,
  talentWorkHours: state.store.createOpportunity.talentWorkHours,
  selectedWorkHoursFrom: state.store.createOpportunity.selectedWorkHoursFrom,
  selectedWorkHoursTo: state.store.createOpportunity.selectedWorkHoursTo,
});

const mapDispatchToProps = {
  changeTalentLocation: actions.updateTalentLocation,
  changeWorkHoursFrom: actions.updateWorkHoursFrom,
  changeWorkHoursTo: actions.updateWorkHoursTo,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OpportunityStepFive);
