import React from "react";
import Link from "next/link";
import { connect } from "react-redux";

interface CPFromRedux {
  store: {
    signupSteps: number;
  };
}

type Props = {
  signupSteps: number;
};

const SignupHeader: React.FC<Props> = ({ signupSteps }) => {
  let signupStepNotifier = () => {
    let steps = [];
    for (let i = 0; i < signupSteps; i++) {
      steps.push(<div className="h-1 bg-primary w-full steps__step" key={i}></div>);
    }
    return steps;
  };

  return (
    <>
      <header
        id="signup-header"
        className="w-full shadow-sm bg-white py-6 px-4 fixed top-0 left-0"
        style={{ zIndex: 9999999999999 }}
      >
        <div className="flex w-full fixed top-0 left-0 steps">
          {signupStepNotifier()}
        </div>
        <div className="flex items-center">
          <div className="w-1/2">
            <img src="/img/logo.svg" alt="" />
          </div>
          <div className="w-1/2 text-right">
            <Link href="/login">
              <a className="text-primary md:text-base text-xs">
                Exit & Continue Later
              </a>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

const mapStateToProps = (state: CPFromRedux) => ({
  signupSteps: state.store.signupSteps,
});

export default connect(mapStateToProps)(SignupHeader);
