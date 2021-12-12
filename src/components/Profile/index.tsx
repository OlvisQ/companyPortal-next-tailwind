import React from "react";
import ProfileHeader from "@/components/Profile/ProfileHeader";
import ProfileOpportunities from "@/components/Profile/ProfileOpportunities";
import ProfileCompanyInfo from "@/components/Profile/ProfileCompanyInfo";
import ProfileLocation from "@/components/Profile/ProfileLocation";
import ProfileAbout from "@/components/Profile/ProfileAbout";
import ProfileBenefits from "@/components/Profile/ProfileBenefits";
import ProfileTechnologies from "@/components/Profile/ProfileTechnologies";
import ProfileSocialLinks from "@/components/Profile/ProfileSocialLinks";

const Profile: React.FC = () => {
  return (
    <>
      <ProfileHeader />
      <ProfileOpportunities />
      <ProfileCompanyInfo />
      <ProfileLocation />
      <ProfileAbout />
      <ProfileBenefits />
      <ProfileTechnologies />
      <ProfileSocialLinks />
    </>
  );
};

export default Profile;
