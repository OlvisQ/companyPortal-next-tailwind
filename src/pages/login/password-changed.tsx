import React from "react";
import LoginLayout from "@/components/layouts/LoginLayout";
import PasswordChanged from "@/components/Login/PasswordChanged";

const PasswordChangedPage: React.FC = () => {
  return (
    <React.Fragment>
      <LoginLayout title="Password Changed | Next.js + TypeScript Example">
        <PasswordChanged />
      </LoginLayout>
    </React.Fragment>
  );
};

export default PasswordChangedPage;
