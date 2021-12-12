import React from "react";
import { connect } from "react-redux";
import * as actions from "@/redux/actions/paymentMethodActions";
import AddCardPopup from "@/components/Global/AddCardPopup";
import EditCardPopup from "@/components/Global/EditCardPopup";

interface IPaymentMethod {
  id: string | number;
  isSelected: boolean;
  methodImg: string;
  cardNumber: string;
  expiryDate?: string;
  firstName?: string;
  lastName?: string;
}

interface ICPFromRedux {
  store: {
    selectedMethod: IPaymentMethod;
  };
}

type Props = {
  selectedMethod: IPaymentMethod;
  removeMethod: (arg: IPaymentMethod) => void;
  toggleAddCard: (arg: boolean) => void;
  toggleEditCard: (arg: boolean) => void;
};

const CardView: React.FC<Props> = ({
  selectedMethod,
  removeMethod,
  toggleAddCard,
  toggleEditCard,
}) => {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full flex md:justify-end justify-start">
          <button
            className="bg-transparent outline-none focus:outline-none text-primary text-sm"
            onClick={() => toggleAddCard(true)}
          >
            + Add a New Card
          </button>
        </div>
        <div className="w-full my-6 relative">
          <div className="absolute lg:right-6 md:right-10 right-6 lg:top-7 sm:top-7 top-4">
            <img
              src={`/img/payment-methods/${selectedMethod.methodImg}`}
              alt=""
            />
          </div>
          <img
            src="/img/payment-methods/credit-card-bg.svg"
            alt=""
            className="h-full w-full"
          />
          <div className="flex flex-wrap absolute w-full lg:bottom-6 lg:left-7 sm:left-7 left-5 bottom-6">
            <div className="w-full mb-2">
              <p className="text-white md:text-base text-sm">
                {selectedMethod.cardNumber}
              </p>
            </div>
            <div className="flex justify-between w-full">
              <p className="text-white md:text-base text-sm">
                {selectedMethod.firstName} {selectedMethod.lastName}
              </p>
              <p className="text-white md:text-base text-sm lg:mr-14 md:mr-24 mr-14">
                {selectedMethod.expiryDate}
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-between">
          <button
            className="bg-transparent outline-none focus:outline-none text-secondary-red text-sm"
            onClick={() => removeMethod(selectedMethod)}
          >
            Remove this Card
          </button>
          <button
            className="bg-transparent outline-none focus:outline-none text-secondary text-sm"
            onClick={() => toggleEditCard(true)}
          >
            Edit Card Details
          </button>
        </div>
      </div>
      <AddCardPopup />
      <EditCardPopup />
    </>
  );
};

const mapStateToProps = (state: ICPFromRedux) => ({
  selectedMethod: state.store.selectedMethod,
});

const mapDispatchToProps = {
  removeMethod: actions.removeSelectedCard,
  toggleAddCard: actions.toggleAddCard,
  toggleEditCard: actions.toggleEditCard,
};

export default connect(mapStateToProps, mapDispatchToProps)(CardView);
