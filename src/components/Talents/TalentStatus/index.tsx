import React from "react";
import TalentHeader from "@/components/Talents/TalentStatus/TalentHeader";
import OppApplyingFor from "@/components/Talents/TalentStatus/OppApplyingFor";
import OpportunityCategory from "@/components/Talents/TalentStatus/OpportunityCategory";
import TalentVOppSkills from "@/components/Talents/TalentStatus/TalentVOppSkills";
import TalentPortfolio from "@/components/Talents/TalentStatus/TalentPortfolio";
import TalentShortBio from "@/components/Talents/TalentStatus/TalentShortBio";
import TalentAchievements from "@/components/Talents/TalentStatus/TalentAchievements";

type Props = {
  hasImg?: boolean;
  imgUrl?: string;
  firstName?: string;
  lastName?: string;
};

const TalentStatus: React.FC<Props> = ({
  hasImg,
  imgUrl,
  firstName = "000",
  lastName = "000",
}) => {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full mb-10">
          <TalentHeader
            firstName={firstName}
            lastName={lastName}
            location="Berlin, Germany"
            match="95%"
            hasImg={hasImg}
            imgUrl={imgUrl}
          />
        </div>
        <div className="w-full mb-10">
          <OppApplyingFor applyingFor="Front-End Developer" />
        </div>
        <div className="w-full mb-10">
          <OpportunityCategory />
        </div>
        <div className="w-full mb-10">
          <TalentVOppSkills />
        </div>
        <div className="w-full mb-10">
          <TalentPortfolio portfolioLink="portfolioo.jimhalpert.com" />
        </div>
        <div className="w-full mb-10">
          <TalentShortBio shortBio="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45BCm making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cities of the word in classical literature, discoverd the undoubtable source. This book is treatise on the theory of ethics, very popular during." />
        </div>
        <div className="w-full">
          <TalentAchievements />
        </div>
      </div>
    </>
  );
};

export default TalentStatus;
