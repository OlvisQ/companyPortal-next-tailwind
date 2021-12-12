import React from "react";
import Layout from "@/components/layouts/Layout";
import AccountSettings from "@/components/Settings";
import SettingsSidebar from "@/components/Settings/SettingsSidebar/index";
import MobSettingView from "@/components/Settings/MobSettingView";

const SettingsPage: React.FC = () => {
  return (
    <>
      <Layout title="Settings | GetHired Company">
        <div className="min-h-screen bg-secondary-light">
          <div className="lg:container px-5 pb-24 lg:pt-32 pt-14">
            <div className="lg:flex hidden">
              <div className="w-1/4">
                <SettingsSidebar />
              </div>
              <div className="xl:w-3/4 lg:w-4/5">
                <AccountSettings />
              </div>
            </div>
            <div className="lg:hidden block w-full">
              <MobSettingView />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default SettingsPage;
