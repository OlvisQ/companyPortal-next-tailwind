import React, { useState } from "react";
import InputField from "@/components/Global/InputField";
import Button from "@/components/Global/Button";
import cn from "classnames";
import { connect } from "react-redux";
import * as actions from "@/redux/actions/paymentMethodActions";

interface IPaymentMethod {
  id: string | number;
  isSelected: boolean;
  methodImg: string;
  cardNumber: string;
  firstName: string;
  lastName: string;
  expiryDate: string;
  cvv?: string;
}

interface ICPFromRedux {
  store: {
    selectedMethod: IPaymentMethod;
    toggleEditCardPopup: boolean;
  };
}

type Props = {
  toggleEditCardPopup: boolean;
  toggleEditCard: (arg: boolean) => void;
  selectedMethod: IPaymentMethod;
  updateSelectedMethod: (arg: IPaymentMethod) => void;
};

const AddCardPopup: React.FC<Props> = ({
  toggleEditCardPopup,
  toggleEditCard,
  selectedMethod,
  updateSelectedMethod,
}) => {
  let [firstName, setFirstName] = useState<string>(selectedMethod.firstName);
  let [lastName, setLastName] = useState<string>(selectedMethod.lastName);
  let [cardNumber, setCardNumber] = useState<string>(selectedMethod.cardNumber);
  let [expiryDate, setExpiryDate] = useState<string>(selectedMethod.expiryDate);
  let [cvv, setCvv] = useState<string | undefined>(selectedMethod.cvv);

  const editCreditCard = () => {
    const cardToEdit: IPaymentMethod = {
      id: firstName + lastName + cardNumber,
      isSelected: true,
      methodImg: "method-2.png",
      cardNumber,
      firstName,
      lastName,
      expiryDate,
    };

    updateSelectedMethod(cardToEdit);
    toggleEditCard(false);
  };

  return (
    <>
      <div
        className={cn(
          "bg-popup-overlay fixed w-full inset-0 cool-transition top-0",
          {
            "left-0": toggleEditCardPopup,
            "-left-full": !toggleEditCardPopup,
          }
        )}
        style={{ zIndex: 999999999999995 }}
      ></div>
      <div
        className={cn(
          "fixed bg-white top-0 bottom-0 px-4 pt-8 pb-4 lg:w-1/3 w-full cool-transition",
          {
            "right-0": toggleEditCardPopup,
            "-right-full": !toggleEditCardPopup,
          }
        )}
        style={{ zIndex: 999999999999999 }}
      >
        <div className="flex flex-wrap">
          <div className="w-full mb-10">
            <h1 className="text-titles text-3xl">Edit Card Details</h1>
          </div>
          <div className="w-full flex flex-wrap">
            <div className="md:w-1/2 md:pr-3 w-full pr-0 md:mb-0 mb-6">
              <InputField
                label="first name"
                value={firstName}
                onInputChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="md:w-1/2 md:pl-3 w-full pl-0">
              <InputField
                label="last name"
                value={lastName}
                onInputChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          <div className="w-full my-8">
            <InputField
              label="card number"
              value={cardNumber}
              onInputChange={(e) => setCardNumber(e.target.value)}
            />
          </div>
          <div className="w-full flex flex-wrap">
            <div className="md:w-1/2 md:pr-3 w-full pr-0 md:mb-0 mb-6">
              <InputField
                label="expiration month"
                value={expiryDate}
                onInputChange={(e) => setExpiryDate(e.target.value)}
                placeHolder="MM/YY"
              />
            </div>
            <div className="md:w-1/2 md:pl-3 w-full pl-0">
              <InputField
                label="cvv"
                value={cvv}
                onInputChange={(e) => setCvv(e.target.value)}
                placeHolder="123"
              />
            </div>
          </div>
          <div className="flex items-center absolute bottom-0 left-0 right-0 px-4">
            <button
              className="bg-transparent outline-none focus:outline-none text-secondary pl-6 pr-10"
              onClick={() => toggleEditCard(false)}
            >
              Cancel
            </button>
            <Button text="Finish" onClick={editCreditCard} />
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state: ICPFromRedux) => ({
  toggleEditCardPopup: state.store.toggleEditCardPopup,
  selectedMethod: state.store.selectedMethod,
});

const mapDispatchToProps = {
  toggleEditCard: actions.toggleEditCard,
  updateSelectedMethod: actions.updateSelectedMethod,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCardPopup);
