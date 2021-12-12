import React from "react";

type Props = {
  msg: string;
  profile_img: string;
};

const ReceivedMsg: React.FC<Props> = ({ msg, profile_img }) => {
  return (
    <>
      <div className="lg:w-10/12 w-full">
        <p
          className="text-titles font-sans bg-secondary-light2 p-5 lg:ml-8 ml-4 mt-8"
          style={{ borderRadius: "30px" }}
        >
          <div className="lg:hidden flex items-center justify-center w-14 h-14 bg-white rounded-full -mt-10 -ml-10">
            <div className="w-12 h-12 flex items-center justify-center rounded-full avatar-border bg-white z-10">
              <img src={profile_img} alt="" className="h-10 w-10 rounded-full" />
            </div>
          </div>
          <div className="w-14 h-14 lg:flex hidden items-center justify-center rounded-full avatar-border bg-white -mt-10 -ml-10">
            <img src={profile_img} alt="" className="w-12 h-12 rounded-full" />
          </div>
          {msg}
        </p>
      </div>
    </>
  );
};

export default ReceivedMsg;
