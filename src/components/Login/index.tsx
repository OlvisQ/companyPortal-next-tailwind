import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import InputField from "@/components/Global/InputField";
import Button from "@/components/Global/Button";
import LoginMob from "@/components/Login/LoginMob";

const MainLogin: React.FC = () => {
  const router = useRouter();
  let [email, changeEmail] = useState("");
  let [password, changePassword] = useState("");
  let [emailCheck, emailValidation] = useState("");
  let [passwordCheck, passwordValidation] = useState("");

  const alterEmail = (
    e:
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLInputElement>
  ) => changeEmail((email = e.target.value));
  const alterPassword = (
    e:
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLInputElement>
  ) => changePassword((password = e.target.value));

  const checkLogin = () => {
    if (email == "" || password == "") {
      emailValidation((emailCheck = "* Please enter email"));
      passwordValidation((passwordCheck = "* Please enter password"));
    } else {
      router.push("/");
    }
  };
  const loginOnEnter = (
    e:
      | React.KeyboardEvent<HTMLTextAreaElement>
      | React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.keyCode === 13) {
      if (email == "" || password == "") {
        emailValidation((emailCheck = "* Please enter email"));
        passwordValidation((passwordCheck = "* Please enter password"));
      } else {
        router.push("/");
      }
    }
  };

  return (
    <React.Fragment>
      <div className="bg-secondary-light min-h-screen flex flex-wrap">
        <div className="lg:w-1/3 w-full px-6 pb-12 flex flex-col relative">
          <img
            src="/img/login-logo.svg"
            alt=""
            className="mx-auto mt-12 xl:mb-20 mb-12"
          />
          <p className="text-titles text-center text-3xl mb-2">Log in</p>
          <p className="text-secondary text-center text-xs uppercase xl:mb-20 mb-12">
            as talent
          </p>
          <p className="text-secondary text-center font-sans leading-66 xl:mb-36 mb-16">
            Welcome to recruitment SaaS platform that puts the candidates in the
            technological sector at the centre of the process and removes the
            need for a recruitment agent.
          </p>

          <div className="flex flex-wrap xl:-mt-10 xl:mb-16">
            <InputField
              label="e-mail address"
              type="text"
              onEnterPress={loginOnEnter}
              onInputChange={alterEmail}
              value={email}
              errorMessage={emailCheck}
              classNames="mb-8"
            />

            <InputField
              label="password"
              type="password"
              onEnterPress={loginOnEnter}
              onInputChange={alterPassword}
              value={password}
              errorMessage={passwordCheck}
              classNames="mb-4"
            />
          </div>
          <div className="flex flex-wrap">
            <div className="w-1/2 flex items-center">
              <input type="checkbox" className="mr-2 h-5 w-5" />
              <span className="text-sm text-secondary">Remember me</span>
            </div>
            <div className="w-1/2 text-right sm:block hidden">
              <Link href="/login/forgot-password">
                <span className="text-sm text-secondary cursor-pointer">
                  Forgot password?
                </span>
              </Link>
            </div>
            <div className="w-1/2 text-right sm:hidden block">
              <LoginMob />
            </div>
            <div className="w-full -mb-12">
              <Button text="Log in" onClick={checkLogin} />
            </div>
            <div className="w-full -mb-10">
              <Link href="/sign-up">
                <Button
                  text="Sign up"
                  isTransparent={true}
                  classNames="text-secondary"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="lg:w-2/3 lg:flex hidden login-img rounded-bl-200px overflow-hidden">
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

export default MainLogin;
