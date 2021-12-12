import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import InputField from "@/components/Global/InputField";
import Button from "@/components/Global/Button";

const ForgotPassword: React.FC = () => {
  const router = useRouter();
  let [password, changePassword] = useState("");
  let [confirmPassword, changeConfirmPassword] = useState("");
  let [passwordCheck, checkPassword] = useState("");

  const alterPassword = (
    e:
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLInputElement>
  ) => changePassword((password = e.target.value));
  const alterConfirmPassword = (
    e:
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLInputElement>
  ) => changeConfirmPassword((confirmPassword = e.target.value));

  const validatePassword = () => {
    if (password !== confirmPassword) {
      checkPassword(
        (passwordCheck =
          "Confirmed password did not matched with the new password")
      );
    }
  };

  const validateOnEnter = (
    e:
      | React.KeyboardEvent<HTMLTextAreaElement>
      | React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.keyCode === 13) {
      if (password == "" || confirmPassword == "") {
        checkPassword((passwordCheck = "Please set a new password"));
      } else if (password !== confirmPassword) {
        checkPassword(
          (passwordCheck =
            "Confirmed password did not matched with the new password")
        );
      } else {
        router.push("/login/password-changed");
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
            Please type in down below your new password and confirm it to
            remember it.
          </p>

          <div className="flex flex-wrap">
            <InputField
              label="new password"
              type="password"
              value={password}
              onInputChange={alterPassword}
              onEnterPress={validateOnEnter}
              classNames="mb-10"
            />

            <InputField
              label="confirm new password"
              type="password"
              value={confirmPassword}
              onInputChange={alterConfirmPassword}
              onEnterPress={validateOnEnter}
              errorMessage={passwordCheck}
            />

            <div className="w-full -mb-12">
              <Button text="submit" onClick={validatePassword} />
            </div>
            <div className="w-full">
              <Link href="/login/forgot-password">
                <Button
                  text="Back"
                  isTransparent={true}
                  classNames="text-secondary"
                />
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
