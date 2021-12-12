import React from "react";
import LoginLayout from "@/components/layouts/LoginLayout";
import ChangePassword from "@/components/Login/ChangePassword";

const ChangePasswordPage: React.FC = () => {
  return (
    <LoginLayout title="Change Password | Next.js + TypeScript Example">
      <ChangePassword />
    </LoginLayout>
  );
};

export default ChangePasswordPage;
