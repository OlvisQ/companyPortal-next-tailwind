import React, { useEffect, useState } from "react";
import InputField from "@/components/Global/InputField";
import DropdownSelect from "@/components/Global/DropdownSelect";
import { connect } from "react-redux";
import Button from "@/components/Global/Button";
import * as userAction from "@/redux/actions/userActions";
import * as companyInfoActions from "@/redux/actions/profileSettingsAction";

interface CPFromRedux {
  store: {
    firstName: string;
    lastName: string;
    companyName: string;
    companyEmployeeSize: string;
    companyEmployeeSizes: string[];
    selectedFieldOfOccupation: string;
    fieldOfOccupations: string[];
  };
}

type Props = {
  firstName: string;
  lastName: string;
  companyName: string;
  companyEmployeeSize: string;
  companyEmployeeSizes: string[];
  selectedFieldOfOccupation: string;
  fieldOfOccupations: string[];
  changeFirstName: (arg: string) => void;
  changeLastName: (arg: string) => void;
  changeCompanyName: (arg: string) => void;
  changeCompanySize: (arg: string) => void;
  changeFieldOfOcc: (arg: string) => void;
};

const CompanyInfo: React.FC<Props> = ({
  firstName,
  lastName,
  companyName,
  companyEmployeeSize,
  companyEmployeeSizes,
  selectedFieldOfOccupation,
  fieldOfOccupations,
  changeFirstName,
  changeLastName,
  changeCompanyName,
  changeCompanySize,
  changeFieldOfOcc,
}) => {
  let [userFirstName, setFirstName] = useState<string>(firstName);
  let [userLastName, setLastName] = useState<string>(lastName);
  let [companyFullName, setCompanyFullName] = useState<string>(companyName);
  let [companySize, setCompanySize] = useState<string>(companyEmployeeSize);
  let [companySizes, setCompanySizes] =
    useState<string[]>(companyEmployeeSizes);
  let [occupiedField, setOccupiedField] = useState<string>(
    selectedFieldOfOccupation
  );
  let [fieldsOfOccupation, setFieldsOfOccupation] =
    useState<string[]>(fieldOfOccupations);

  useEffect(() => {
    setCompanySizes(companySizes);
    setFieldsOfOccupation(fieldsOfOccupation);
  }, []);

  const changeCompanyInfo = () => {
    changeFirstName(userFirstName);
    changeLastName(userLastName);
    changeCompanyName(companyFullName);
    changeCompanySize(companySize);
    changeFieldOfOcc(occupiedField);

    alert('Your changes have been saved!')
  };

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <h1 className="md:text-3xl text-1xl text-titles">Company Information</h1>
        </div>
        <div className="w-full my-6">
          <div className="w-full flex flex-wrap items-center">
            <div className="md:w-1/2 w-full md:mb-0 mb-6  md:pr-3">
              <InputField
                type="text"
                label="first name"
                value={userFirstName}
                onInputChange={(e) =>
                  setFirstName((userFirstName = e.target.value))
                }
              />
            </div>
            <div className="md:w-1/2 w-full md:pl-3">
              <InputField
                type="text"
                label="last name"
                value={userLastName}
                onInputChange={(e) =>
                  setLastName((userLastName = e.target.value))
                }
              />
            </div>
          </div>
        </div>
        <div className="w-full mb-6">
          <div>
            <InputField
              type="text"
              label="company name"
              value={companyFullName}
              onInputChange={(e) =>
                setCompanyFullName((companyFullName = e.target.value))
              }
            />
          </div>
        </div>
        <div className="w-full mb-8">
          <div>
            <DropdownSelect
              label="company size"
              dropDownData={companySizes}
              selectedValue={companySize}
              selectedItem={(item) => setCompanySize(item)}
            />
          </div>
        </div>
        <div className="w-full">
          <div>
            <DropdownSelect
              label="field of occupation"
              dropDownData={fieldsOfOccupation}
              selectedValue={occupiedField}
              selectedItem={(item) => setOccupiedField(item)}
            />
          </div>
        </div>
        <div className="w-full mb-6">
          <div>
            <Button
              text="Save Changes"
              isFullWidth
              onClick={changeCompanyInfo}
            />
          </div>
          <hr className="mb-2 border-secondary-elements"/>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state: CPFromRedux) => ({
  firstName: state.store.firstName,
  lastName: state.store.lastName,
  companyName: state.store.companyName,
  companyEmployeeSize: state.store.companyEmployeeSize,
  companyEmployeeSizes: state.store.companyEmployeeSizes,
  selectedFieldOfOccupation: state.store.selectedFieldOfOccupation,
  fieldOfOccupations: state.store.fieldOfOccupations,
});

const mapDispatchToProps = {
  changeFirstName: userAction.changeFirstName,
  changeLastName: userAction.changeLastName,
  changeCompanyName: companyInfoActions.changeCompanyName,
  changeCompanySize: companyInfoActions.changeCompanySize,
  changeFieldOfOcc: companyInfoActions.changeFieldOfOccupation,
};

export default connect(mapStateToProps, mapDispatchToProps)(CompanyInfo);
