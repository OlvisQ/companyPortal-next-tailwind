import React, { useRef } from "react";
import { connect } from "react-redux";
import ChatInitiater from "@/components/Global/ChatInitiater";
import * as actions from "@/redux/actions/signupActions";

interface CPFromRedux {
  store: {
    signupStepFive: {
      companyLogo: string;
    };
  };
}

type Props = {
  companyLogo: string;
  changeCompanyLogo?: (arg: string) => void;
};

const SignupStepFive: React.FC<Props> = ({
  companyLogo,
  changeCompanyLogo,
}) => {
  const fileUploader = useRef<HTMLInputElement | null>(null);

  const removeProfileImg = () => {
    if (changeCompanyLogo !== undefined) {
      changeCompanyLogo("");
    }
  };

  let triggerProfileUploader = () => {
    if (!fileUploader.current) return;
    fileUploader.current.click();
  };

  let changeProfileImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      if (changeCompanyLogo !== undefined) {
        changeCompanyLogo(URL.createObjectURL(img));
      }
    }
  };

  const checkImg = (e: any) => {
    if (e.target.offsetHeight > 200 || e.target.offsetWidth > 200) {
      if (changeCompanyLogo !== undefined) {
        changeCompanyLogo("");
      }
      alert("Please enter a 200/200 resolution image");
    }
  };

  let profileImgRender = () => {
    if (companyLogo === "") {
      return (
        <>
          <button
            className="bg-transparent outline-none focus:outline-none"
            onClick={triggerProfileUploader}
          >
            <img src="/img/icons/camera-icon.svg" alt="" />
          </button>
        </>
      );
    } else {
      return (
        <>
          <div className="mt-6 flex flex-col items-center">
            <img
              src={companyLogo}
              alt=""
              className="rounded-full"
              onLoad={(img) => checkImg(img)}
            />
            <button
              className="text-primary uppercase mt-2 text-xs"
              onClick={removeProfileImg}
            >
              delete picture
            </button>
          </div>
        </>
      );
    }
  };

  return (
    <>
      <div className="container mx-auto">
        <div className="flex flex-wrap items-start">
          <div className="lg:w-1/3 w-full ml-auto lg:mb-0 mb-8 lg:text-left text-center">
            <h1 className="text-3xl text-titles mb-8">Company Logo</h1>
            <div className="flex items-center justify-center signup-profileImg-container my-10 lg:mx-0 mx-auto">
              {profileImgRender()}
            </div>
            <input
              type="file"
              ref={fileUploader}
              name="myImage"
              onChange={changeProfileImage}
              className="hidden"
            />

            <p className="text-secondary font-sans text-sm">
              Up to 2Mb in size. This logo will be published on your profile
            </p>
          </div>
          <div className="xl:w-1/2 w-2/3 lg:flex hidden justify-center">
            <ChatInitiater
              classNames="w-1/2 p-0"
              headerWidth="w-full"
              initiaterInfoWidth="w-1/2 ml-6"
              imgWidth="w-1/3"
            />
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state: CPFromRedux) => ({
  companyLogo: state.store.signupStepFive.companyLogo,
});

const mapDispatchToProps = {
  changeCompanyLogo: actions.changeSignupCompanyLogo,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupStepFive);
