import React from "react";

const ReviewLinks: React.FC = () => {
  return (
    <>
      <div className="flex flex-wrap w-full justify-center mb-10">
        <a href="#" className="mr-10">
          <img src="/img/icons/website-icon.svg" alt="" />
        </a>
        <a href="#" className="mr-10">
          <img src="/img/icons/linkedin-icon.svg" alt="" />
        </a>
        <a href="#" className="mr-10">
          <img src="/img/icons/facebook-icon.svg" alt="" />
        </a>
        <a href="#">
          <img src="/img/icons/instagram-icon.svg" alt="" />
        </a>
      </div>
    </>
  );
};

export default ReviewLinks;
