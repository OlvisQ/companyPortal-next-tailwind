import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { connect } from "react-redux";
import { increaseSignupStep, decreaseSignupStep } from "@/redux/actions/main";

interface CPFromRedux {
  store: {
    signupSteps: number;
    maxSteps: number;
  };
}

type Props = {
  signupSteps: number;
  maxSteps: number;
  increaseSignupStep: (arg: number) => void;
  decreaseSignupStep: (arg: number) => void;
};

const SignupFooter: React.FC<Props> = ({
  signupSteps,
  maxSteps,
  increaseSignupStep,
  decreaseSignupStep,
}) => {
  const rounter = useRouter();
  let initialStep = signupSteps;
  let maxStepss = maxSteps;

  let incrementStep = () => {
    if (initialStep !== maxStepss) {
      increaseSignupStep(initialStep + 1);
    } else {
      increaseSignupStep(initialStep);
    }
  };

  let renderBackButton = () => {
    if (signupSteps === 1) {
      return (
        <>
          <div className="flex">
            <div className="md:block hidden">
              <Link href="/login">
                <span className="text-secondary">Back to Log In</span>
              </Link>
            </div>
            <div className="md:hidden flex items-center justify-center">
              <Link href="/login">
                <span className="text-secondary">Log In</span>
              </Link>
            </div>
          </div>
        </>
      );
    } else if (signupSteps < 6) {
      return (
        <div className="flex">
          <button
            className="bg-transparent outline-none focus:outline-none text-secondary"
            onClick={() => decreaseSignupStep(initialStep - 1)}
          >
            Back
          </button>
        </div>
      );
    } else {
      return <span></span>;
    }
  };

  const goToHome = () => {
    decreaseSignupStep(1);
    rounter.push("/");
  };

  let renderNextButton = () => {
    if (signupSteps < 6) {
      return (
        <>
          <button
            className="bg-primary text-white md:px-16 px-8 md:py-3 py-2 rounded-lg md:mx-auto outline-none focus:outline-none h-1xl md:w-auto w-full"
            onClick={incrementStep}
          >
            Next
          </button>
        </>
      );
    } else {
      return (
        <>
          <button
            className="bg-primary text-white md:px-16 px-8 md:py-3 py-2 rounded-lg md:mx-auto outline-none focus:outline-none h-1xl w-full"
            onClick={goToHome}
          >
            Continue
          </button>
        </>
      );
    }
  };

  return (
    <>
      <footer
        className="bg-white py-5 fixed bottom-0 left-0 right-0 md:px-0 px-4"
        style={{ zIndex: 9999999 }}
      >
        <div className="container mx-auto">
          <div className="flex items-center w-full">
            <div className="lg:w-1/3 w-full ml-auto">{renderBackButton()}</div>
            <div className="md:w-1/2 flex justify-center">
              <div className="flex">
                {renderNextButton()}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

const mapStateToProps = (state: CPFromRedux) => ({
  signupSteps: state.store.signupSteps,
  maxSteps: state.store.maxSteps,
});

const mapDispatchToProps = {
  increaseSignupStep: increaseSignupStep,
  decreaseSignupStep: decreaseSignupStep,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupFooter);
