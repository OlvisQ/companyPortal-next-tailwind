import React, { useEffect, useState } from "react";
import DisplayCard from "@/components/Global/DisplayCard";
import Slider from "react-slick";

const ProfileOpportunities: React.FC = () => {
  let [sliderSettings, setSliderSettings] = useState<object>({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: "profile-opts-dots",
  });

  useEffect(() => {
    setSliderSettings(sliderSettings);
  }, []);

  return (
    <>
      <div className="container mx-auto lg:px-5 px-4 mt-6 py-8">
        <div className="lg:w-1/2 mx-auto flex flex-wrap border-b border-secondary-elements pb-10">
          <div className="w-full md:mb-4 mb-8">
            <h1 className="text-1xl">
              (<span className="text-primary">3</span>) Open Opportunities of
              Pixels & Graphs
            </h1>
          </div>
        </div>
        <div className="w-3/4 lg:flex hidden ml-auto mt-10">
          <div className="w-card-width pr-4">
            <DisplayCard
              cardCompany="/img/companies/pixel-&-graph-small.svg"
              cardTitle="Pixels & Graphs"
              cardRemainingTime="12 days remaining"
              cardJobTitle="Front-End Developer"
              cardJobMatch="75% Match"
              cardHighlightSkill="Web, Mobile & Software Development"
            />
          </div>
          <div className="w-card-width px-4">
            <DisplayCard
              cardCompany="/img/companies/pixel-&-graph-small.svg"
              cardTitle="Pixels & Graphs"
              cardRemainingTime="12 days remaining"
              cardJobTitle="Back-End Developer"
              cardJobMatch="40% Match"
              cardHighlightSkill="Web, Mobile & Software Development"
            />
          </div>
          <div className="w-card-width pl-4">
            <DisplayCard
              cardCompany="/img/companies/pixel-&-graph-small.svg"
              cardTitle="Pixels & Graphs"
              cardRemainingTime="12 days remaining"
              cardJobTitle="Full-Stack Developer"
              cardJobMatch="31% Match"
              cardHighlightSkill="Web, Mobile & Software Development"
            />
          </div>
        </div>
        <div className="lg:hidden w-full">
          <Slider {...sliderSettings}>
            <div className="p-2">
              <DisplayCard
                cardCompany="/img/companies/pixel-&-graph-small.svg"
                cardTitle="Pixels & Graphs"
                cardRemainingTime="12 days remaining"
                cardJobTitle="Front-End Developer"
                cardJobMatch="75% Match"
                cardHighlightSkill="Web, Mobile & Software Development"
              />
            </div>
            <div className="p-2">
              <DisplayCard
                cardCompany="/img/companies/pixel-&-graph-small.svg"
                cardTitle="Pixels & Graphs"
                cardRemainingTime="12 days remaining"
                cardJobTitle="Back-End Developer"
                cardJobMatch="40% Match"
                cardHighlightSkill="Web, Mobile & Software Development"
              />
            </div>
            <div className="p-2">
              <DisplayCard
                cardCompany="/img/companies/pixel-&-graph-small.svg"
                cardTitle="Pixels & Graphs"
                cardRemainingTime="12 days remaining"
                cardJobTitle="Full-Stack Developer"
                cardJobMatch="31% Match"
                cardHighlightSkill="Web, Mobile & Software Development"
              />
            </div>
          </Slider>
        </div>
        <div className="h-px bg-secondary-elements mx-auto lg:w-1/2 w-full mt-10"></div>
      </div>
    </>
  );
};

export default ProfileOpportunities;
