import React from "react";

const AboutSettings: React.FC = () => {
  return (
    <>
      <div className="flex flex-wrap lg:w-2/3 w-full">
        <div className="w-full mb-6 md:block hidden">
          <h1 className="text-3xl text-titles">About GetHired.ai</h1>
        </div>
        <div className="w-full">
          <p className="text-titles">
            GetHiredAI is an innovative hiring solution that has tweaked an
            Artificial Intelligence (AI) algorithm in order to effortlessly
            unite businesses with the most ideal software engineer for
            recruitment.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutSettings;
