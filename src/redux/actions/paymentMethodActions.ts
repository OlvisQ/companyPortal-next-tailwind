import * as t from "@/redux/types";

interface IPaymentMethod {
  id: string | number;
  isSelected: boolean;
  methodImg: string;
  cardNumber: string;
}

export const changePaymentMethod = (method: IPaymentMethod[]) => ({
  type: t.CHANGE_PAYMENT_METHOD,
  payload: method,
});

export const updateSelectedMethod = (method: IPaymentMethod) => ({
  type: t.CHANGE_SELECTED_METHOD,
  payload: method,
});

export const removeSelectedCard = (card: IPaymentMethod) => ({
  type: t.REMOVE_SELECTED_CARD,
  payload: card,
});

export const toggleAddCard = (toggle: boolean) => ({
  type: t.TOGGLE_ADD_CARD_POPUP,
  payload: toggle,
});

export const toggleEditCard = (toggle: boolean) => ({
  type: t.TOGGLE_EDIT_CARD_POPUP,
  payload: toggle,
});

export const addNewCard = (card: IPaymentMethod) => ({
  type: t.ADD_NEW_CARD,
  payload: card,
});
