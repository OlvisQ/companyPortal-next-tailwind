import React from "react";
import cn from "classnames";

interface IDesc {
  title: string;
  validity: string;
}

interface IPaymentHistory {
  id: string | number;
  description: IDesc;
  paymentID: string;
  method: string;
  date: string;
  amount: string;
  status: string;
}

type Props = {
  paymentHistory: IPaymentHistory;
};

const PaymentBodyRow: React.FC<Props> = ({ paymentHistory }) => {
  return (
    <>
      <div className="w-full lg:flex hidden bg-white shadow-main rounded-xl h-20 items-center mb-6">
        <div className="w-1/6 flex flex-col items-center">
          <p className="text-titles">{paymentHistory.description.title}</p>
          <p className="text-secondary text-xs w-full 2xl:pl-12 pl-8">
            {paymentHistory.description.validity}
          </p>
        </div>
        <div className="w-1/6 text-center">
          <p className="text-titles font-sans text-sm">
            {paymentHistory.paymentID}
          </p>
        </div>
        <div className="w-1/6 text-center">
          <p className="text-titles">{paymentHistory.method}</p>
        </div>
        <div className="w-1/6 text-center">
          <p className="text-titles font-sans text-sm">{paymentHistory.date}</p>
        </div>
        <div className="w-1/6 text-center">
          <p className="text-titles text-sm">{paymentHistory.amount}</p>
        </div>
        <div className="w-1/6 flex items-center justify-center">
          <div className="mr-2">
            <div
              className={cn("w-5 h-5 rounded-full", {
                "bg-secondary-yellow":
                  paymentHistory.status.toLocaleLowerCase() === "pending",
                "bg-secondary-green":
                  paymentHistory.status.toLocaleLowerCase() === "completed",
                "bg-secondary-red":
                  paymentHistory.status.toLocaleLowerCase() === "rejected",
              })}
            ></div>
          </div>
          <div>
            <p className="text-sm text-secondary">{paymentHistory.status}</p>
          </div>
        </div>
      </div>
      <div className="lg:hidden flex flex-wrap md:w-1/2 w-full md:px-4">
        <div className="w-full bg-white shadow-main rounded-xl items-center mb-6 px-4 py-6">
          <div className="w-full flex justify-between">
            <div>
              <p className="text-titles">{paymentHistory.description.title}</p>
            </div>
            <div>
              <p className="text-titles">{paymentHistory.method}</p>
            </div>
          </div>
          <div className="w-full flex justify-between my-6">
            <div>
              <p className="text-secondary text-xs">
                {paymentHistory.description.validity}
              </p>
            </div>
            <div>
              <p className="text-titles font-sans text-sm">
                {paymentHistory.paymentID}
              </p>
            </div>
          </div>
          <div className="w-full flex justify-between">
            <div>
              <p className="text-titles font-sans text-sm">
                {paymentHistory.date}
              </p>
            </div>
            <div>
              <p className="text-titles text-sm">{paymentHistory.amount}</p>
            </div>
          </div>
          <div className="w-full my-6">
            <hr className="border-secondary-elements" />
          </div>
          <div className="w-full flex items-center justify-center">
            <div className="mr-2">
              <div
                className={cn("w-5 h-5 rounded-full", {
                  "bg-secondary-yellow":
                    paymentHistory.status.toLocaleLowerCase() === "pending",
                  "bg-secondary-green":
                    paymentHistory.status.toLocaleLowerCase() === "completed",
                  "bg-secondary-red":
                    paymentHistory.status.toLocaleLowerCase() === "rejected",
                })}
              ></div>
            </div>
            <div>
              <p className="text-secondary">{paymentHistory.status}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentBodyRow;
