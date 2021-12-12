import React from "react";

const SignupSuccessStep: React.FC = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="flex lg:flex-nowrap flex-wrap items-center px-0 lg:px-4 xl:px-0">
          <div className="xl:w-2/5 lg:w-1/2 w-full ml-auto lg:mb-0 mb-8">
            <h1 className="text-titles text-3xl mb-12">
              Congratulations!
            </h1>
            <h2 className="text-titles text-3xl mb-12">
              You've submitted your <br className="sm:block hidden"/> Company Profile
            </h2>
            <p className="text-titles text-1xl mb-12">Good luck and we hope you find a perfect Candidate for your business!</p>
            <p className="text-secondary font-sans mb-8 text-sm"><span className="font-gilroy">Attention:</span> You have to Review every Application and you have 7 days to respond to it. By Reviweing you need to Approve or Reject wanted Applicant. If you Approve Applicant, you both are going into Chat. If you Reject it, you have to writte a short reason why you are rejecting the Applicant.</p>
            <p className="text-secondary text-sm font-sans">As soon Candidate applies, the Applicant will appear under ‘Applicants’ page where you can Review them.</p>
          </div>
          <div className="xl:w-1/2 w-2/3 lg:flex hidden justify-end">
            <img src="/img/signup/success-vector.svg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupSuccessStep;
