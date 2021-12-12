import React from "react";

type Props = {
  message?: string;
  profilePic?: string;
};

const InitiaterRecievedMessage: React.FC<Props> = ({ message, profilePic }) => {
  return (
    <>
      <div className="w-full flex flex-wrap bg-secondary-light2 px-6 rounded-r-4xl rounded-bl-4xl pb-2">
        <div className="w-16 -ml-12 -mt-10 p-2 bg-white rounded-full">
          <img src={profilePic} alt="" />
        </div>
        <div className="w-full">
          <p className="text-titles font-sans">{message}</p>
        </div>
      </div>
    </>
  );
};

export default InitiaterRecievedMessage;
