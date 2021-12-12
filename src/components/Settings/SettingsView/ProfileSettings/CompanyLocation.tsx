import React, { useState } from "react";
import InputField from "@/components/Global/InputField";
import * as actions from "@/redux/actions/profileSettingsAction";
import { connect } from "react-redux";
import Button from "@/components/Global/Button";

interface ICPFromRedux {
  store: {
    companyLocation: string;
    locationPostalCode: string;
    locationAddress: string;
  };
}

type Props = {
  companyLocation: string;
  locationPostalCode: string;
  locationAddress: string;
  changeLocation: (arg: string) => void;
  changePostalCode: (arg: string) => void;
  changeAddress: (arg: string) => void;
};

const CompanyLocation: React.FC<Props> = ({
  companyLocation,
  locationAddress,
  locationPostalCode,
  changeLocation,
  changePostalCode,
  changeAddress,
}) => {
  let [location, setLocation] = useState<string>(companyLocation);
  let [postalCode, setPostalCode] = useState<string>(locationPostalCode);
  let [address, setAddress] = useState<string>(locationAddress);

  const changeCompanyLocationInfo = () => {
    changeLocation(location);
    changePostalCode(postalCode);
    changeAddress(address);

    alert("Your changes have been saved!");
  };

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full flex items-center justify-between">
          <h1 className="text-titles md:text-3xl text-1xl">Company Location</h1>
          <button className="bg-transparent outline-none focus:outline-none text-primary text-sm md:block hidden">
            + Add another Company Location
          </button>
        </div>
        <div className="w-full md:mt-10 mt-6 md:mb-6 mb-0">
          <InputField
            label="company loaction"
            value={location}
            onInputChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="w-full flex md:flex-nowrap flex-wrap md:space-x-5 md:my-0 my-6">
          <div className="md:w-1/5 w-1/3">
            <InputField
              label="postal code"
              value={postalCode}
              onInputChange={(e) => setPostalCode(e.target.value)}
            />
          </div>
          <div className="w-2/3 md:pl-0 pl-5">
            <InputField
              label="address"
              value={address}
              onInputChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="md:w-auto w-full md:mt-0 mt-6">
            <button className="outline-none focus:outline-none bg-secondary-light2 text-primary text-sm h-52px md:w-20 flex items-center justify-center rounded-lg w-full">
              Search
            </button>
          </div>
        </div>
        <div className="w-full md:hidden block">
          <button className="bg-transparent outline-none focus:outline-none text-primary text-sm">
            + Add another Company Location
          </button>
        </div>
        <div className="w-full">
          <Button
            text="Save Changes"
            isFullWidth
            onClick={changeCompanyLocationInfo}
          />
          <hr className="border-secondary-elements mb-10" />
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state: ICPFromRedux) => ({
  companyLocation: state.store.companyLocation,
  locationAddress: state.store.locationAddress,
  locationPostalCode: state.store.locationPostalCode,
});

const mapDispatchToProps = {
  changeLocation: actions.changeCompanyLocation,
  changePostalCode: actions.changeCompanyPostalCode,
  changeAddress: actions.changeCompanyAddress,
};

export default connect(mapStateToProps, mapDispatchToProps)(CompanyLocation);
