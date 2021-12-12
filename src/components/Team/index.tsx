import React, { useState } from "react";
import Layout from "@/components/layouts/Layout";
import Button from "@/components/Global/Button";
import TeamTabs from "@/components/Team/TeamTabs";
import AddNewMemberPanel from "@/components/Team/AddNewMemberPanel";

const Team: React.FC = () => {
  const [openNewMemberPanel, setOpenNewMemberPanel] = useState<boolean>(false);

  return (
    <>
      <Layout title="Team | GetHired Company">
        <div className="min-h-screen py-20 bg-secondary-light">
          <div className="flex flex-wrap justify-between lg:px-6 px-4 items-center">
            <div className="lg:w-auto w-full">
              <h1 className="text-titles text-3xl">Overview of Team</h1>
            </div>
            <div className="lg:w-auto w-full">
              <Button
                text="+ Add new Member"
                classNames="px-6"
                onClick={() => setOpenNewMemberPanel(true)}
              />
            </div>
            <div className="w-full">
              <TeamTabs />
            </div>
          </div>
          <AddNewMemberPanel
            isPanelOpen={openNewMemberPanel}
            onCancelClick={() => setOpenNewMemberPanel(false)}
            onAcceptClick={() => setOpenNewMemberPanel(false)}
          />
        </div>
      </Layout>
    </>
  );
};

export default Team;
