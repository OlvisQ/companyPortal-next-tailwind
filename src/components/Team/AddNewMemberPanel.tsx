import React, { useEffect, useState } from "react";
import cn from "classnames";
import InputField from "@/components/Global/InputField";
import DropdownSelect from "@/components/Global/DropdownSelect";
import CheckBox from "@/components/Global/Checkbox";
import Button from "@/components/Global/Button";
import * as actions from "@/redux/actions/teamActions";
import { connect } from "react-redux";

interface TeamMemberInterface {
  teamMemberImg: string;
  teamMemberName: string;
  teamMemberRole: string;
  teamMemberDateJoined: string;
  teamMemberEmail: string;
}

interface CPFromRedux {
  store: {
    teamMembers: TeamMemberInterface[];
  };
}

type Props = {
  isPanelOpen: boolean;
  onCancelClick?: () => void;
  onAcceptClick?: () => void;
  addTeamMember?: (arg: TeamMemberInterface) => void;
  teamMembers?: TeamMemberInterface[];
};

const AddNewMemberPanel: React.FC<Props> = ({
  isPanelOpen,
  onCancelClick,
  onAcceptClick,
  addTeamMember,
}) => {
  let [firstName, setFirstName] = useState<string>("");
  let [lastName, setLastName] = useState<string>("");
  let [email, setEmail] = useState<string>("");
  const [roles, setRoles] = useState<string[]>([
    "Web Developer",
    "Front-End Developer",
    "Recruitment Agent",
    "Project Manager",
    "Back-End Developer",
  ]);
  let [selectedRole, setSelectedRole] = useState<string>("Please Select");
  let [password, setPassword] = useState<string>("");
  let [confirmPassword, setConfirmPassword] = useState<string>("");
  let [notificationCheck, setNotificationCheck] = useState<boolean>(false);

  const renderOverlay = () => {
    if (isPanelOpen) {
      return (
        <div
          className="bg-titles opacity-80 fixed inset-0"
          style={{ zIndex: 99999999999 }}
        ></div>
      );
    }
  };

  const selectRole = (role: string) => {
    setSelectedRole(role);
  };

  const cancelMemberAddition = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setSelectedRole("Please Select");
    setPassword("");
    setConfirmPassword("");
    setNotificationCheck(false);

    if (onCancelClick !== undefined) {
      onCancelClick();
    }
  };

  const addMember = () => {
    let memberToAdd = {
      teamMemberImg: "/img/messages/user-one.jpeg",
      teamMemberName: firstName + " " + lastName,
      teamMemberRole: selectedRole,
      teamMemberDateJoined: "14/08/2019",
      teamMemberEmail: email,
    };

    if (onAcceptClick !== undefined) {
      onAcceptClick();
    }

    if (addTeamMember !== undefined) {
      addTeamMember(memberToAdd);
    }
  };

  useEffect(() => {
    setRoles(roles);
  }, []);

  return (
    <>
      {renderOverlay()}
      <div
        className={cn(
          "min-h-screen bg-white md:w-new-member-width-panel w-full fixed top-0 bottom-0 px-6 pt-8 cool-transition overflow-scroll pb-32",
          {
            "-right-full": !isPanelOpen,
            "right-0": isPanelOpen,
          }
        )}
        style={{ zIndex: 99999999999 }}
      >
        <h1 className="w-full text-titles text-3xl mb-10">+ Add new Member</h1>
        <div className="flex flex-wrap">
          <div className="lg:w-1/2 w-full lg:pr-2 lg:mb-0 mb-8">
            <InputField
              type="text"
              label="first name"
              onInputChange={(e) => setFirstName((firstName = e.target.value))}
              value={firstName}
            />
          </div>
          <div className="lg:w-1/2 w-full lg:pl-2">
            <InputField
              type="text"
              label="last name"
              onInputChange={(e) => setLastName((lastName = e.target.value))}
              value={lastName}
            />
          </div>
          <div className="w-full mt-8">
            <InputField
              type="text"
              label="e-mail address"
              onInputChange={(e) => setEmail((email = e.target.value))}
              value={email}
            />
          </div>
          <div className="w-full mt-8">
            <DropdownSelect
              label="role"
              dropDownData={roles}
              selectedItem={(value) => selectRole(value)}
              selectedValue={selectedRole}
            />
          </div>
          <div className="w-full mt-8">
            <InputField
              type="password"
              label="password"
              isPassword
              value={password}
              onInputChange={(e) => setPassword((password = e.target.value))}
            />
          </div>
          <div className="w-full mt-8">
            <InputField
              type="password"
              label="confirm password"
              isPassword
              value={confirmPassword}
              onInputChange={(e) =>
                setConfirmPassword((confirmPassword = e.target.value))
              }
            />
          </div>
          <div className="w-full mt-8 flex items-center">
            <CheckBox
              isChecked={notificationCheck}
              onCheck={(e) =>
                setNotificationCheck((notificationCheck = e.target.checked))
              }
            />
            <p className="text-secondary text-sm ml-10">
              Send notitication on member e-mail about their account
            </p>
          </div>
          <div
            className={cn(
              "flex md:w-new-member-width-panel w-full fixed bottom-0 px-6 bg-white cool-transition",
              {
                "-right-full": !isPanelOpen,
                "right-0": isPanelOpen,
              }
            )}
            style={{ zIndex: 9999999999999 }}
          >
            <div>
              <Button
                text="Cancel"
                isTransparent
                classNames="text-secondary pl-6 pr-10"
                onClick={cancelMemberAddition}
              />
            </div>
            <Button
              text="Submit"
              isFullWidth
              classNames="w-full"
              onClick={addMember}
            />
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state: CPFromRedux) => ({
  teamMembers: state.store.teamMembers,
});

const mapDispatchToProps = {
  addTeamMember: actions.addNewTeamMember,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddNewMemberPanel);
