import React from "react";
import ChatInitiater from "@/components/Global/ChatInitiater";
import InputField from "@/components/Global/InputField";
import Checkbox from "@/components/Global/Checkbox";
import { connect } from "react-redux";
import * as action from "@/redux/actions/signupActions";

interface CPFromRedux {
  store: {
    signupStepOne: {
      email: string;
      password: string;
      confirmPassword: string;
      areTermsAccepted: boolean;
    };
  };
}

type Props = {
  email: string;
  password: string;
  confirmPassword: string;
  areTermsAccepted: boolean;
  changeEmail: (arg: string) => void;
  changePassword: (arg: string) => void;
  changeConfirmPass: (arg: string) => void;
  changeTermsAccepted: (arg: boolean) => void;
};

const SignupStepOne: React.FC<Props> = ({
  email,
  password,
  confirmPassword,
  areTermsAccepted,
  changeEmail,
  changePassword,
  changeConfirmPass,
  changeTermsAccepted,
}) => {
  return (
    <>
      <div className="container mx-auto">
        <div className="flex lg:flex-nowrap flex-wrap items-start">
          <div className="xl:w-1/3 lg:w-1/2 w-full ml-auto lg:mb-0 mb-8">
            <h1 className="text-titles text-3xl mb-12">Your Information</h1>
            <InputField
              type="text"
              label="e-mail address"
              value={email}
              onInputChange={(e) => changeEmail(e.target.value)}
            />
            <InputField
              type="password"
              label="password"
              isPassword
              classNames="my-8"
              value={password}
              onInputChange={(e) => changePassword(e.target.value)}
            />
            <InputField
              type="password"
              label="confirm password"
              isPassword
              value={confirmPassword}
              onInputChange={(e) => changeConfirmPass(e.target.value)}
            />
            <p className="font-sans text-secondary text-sm mt-7 mb-10">
              Password must be 12 or more characters and contain at least 1
              upper case letter, 1 lower case letter and 1 number.
            </p>
            <div className="flex items-center">
              <Checkbox
                onCheck={(e) => changeTermsAccepted(e.target.checked)}
                isChecked={areTermsAccepted}
              />
              <p className="text-secondary text-sm ml-9">
                I Accept Terms & Services and Privacy Policy.
              </p>
            </div>
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
  email: state.store.signupStepOne.email,
  password: state.store.signupStepOne.password,
  confirmPassword: state.store.signupStepOne.confirmPassword,
  areTermsAccepted: state.store.signupStepOne.areTermsAccepted,
});

const mapDispatchToProps = {
  changeEmail: action.changeSignupEmail,
  changePassword: action.changeSignupPassword,
  changeConfirmPass: action.changeSignupConfirmPassword,
  changeTermsAccepted: action.changeSignupTerms,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupStepOne);
