import React, { useState } from "react";
import BottomPanel from "@/components/Global/BottomPanel";
import InputField from "@/components/Global/InputField";

const LoginMob: React.FC = () => {
  const [forgotPassPanel, setForgotPassPanel] = useState<boolean>(false);
  const [changePassPanel, setChangePassPanel] = useState<boolean>(false);
  const [successPassPanel, setSuccessPassPanel] = useState<boolean>(false);

  const renderOverlay = () => {
    if (forgotPassPanel || changePassPanel || successPassPanel) {
      return (
        <div
          className="fixed inset-0 bg-black opacity-70"
          style={{ zIndex: 99999 }}
        ></div>
      );
    }
  };

  return (
    <>
      {renderOverlay()}
      <button
        className="bg-transparent outline-none focus:outline-none text-secondary text-sm"
        onClick={() => setForgotPassPanel(true)}
      >
        Forgot password?
      </button>

      <BottomPanel
        isOpen={forgotPassPanel}
        cancleBtnText="Cancle"
        acceptBtnText="Send password reset link"
        onCancle={() => setForgotPassPanel(false)}
        onAccept={() => {
          setForgotPassPanel(false);
          setChangePassPanel(true);
        }}
        panelTitle="Forgot password"
      >
        <div className="flex flex-wrap self-center w-full">
          <div className="w-full my-16">
            <p className="text-secondary font-sans text-center">
              In order to reset your password. Please type in your E-Mail
              Address down below so we can send you a link to reset your
              password.
            </p>
          </div>
          <div className="w-full">
            <InputField label="e-mail address" />
          </div>
        </div>
      </BottomPanel>

      <BottomPanel
        isOpen={changePassPanel}
        cancleBtnText="Back"
        acceptBtnText="Send password reset link"
        onCancle={() => {
          setForgotPassPanel(true);
          setChangePassPanel(false);
        }}
        onAccept={() => {
          setChangePassPanel(false);
          setSuccessPassPanel(true);
        }}
        panelTitle="Forgot password"
      >
        <div className="flex flex-wrap self-center w-full">
          <div className="w-full mt-16">
            <p className="text-secondary font-sans text-center">
              Please type in down below your new password and confirm it to
              remember it.
            </p>
          </div>
          <div className="w-full my-10">
            <InputField label="new password" type="password" isPassword />
          </div>
          <div className="w-full">
            <InputField
              label="confirm new password"
              type="password"
              isPassword
            />
          </div>
        </div>
      </BottomPanel>

      <BottomPanel
        isOpen={successPassPanel}
        acceptBtnText="Continue"
        onAccept={() => setSuccessPassPanel(false)}
        panelTitle="Forgot password"
        hasCancleButton={false}
      >
        <div className="flex flex-wrap self-center w-full">
          <div className="w-full mt-20">
            <img src="/img/icons/change-password.svg" alt="" className="mx-auto" />
          </div>
          <div className="w-full my-10 text-center">
            <h1 className="text-titles text-1xl">
              Password has been <br />
              successfully changed.
            </h1>
          </div>
        </div>
      </BottomPanel>
    </>
  );
};

export default LoginMob;
