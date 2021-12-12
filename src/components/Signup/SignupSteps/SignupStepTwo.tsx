import React from "react";
import InputField from "@/components/Global/InputField";
import ChatInitiater from "@/components/Global/ChatInitiater";
import Button from "@/components/Global/Button";
import * as actions from "@/redux/actions/signupActions";
import { connect } from "react-redux";

interface CPFromRedux {
  store: {
    signupStepTwo: {
      confirmEmail: string;
      confirmCode: string;
    };
  };
}

type Props = {
  confirmEmail: string;
  confirmCode: string;
  changeConfirmEmail: (arg: string) => void;
  changeConfirmCode: (arg: string) => void;
};

const SignupStepTwo: React.FC<Props> = ({
  confirmEmail,
  confirmCode,
  changeConfirmEmail,
  changeConfirmCode,
}) => {

  return (
    <>
      <div className="container mx-auto">
        <div className="flex lg:flex-nowrap flex-wrap items-start">
          <div className="xl:w-1/3 lg:w-1/2 w-full ml-auto lg:mb-0 mb-8">
            <h1 className="text-titles text-3xl mb-12">
              Confirm your email address
            </h1>
            <InputField
              type="text"
              label="e-mail address"
              value={confirmEmail}
              onInputChange={(e) => changeConfirmEmail(e.target.value)}
            />
            <InputField
              type="text"
              label="confirm code"
              classNames="mt-8"
              value={confirmCode}
              onInputChange={(e) => changeConfirmCode(e.target.value)}
            />
            <button className="bg-transparent outline-none focus:outline-none text-primary text-sm w-full flex justify-end mb-8">
              Resend Code
            </button>
            <Button text="Confirm" classNames="mt-0" />
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
  confirmEmail: state.store.signupStepTwo.confirmEmail,
  confirmCode: state.store.signupStepTwo.confirmCode,
});

const mapDispatchToProps = {
  changeConfirmEmail: actions.changeSignupConfirmEmail,
  changeConfirmCode: actions.changeSignupConfirmCode,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupStepTwo);
