import React, { useState } from "react";
import InputField from "@/components/Global/InputField";
import { connect } from "react-redux";
import * as actions from "@/redux/actions/passwordSettingsActions";
import Button from "@/components/Global/Button";

interface ICPFromRedux {
  store: {
    password: string;
  };
}

type Props = {
  password: string;
  changePassword: (password: string) => void;
};

const PasswordSettings: React.FC<Props> = ({ password, changePassword }) => {
  let [getPassword, setPassword] = useState<string>("");
  let [confirmPass, setConfirmPass] = useState<string>("");

  const updatePassword = (e: any) => {
    setPassword(e.target.value);
  };

  const updateConfrimPassword = (e: any) => {
    setConfirmPass(e.target.value);
  };

  const saveChanges = () => {
    if (getPassword === confirmPass) {
      changePassword(getPassword);
      alert("Password changed successfully!");
    } else {
      alert("New password and confirm password don't match!");
    }
  };

  return (
    <>
      <div className="flex flex-wrap lg:w-2/3 w-full">
        <div className="w-full mb-6">
          <h1 className="text-titles md:text-3xl text-1xl">
            Change or update your Password
          </h1>
        </div>
        <div className="w-full">
          <InputField
            label="current password"
            type="password"
            value={password}
            readOnly
            isPassword
          />
        </div>
        <div className="w-full my-6">
          <InputField
            label="new password"
            type="password"
            value={getPassword}
            onInputChange={(e) => updatePassword(e)}
            isPassword
          />
        </div>
        <div className="w-full">
          <InputField
            label="confirm new password"
            type="password"
            value={confirmPass}
            onInputChange={(e) => updateConfrimPassword(e)}
            isPassword
          />
        </div>
        <div className="w-full">
          <Button text="Save Changes" onClick={saveChanges} />
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state: ICPFromRedux) => ({
  password: state.store.password,
});

const mapDispatchToProps = {
  changePassword: actions.changeUserPassword,
};

export default connect(mapStateToProps, mapDispatchToProps)(PasswordSettings);
