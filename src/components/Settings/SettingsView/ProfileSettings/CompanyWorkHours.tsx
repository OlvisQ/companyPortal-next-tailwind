import React, { useState } from "react";
import DropdownSelect from "@/components/Global/DropdownSelect";
import * as actions from "@/redux/actions/profileSettingsAction";
import Button from "@/components/Global/Button";
import { connect } from "react-redux";

interface ICPFromRedux {
  store: {
    companyWorkHoursFrom: string;
    companyWorkHoursFromSelection: string[];
    companyWorkHoursTo: string;
    companyWorkHoursToSelection: string[];
  };
}

type Props = {
  workHoursFrom: string;
  workHoursFromSelection: string[];
  workHoursTo: string;
  workHoursToSelection: string[];
  changeHoursFrom: (arg: string) => void;
  changeHoursTo: (arg: string) => void;
};

const CompanyWorkHours: React.FC<Props> = ({
  workHoursFrom,
  workHoursFromSelection,
  workHoursTo,
  workHoursToSelection,
  changeHoursFrom,
  changeHoursTo,
}) => {
  const [hoursFrom, setHoursFrom] = useState<string>(workHoursFrom);
  const [hoursTo, setHoursTo] = useState<string>(workHoursTo);

  const changeWorkHours = () => {
    changeHoursFrom(hoursFrom);
    changeHoursTo(hoursTo);
    alert("Your changes have been saved!");
  };

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <h1 className="md:text-3xl text-1xl text-titles">Office work hours Timezone</h1>
        </div>
        <div className="w-full my-10">
          <DropdownSelect
            label="from timezone"
            dropDownData={workHoursFromSelection}
            selectedItem={(item) => setHoursFrom(item)}
            selectedValue={hoursFrom}
          />
        </div>
        <div className="w-full">
          <DropdownSelect
            label="to timezone"
            dropDownData={workHoursToSelection}
            selectedItem={(item) => setHoursTo(item)}
            selectedValue={hoursTo}
          />
        </div>
        <div className="w-full">
          <Button text="Save Changes" onClick={changeWorkHours} />
          <hr className="border-secondary-elements mb-10" />
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state: ICPFromRedux) => ({
  workHoursFrom: state.store.companyWorkHoursFrom,
  workHoursTo: state.store.companyWorkHoursTo,
  workHoursFromSelection: state.store.companyWorkHoursFromSelection,
  workHoursToSelection: state.store.companyWorkHoursToSelection,
});

const mapDispatchToProps = {
  changeHoursFrom: actions.changeWorkHoursFrom,
  changeHoursTo: actions.changeWorkHoursTo,
};

export default connect(mapStateToProps, mapDispatchToProps)(CompanyWorkHours);
