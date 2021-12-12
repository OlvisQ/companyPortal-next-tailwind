import React from "react";
import PaymentHeaderRow from "@/components/Settings/SettingsView/PaymentHistorySettings/PaymentHeaderRow";
import PaymentBodyRow from "@/components/Settings/SettingsView/PaymentHistorySettings/PaymentBodyRow";
import { connect } from "react-redux";

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

interface ICPFromRedux {
  store: {
    histories: IPaymentHistory[];
  };
}

type Props = {
  histories: IPaymentHistory[];
};

const PaymentHistoryTable: React.FC<Props> = ({ histories }) => {
  const renderPaymentHistories = histories.map((history: IPaymentHistory) => {
    return (
      <React.Fragment key={history.id}>
        <PaymentBodyRow paymentHistory={history} />
      </React.Fragment>
    );
  });

  return (
    <>
      <div className="flex flex-wrap w-full">
        <PaymentHeaderRow />
        {renderPaymentHistories}
      </div>
    </>
  );
};

const mapStateToProps = (state: ICPFromRedux) => ({
  histories: state.store.histories,
});

export default connect(mapStateToProps)(PaymentHistoryTable);
