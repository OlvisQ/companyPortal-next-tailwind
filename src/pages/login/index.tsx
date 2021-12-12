import React from "react";
import LoginLayout from "@/components/layouts/LoginLayout";
import MainLogin from "@/components/Login/index";

const Login: React.FC = () => {
  return (
    <LoginLayout title="Login | GetHired">
      <MainLogin />
    </LoginLayout>
  );
};

export default Login;
