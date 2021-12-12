import React from "react";
import DropdownSelect from "@/components/Global/DropdownSelect";
import ChatInitiater from "@/components/Global/ChatInitiater";
import * as actions from "@/redux/actions/signupActions";
import { connect } from "react-redux";

interface CPFromRedux {
  store: {
    signupStepFour: {
      companyFieldsOfOccupation: string[];
      companySelectedFieldOfOccupation: string;
    };
  };
}

type Props = {
  companyFieldsOfOccupation: string[];
  companySelectedFieldOfOccupation: string;
  changeFieldOfOccupation?: (arg: string) => void;
};

const SignupStepFour: React.FC<Props> = ({
  companyFieldsOfOccupation,
  companySelectedFieldOfOccupation,
  changeFieldOfOccupation,
}) => {
  return (
    <>
      <div className="container mx-auto">
        <div className="flex lg:flex-nowrap flex-wrap items-start">
          <div className="xl:w-2/5 lg:w-1/2 w-full ml-auto lg:mb-0 mb-8">
            <h1 className="text-titles text-3xl mb-12">
              Company's field of Occupation.
            </h1>
            <DropdownSelect
              label="field of occupation"
              dropDownData={companyFieldsOfOccupation}
              selectedItem={(value) =>
                changeFieldOfOccupation !== undefined
                  ? changeFieldOfOccupation(value)
                  : null
              }
              selectedValue={companySelectedFieldOfOccupation}
            />
          </div>
          <div className="xl:w-1/2 w-2/3 lg:flex hidden justify-center">
            <ChatInitiater
              classNames="w-1/2 p-0"
              headerWidth="w-full"
              initiaterInfoWidth="w-1/2 ml-6"
              imgWidth="w-1/3"
            />
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state: CPFromRedux) => ({
  companyFieldsOfOccupation:
    state.store.signupStepFour.companyFieldsOfOccupation,
  companySelectedFieldOfOccupation:
    state.store.signupStepFour.companySelectedFieldOfOccupation,
});

const mapDispatchToProps = {
  changeFieldOfOccupation: actions.changeSignupFieldOfOccupation,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupStepFour);
