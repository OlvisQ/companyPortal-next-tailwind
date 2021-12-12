import React, { useEffect, useState } from "react";
import GetHiredCard from "@/components/Global/GetHiredCard";
import Button from "@/components/Global/Button";
import { connect } from "react-redux";
import Slider from "react-slick";

interface LatestOpptInterface {
  id: number;
  opportunityName: string;
  match: string;
  reviewTime: string;
}

interface CPFromRedux {
  store: {
    latestTalents: LatestOpptInterface[];
  };
}

type Props = {
  latestTalents: LatestOpptInterface[];
};

const LatestTalent: React.FC<Props> = ({ latestTalents }) => {
  const [sliderSettings, setSliderSettings] = useState<object>({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: "latest-opts-dots",
  });

  useEffect(() => {
    setSliderSettings(sliderSettings);
  }, []);

  const latestOppts = latestTalents.map((oppt: LatestOpptInterface) => {
    return (
      <React.Fragment key={oppt.id}>
        <div className="w-full flex items-center border-b border-secondary-elements py-4">
          <div className="w-1/2">
            <p className="text-sm text-titles">{oppt.opportunityName}</p>
          </div>
          <div className="w-1/4 pl-5">
            <p className="text-sm uppercase text-titles">{oppt.match}</p>
          </div>
          <div className="w-1/4 pl-5">
            <p className="text-xs uppercase text-secondary">
              {oppt.reviewTime}
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  });

  return (
    <>
      <GetHiredCard
        cardTitle="Latest Talents"
        classNames="pb-0 mb-6 lg:block hidden"
      >
        <div className="w-full flex my-4">
          <div className="w-3/4 flex items-end">
            <h1 className="text-3xl text-primary -mb-2">12</h1>
            <div className="flex items-center ml-3">
              <img src="/img/icons/success-arrow.svg" alt="" className="mr-2" />
              <span className="text-xs text-secondary">
                11% growth of last 30 days
              </span>
            </div>
          </div>
          <div className="w-1/4 flex justify-end">
            <img src="/img/icons/group-user-icon.svg" alt="" />
          </div>
        </div>
        <div className="w-full flex mt-4">
          <div className="w-1/2">
            <p className="text-xss text-secondary uppercase">
              oppeortunity name
            </p>
          </div>
          <div className="w-1/4 pl-5">
            <p className="text-xss uppercase text-secondary">match%</p>
          </div>
          <div className="w-1/4 pl-5">
            <p className="text-xss uppercase text-secondary">review time</p>
          </div>
        </div>
        {latestOppts}
        <div className="w-full -mb-4 -mt-6">
          <Button
            text="Show All Applicants"
            isTransparent
            classNames="text-primary mb-4"
          />
        </div>
      </GetHiredCard>
      <div className="lg:hidden flex flex-wrap">
        <div className="w-full">
          <h1 className="text-titles text-1xl">Latest Talents</h1>
        </div>
        <div className="w-full flex my-5">
          <div className="w-3/4 flex items-end">
            <h1 className="text-3xl text-primary -mb-2">12</h1>
            <div className="flex items-center ml-3">
              <img src="/img/icons/success-arrow.svg" alt="" className="mr-2" />
              <span className="text-xs text-secondary">
                11% growth of last 30 days
              </span>
            </div>
          </div>
          <div className="w-1/4 flex justify-end">
            <img src="/img/icons/group-user-icon.svg" alt="" />
          </div>
        </div>
        <div className="w-full mt-5 mb-10 relative">
          <Slider {...sliderSettings}>
            <div className="p-1">
              <div className="w-full flex flex-wrap bg-white rounded-xl p-5 shadow-xl">
                <div className="w-full">
                  <h1 className="text-titles text-1xl">Front-end Developer</h1>
                </div>
                <div className="w-full my-2">
                  <p className="text-titles">95% Match</p>
                </div>
                <div className="w-full">
                  <p className="text-secondary text-xs">16 hours review time</p>
                </div>
              </div>
            </div>
            <div className="p-1">
              <div className="w-full flex flex-wrap bg-white rounded-xl p-5 shadow-xl">
                <div className="w-full">
                  <h1 className="text-titles text-1xl">Front-end Developer</h1>
                </div>
                <div className="w-full my-2">
                  <p className="text-titles">85% Match</p>
                </div>
                <div className="w-full">
                  <p className="text-secondary text-xs">1 day</p>
                </div>
              </div>
            </div>
            <div className="p-1">
              <div className="w-full flex flex-wrap bg-white rounded-xl p-5 shadow-xl">
                <div className="w-full">
                  <h1 className="text-titles text-1xl">Front-end Developer</h1>
                </div>
                <div className="w-full my-2">
                  <p className="text-titles">65% Match</p>
                </div>
                <div className="w-full">
                  <p className="text-secondary text-xs">4 days</p>
                </div>
              </div>
            </div>
            <div className="p-1">
              <div className="w-full flex flex-wrap bg-white rounded-xl p-5 shadow-xl">
                <div className="w-full">
                  <h1 className="text-titles text-1xl">Back-End Developer</h1>
                </div>
                <div className="w-full my-2">
                  <p className="text-titles">55% Match</p>
                </div>
                <div className="w-full">
                  <p className="text-secondary text-xs">28 days</p>
                </div>
              </div>
            </div>
            <div className="p-1">
              <div className="w-full flex flex-wrap bg-white rounded-xl p-5 shadow-xl">
                <div className="w-full">
                  <h1 className="text-titles text-1xl">Back-End Developer</h1>
                </div>
                <div className="w-full my-2">
                  <p className="text-titles">53% Match</p>
                </div>
                <div className="w-full">
                  <p className="text-secondary text-xs">28 days</p>
                </div>
              </div>
            </div>
            <div className="p-1">
              <div className="w-full flex flex-wrap bg-white rounded-xl p-5 shadow-xl">
                <div className="w-full">
                  <h1 className="text-titles text-1xl">Back-End Developer</h1>
                </div>
                <div className="w-full my-2">
                  <p className="text-titles">53% Match</p>
                </div>
                <div className="w-full">
                  <p className="text-secondary text-xs">28 days</p>
                </div>
              </div>
            </div>
          </Slider>
          <button className="bg-transparent outline-none focus:outline-none text-primary text-xs absolute right-4 mt-4">
            Show All Applicants
          </button>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state: CPFromRedux) => ({
  latestTalents: state.store.latestTalents,
});

export default connect(mapStateToProps)(LatestTalent);
