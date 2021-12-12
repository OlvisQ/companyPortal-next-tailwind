import React, { useEffect, useState } from "react";

const PaymentHeaderRow: React.FC = () => {
  const [tableHeaders, setTableHeaders] = useState<string[]>([
    "description",
    "payment id",
    "method",
    "date",
    "amount",
    "status",
  ]);

  useEffect(() => {
    setTableHeaders(tableHeaders);
  }, []);

  const renderTableHeaders = tableHeaders.map(
    (header: string, index: number) => {
      return (
        <React.Fragment key={index}>
          <div className="w-1/6 text-center">
            <p className="text-secondary uppercase text-xss">{header}</p>
          </div>
        </React.Fragment>
      );
    }
  );

  return (
    <>
      <div className="w-full lg:flex hidden mb-6">{renderTableHeaders}</div>
    </>
  );
};

export default PaymentHeaderRow;
