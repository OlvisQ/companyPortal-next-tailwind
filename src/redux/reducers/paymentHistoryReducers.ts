const paymentHistory: object = {
  histories: [
    {
      id: 1,
      description: {
        title: "Subscription",
        validity: "30 days",
      },
      paymentID: "6123RT2",
      method: "Visa",
      date: "14/08/2019",
      amount: "€199.00",
      status: "Pending",
    },
    {
      id: 2,
      description: {
        title: "Subscription",
        validity: "30 days",
      },
      paymentID: "6123RT2",
      method: "Visa",
      date: "14/08/2019",
      amount: "€199.00",
      status: "Completed",
    },
    {
      id: 3,
      description: {
        title: "Subscription",
        validity: "30 days",
      },
      paymentID: "6123RT2",
      method: "Visa",
      date: "14/08/2019",
      amount: "€199.00",
      status: "Rejected",
    },
  ],
};

export default paymentHistory;
