import React from "react";
import Button from "@/components/Global/Button";
import OppTabs from "@/components/Opportunities/OppTabs";
import { useRouter } from "next/router";

const Opportunites: React.FC = () => {
  const router = useRouter();

  const goToCreate = () => {
    router.push("/create-opportunity");
  };

  return (
    <>
      <div className="pt-24 pb-14 px-4 min-h-screen bg-secondary-light">
        <div className="flex flex-wrap items-center">
          <div className="lg:w-1/2 w-full">
            <h1 className="text-titles text-3xl">Overview of Opportunities</h1>
          </div>
          <div className="lg:w-1/2 w-full flex justify-end">
            <Button
              text="+ Create new Opportunity"
              isFullWidth={false}
              classNames="px-6 lg:w-auto w-full"
              onClick={goToCreate}
            />
          </div>

          <div className="w-full">
            <OppTabs />
          </div>
        </div>
      </div>
    </>
  );
};

export default Opportunites;
