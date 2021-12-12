import React, { useEffect, useState } from "react";

const SignupHeader: React.FC = () => {
  const [signupSteps, setSignupSteps] = useState<number>(5);

  let signupStepNotifier = () => {
    let steps = [];
    for (let i = 0; i < signupSteps; i++) {
      steps.push(<div className="h-1 bg-primary w-full step" key={i}></div>);
    }
    return steps;
  };

  useEffect(() => {
    setSignupSteps(signupSteps);
  }, []);

  return (
    <>
      <header
        id="signup-header"
        className="w-full shadow-sm bg-white p-6 fixed top-0 left-0"
        style={{ zIndex: 9999999999999 }}
      >
        <div className="flex w-full fixed top-0 left-0 signup-steps">
          {signupStepNotifier()}
        </div>
        <div className="flex items-center">
          <div className="w-full">
            <img src="/img/logo.svg" alt="" />
          </div>
        </div>
      </header>
    </>
  );
};

export default SignupHeader;
