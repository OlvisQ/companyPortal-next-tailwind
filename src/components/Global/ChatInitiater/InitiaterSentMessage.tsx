import React from "react";

type Props = {
  sentMessage?: string;
};

const InitiaterSentMessage: React.FC<Props> = ({ sentMessage }) => {
  return (
    <>
      <div className="w-full flex flex-wrap bg-primary px-6 rounded-bl-4xl rounded-t-4xl py-4 my-6">
        <div className="w-full">
          <p className="text-white font-sans">{sentMessage}</p>
        </div>
      </div>
    </>
  );
};

export default InitiaterSentMessage;
