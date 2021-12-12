import React from "react";
import PaymentHistoryTable from "@/components/Settings/SettingsView/PaymentHistorySettings/PaymentHistoryTable";

const PaymentHistorySettings: React.FC = () => {
  return (
    <>
      <div className="flex flex-wrap w-full">
        <div className="lg:block hidden w-full mb-10">
          <h1 className="text-3xl text-titles">Payment History</h1>
        </div>
        <div className="w-full">
          <PaymentHistoryTable />
        </div>
      </div>
    </>
  );
};

export default PaymentHistorySettings;
