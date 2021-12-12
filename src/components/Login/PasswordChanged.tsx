import React from "react";
import Link from "next/link";
import Button from "@/components/Global/Button";

const PasswordChanged: React.FC = () => {
  return (
    <React.Fragment>
      <div className="app-bg lg:h-screen h-full flex">
        <div className="lg:w-1/3 w-full px-6 pb-12">
          <img src="/img/login-logo.svg" alt="" className="mx-auto my-20" />

          <p className="text-titles text-center text-3xl my-20">
            Forgot Password
          </p>

          <img
            src="/img/icons/change-password.svg"
            alt=""
            className="mx-auto my-32"
          />

          <p className="text-titles text-center text-xl md:px-16 px-0 my-20">
            Password has been successfully changed.
          </p>

          <div className="flex flex-wrap">
            <div className="w-full">
              <Link href="/">
                <Button text="Continue" />
              </Link>
            </div>
          </div>
        </div>
        <div className="lg:w-2/3 lg:flex hidden login-img">
          <img
            src="/img/login/login-banner.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default PasswordChanged;
