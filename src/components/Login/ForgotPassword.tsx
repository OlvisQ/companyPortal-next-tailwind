import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import InputField from "@/components/Global/InputField";
import Button from "@/components/Global/Button";

const ForgotPassword: React.FC = () => {
  const router = useRouter();
  let [email, changeEmail] = useState("");
  let [emailCheck, emailValidation] = useState("");

  const alterEmail = (
    e:
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLInputElement>
  ) => changeEmail((email = e.target.value));

  const checkLogin = () => {
    if (email == "") {
      emailValidation((emailCheck = "* Please enter email"));
    } else {
      router.push("/login/change-password");
    }
  };
  const checkLoginOnEnter = (
    e:
      | React.KeyboardEvent<HTMLTextAreaElement>
      | React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.keyCode === 13) {
      if (email == "") {
        emailValidation((emailCheck = "* Please enter email"));
      } else {
        router.push("/login/change-password");
      }
    }
  };
  return (
    <React.Fragment>
      <div className="app-bg lg:h-screen h-full flex">
        <div className="lg:w-1/3 w-full px-6 pb-12">
          <img src="/img/login-logo.svg" alt="" className="mx-auto my-20" />
          <p className="text-titles text-center text-3xl my-20">
            Forgot Password
          </p>
          <p className="text-secondary text-center font-sans text-sm leading-6 my-24">
            In order to reset your password. Please type in your E-Mail Address
            down below so we can send you a link to reset your password.
          </p>

          <div className="flex flex-wrap">
            <InputField
              label="e-mail address"
              type="text"
              onInputChange={alterEmail}
              onEnterPress={checkLoginOnEnter}
              value={email}
              errorMessage={emailCheck}
            />
            <div className="w-full -mb-12">
              <Button text="Send password reset link" onClick={checkLogin} />
            </div>
            <div className="w-full">
              <Link href="/login">
                <Button text="Back to Log in" isTransparent={true} classNames="text-secondary" />
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

export default ForgotPassword;
