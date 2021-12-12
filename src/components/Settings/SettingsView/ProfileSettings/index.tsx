import React from "react";
import CompanyInfo from "@/components/Settings/SettingsView/ProfileSettings/CompanyInfo";
import CompanyLocation from "@/components/Settings/SettingsView/ProfileSettings/CompanyLocation";
import CompanyWorkHours from "@/components/Settings/SettingsView/ProfileSettings/CompanyWorkHours";
import CompanyAbout from "@/components/Settings/SettingsView/ProfileSettings/CompanyAbout";
import CompanyBenefits from "@/components/Settings/SettingsView/ProfileSettings/CompanyBenefits";
import CompanyTechnologies from "@/components/Settings/SettingsView/ProfileSettings/CompanyTechnologies";
import CompanyLinks from "@/components/Settings/SettingsView/ProfileSettings/CompanyLinks";

const ProfileSettings: React.FC = () => {
  return (
    <>
      <div className="xl:w-2/3 lg:w-3/4">
        <CompanyInfo />
        <CompanyLocation />
        <CompanyWorkHours />
        <CompanyAbout />
        <CompanyBenefits />
        <CompanyTechnologies />
        <CompanyLinks />
      </div>
    </>
  );
};

export default ProfileSettings;
