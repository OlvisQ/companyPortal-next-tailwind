import React, { useState } from "react";
import InputField from "@/components/Global/InputField";
import Button from "@/components/Global/Button";
import cn from "classnames";
import { connect } from "react-redux";
import * as actions from "@/redux/actions/paymentMethodActions";
import Checkbox from "@/components/Global/Checkbox";

interface IPaymentMethod {
  id: string | number;
  isSelected: boolean;
  methodImg: string;
  cardNumber: string;
  firstName: string;
  lastName: string;
  expiryDate: string;
}

interface ICPFromRedux {
  store: {
    toggleAddCardPopup: boolean;
    checkSaveInfo: boolean;
  };
}

type Props = {
  toggleAddCardPopup: boolean;
  toggleAddCard: (arg: boolean) => void;
  checkSaveInfo: boolean;
  addNewCard: (arg: IPaymentMethod) => void;
};

const AddCardPopup: React.FC<Props> = ({
  toggleAddCardPopup,
  toggleAddCard,
  checkSaveInfo,
  addNewCard,
}) => {
  let [firstName, setFirstName] = useState<string>("");
  let [lastName, setLastName] = useState<string>("");
  let [cardNumber, setCardNumber] = useState<string>("");
  let [expiryDate, setExpiryDate] = useState<string>("");
  let [cvv, setCvv] = useState<string>("");

  let [saveInfoForFuture, setSaveInfoForFuture] =
    useState<boolean>(checkSaveInfo);

  const addNewCreditCard = () => {
    const cardToAdd: IPaymentMethod = {
      id: firstName + lastName + cardNumber,
      isSelected: true,
      methodImg: "method-2.png",
      cardNumber,
      firstName,
      lastName,
      expiryDate,
    };

    addNewCard(cardToAdd);
    toggleAddCard(false);
  };

  return (
    <>
      <div
        className={cn(
          "bg-popup-overlay fixed w-full inset-0 cool-transition top-0",
          {
            "left-0": toggleAddCardPopup,
            "-left-full": !toggleAddCardPopup,
          }
        )}
        style={{ zIndex: 999999999999995 }}
      ></div>
      <div
        className={cn(
          "fixed bg-white top-0 bottom-0 px-4 pt-8 pb-4 lg:w-1/3 w-full cool-transition",
          {
            "right-0": toggleAddCardPopup,
            "-right-full": !toggleAddCardPopup,
          }
        )}
        style={{ zIndex: 999999999999999 }}
      >
        <div className="flex flex-wrap">
          <div className="w-full mb-10">
            <h1 className="text-titles text-3xl">+ Add new Card</h1>
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
          <div className="w-full flex items-center mt-6">
            <Checkbox
              isChecked={saveInfoForFuture}
              onCheck={() =>
                setSaveInfoForFuture((saveInfoForFuture = !saveInfoForFuture))
              }
            />
            <p className="text-secondary text-sm ml-10">
              Save my Payment Information for the next time
            </p>
          </div>
          <div className="flex items-center absolute bottom-0 left-0 right-0 px-4">
            <button
              className="bg-transparent outline-none focus:outline-none text-secondary pl-6 pr-10"
              onClick={() => toggleAddCard(false)}
            >
              Cancel
            </button>
            <Button text="Finish" onClick={() => addNewCreditCard()} />
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state: ICPFromRedux) => ({
  toggleAddCardPopup: state.store.toggleAddCardPopup,
  checkSaveInfo: state.store.checkSaveInfo,
});

const mapDispatchToProps = {
  toggleAddCard: actions.toggleAddCard,
  addNewCard: actions.addNewCard,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCardPopup);
