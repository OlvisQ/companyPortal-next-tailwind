import React from "react";

type Props = {
  match?: string;
  hasImg?: boolean;
  imgUrl?: string;
  firstName: string;
  lastName: string;
  location: string;
};

const TalentHeader: React.FC<Props> = ({
  match,
  hasImg,
  imgUrl,
  firstName,
  lastName,
  location,
}) => {
  return (
    <>
      <div className="flex flex-wrap w-full">
        <div className="w-full flex items-center justify-between">
          <div>
            <h1 className="text-3xl text-titles">Talent Review</h1>
          </div>
          <div>
            <p className="md:text-1xl text-base text-titles">{match} Match</p>
          </div>
        </div>
        <div className="w-full flex flex-wrap items-center my-10">
          <div className="lg:w-1/2 w-full lg:mb-0 mb-6 flex items-center space-x-8">
            <div>
              <div className="w-36 h-36 border border-secondary-elements rounded-full flex items-center justify-center">
                {!hasImg ? (
                  <img src="/img/icons/no-img-icon.svg" alt="" />
                ) : (
                  <img src={imgUrl} alt="" />
                )}
              </div>
            </div>
            <div>
              <div className="mb-5">
                <h2 className="text-secondary uppercase text-xss mb-1">
                  first & last name
                </h2>
                <p className="text-titles md:text-1xl text-base">
                  {firstName} {lastName}
                </p>
              </div>
              <div>
                <h2 className="text-secondary uppercase text-xss mb-1">
                  location
                </h2>
                <p className="text-titles md:text-1xl text-base">{location}</p>
              </div>
            </div>
          </div>
          {!hasImg ? (
            <div className="lg:w-1/2 w-full">
              <p className="font-sans text-secondary text-sm lg:text-left text-center">
                Candidate Full Name and Picture will stay hidden until they
                Accept your invite
              </p>
            </div>
          ) : null}
        </div>
        <div className="w-full">
          <hr className="border-secondary-elements" />
        </div>
      </div>
    </>
  );
};

export default TalentHeader;
