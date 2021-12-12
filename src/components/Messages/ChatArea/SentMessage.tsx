import React from "react";

type Props = {
  msg: string;
  profile_img: string;
};

const SentMessage: React.FC<Props> = ({ msg, profile_img }) => {
  return (
    <>
      <div className="w-full flex">
        <div className="lg:pr-24 pr-0 lg:ml-auto flex justify-end w-full">
          <p className="text-white font-sans bg-primary p-5 lg:ml-6 relative mt-8 rounded-t-4xl rounded-bl-4xl">
            <div className="w-14 h-14 lg:flex hidden items center justify-center rounded-full home-shadow absolute -bottom-8 -right-6 bg-white z-10 p-1">
              <img src={profile_img} alt="" className="rounded-full w-2/3" />
            </div>
            {msg}
          </p>
        </div>
      </div>
    </>
  );
};

export default SentMessage;
