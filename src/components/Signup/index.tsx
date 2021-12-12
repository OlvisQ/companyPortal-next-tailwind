import React from "react";
import { connect } from "react-redux";
import SignupLayout from "@/components/layouts/SignupLayout";
import SignupHeader from "@/components/Signup/SignupHeader";
import SignupFinishHeader from "@/components/Signup/SignupFinishHeader";
import SignupFooter from "@/components/Signup/SignupFooter";
import SignupStepOne from "@/components/Signup/SignupSteps/SignupStepOne";
import SignupStepTwo from "@/components/Signup/SignupSteps/SignupStepTwo";
import SignupStepThree from "@/components/Signup/SignupSteps/SignupStepThree";
import SignupStepFour from "@/components/Signup/SignupSteps/SignupStepFour";
import SignupStepFive from "@/components/Signup/SignupSteps/SignupStepFive";
import SignupSuccessStep from "@/components/Signup/SignupSteps/SignupSuccessStep";

interface CPFromRedux {
  store: {
    signupSteps: number;
  };
}

type Props = {
  signupSteps: number;
};

const Signup: React.FC<Props> = ({ signupSteps }) => {
  let signUpSteps = () => {
    switch (signupSteps) {
      case 1:
        return (
          <>
            <div className="min-h-screen lg:py-36 py-28 lg:px-0 px-4 bg-secondary-light flex">
              <SignupHeader />
              <SignupStepOne />
              <SignupFooter />
            </div>
          </>
        );
      case 2:
        return (
          <>
            <div className="min-h-screen lg:py-36 py-24 lg:px-0 px-4 bg-secondary-light">
              <SignupHeader />
              <SignupStepTwo />
              <SignupFooter />
            </div>
          </>
        );
      case 3:
        return (
          <>
            <div className="min-h-screen lg:py-36 py-24 lg:px-0 px-4 bg-secondary-light">
              <SignupHeader />
              <SignupStepThree />
              <SignupFooter />
            </div>
          </>
        );

      case 4:
        return (
          <>
            <div className="min-h-screen lg:py-36 py-24 lg:px-0 px-4 bg-secondary-light">
              <SignupHeader />
              <SignupStepFour />
              <SignupFooter />
            </div>
          </>
        );
      case 5:
        return (
          <>
            <div className="min-h-screen lg:py-36 py-24 lg:px-0 px-4 bg-secondary-light">
              <SignupHeader />
              <SignupStepFive />
              <SignupFooter />
            </div>
          </>
        );
      case 6:
        return (
          <div className="min-h-screen lg:py-36 py-24 lg:px-0 px-4 bg-secondary-light">
            <SignupFinishHeader />
            <SignupSuccessStep />
            <SignupFooter />
          </div>
        );
      default:
        return (
          <>
            <SignupHeader />
            <SignupFooter />
          </>
        );
    }
  };

  return (
    <SignupLayout title="Setting | Next.js + TypeScript Example">
      {signUpSteps()}
    </SignupLayout>
  );
};

const mapStateToProps = (state: CPFromRedux) => ({
  signupSteps: state.store.signupSteps,
});

export default connect(mapStateToProps)(Signup);
