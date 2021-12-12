import React, { useEffect, useState } from "react";
import RadioButton from "@/components/Global/RadioButton";
import { connect } from "react-redux";
import cn from "classnames";
import * as actions from "@/redux/actions/paymentMethodActions";

interface IPaymentMethod {
  id: string | number;
  isSelected: boolean;
  methodImg: string;
  cardNumber: string;
  expiryDate?: string;
  firstName?: string;
  lastName?: string;
  cvv?: string;
}

interface ICPFromRedux {
  store: {
    paymentMethods: IPaymentMethod[];
  };
}

type Props = {
  paymentMethods: IPaymentMethod[];
  changePaymentMethods: (arg: IPaymentMethod[]) => void;
  updateMethod: (arg: IPaymentMethod) => void;
};

const PaymentCards: React.FC<Props> = ({
  paymentMethods,
  changePaymentMethods,
  updateMethod,
}) => {
  let [methods, setMethods] = useState<IPaymentMethod[]>(paymentMethods);

  const changeMethod = (arg: number) => {
    const updatedMethods: IPaymentMethod[] = [...methods];
    const updateSelectedCard: IPaymentMethod = updatedMethods[arg];
    updatedMethods.forEach((method: IPaymentMethod) => {
      method.isSelected = false;
    });

    updatedMethods[arg].isSelected = true;

    setMethods((methods = updatedMethods));
    changePaymentMethods(methods);

    updateMethod(updateSelectedCard);
  };

  useEffect(() => {
    setMethods(paymentMethods);
  }, []);

  const renderPaymentMethods = methods.map(
    (method: IPaymentMethod, index: number) => {
      if (index < methods.length - 1) {
        return (
          <React.Fragment key={method.id}>
            <div className="w-full flex items-center mb-8">
              <div>
                <RadioButton
                  checkRadio={method.isSelected}
                  onClick={() => changeMethod(index)}
                />
              </div>
              <div className="w-20 rounded flex justify-center items-center h-12 mx-6 shadow-main">
                <img src={`/img/payment-methods/${method.methodImg}`} alt="" />
              </div>
              <p
                className={cn({
                  "text-secondary": !method.isSelected,
                  "text-titles": method.isSelected,
                })}
              >
                {method.cardNumber}
              </p>
            </div>
          </React.Fragment>
        );
      } else {
        return (
          <React.Fragment key={method.id}>
            <div className="w-full flex items-center">
              <div>
                <RadioButton
                  checkRadio={method.isSelected}
                  onClick={() => changeMethod(index)}
                />
              </div>
              <div className="w-20 rounded flex justify-center items-center h-12 mx-6 shadow-main">
                <img src={`/img/payment-methods/${method.methodImg}`} alt="" />
              </div>
              <p
                className={cn({
                  "text-secondary": !method.isSelected,
                  "text-titles": method.isSelected,
                })}
              >
                {method.cardNumber}
              </p>
            </div>
          </React.Fragment>
        );
      }
    }
  );

  return (
    <>
      <div className="flex flex-wrap">{renderPaymentMethods}</div>
    </>
  );
};

const mapStateToProps = (state: ICPFromRedux) => ({
  paymentMethods: state.store.paymentMethods,
});

const mapDispatchToProps = {
  changePaymentMethods: actions.changePaymentMethod,
  updateMethod: actions.updateSelectedMethod,
};

export default connect(mapStateToProps, mapDispatchToProps)(PaymentCards);
