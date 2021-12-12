import React from "react";
import PaymentCards from "@/components/Settings/SettingsView/PaymentSettings/PaymentCards";
import CardView from "@/components/Settings/SettingsView/PaymentSettings/CardView";

const PaymentSettings: React.FC = () => {
  return (
    <>
      <div className="flex flex-wrap w-full">
        <div className="w-full mb-6">
          <h1 className="md:text-3xl text-1xl text-titles">Payment Methods</h1>
        </div>
        <div className="w-full px-6 py-10 rounded-xl shadow-main flex flex-wrap items-center bg-white">
          <div className="md:w-1/2 w-full">
            <PaymentCards />
          </div>
          <div className="w-full md:hidden block mb-10 mt-16">
            <hr className="border-secondary-elements" />
          </div>
          <div className="xl:w-2/5 md:w-1/2 w-full md:pl-6 xl:pl-0 pl-0">
            <CardView />
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentSettings;
