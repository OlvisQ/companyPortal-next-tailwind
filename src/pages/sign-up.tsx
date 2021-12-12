import React from "react";
import Signup from "@/components/Signup/index";
import SignupLayout from "@/components/layouts/SignupLayout";

const SignupPage: React.FC = () => {
  return (
    <>
      <SignupLayout title="Sign up | GetHired">
        <Signup />
      </SignupLayout>
    </>
  );
};

export default SignupPage;
