import React from "react";
import LoginLayout from "@/components/layouts/LoginLayout";
import ForgotPassword from "@/components/Login/ForgotPassword";

const ForgotPasswordPage: React.FC = () => {
  return (
    <LoginLayout title="Forgot Password | Next.js + TypeScript Example">
      <ForgotPassword />
    </LoginLayout>
  );
};

export default ForgotPasswordPage;
