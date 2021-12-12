import * as t from "@/redux/types";

export const changeFirstName = (firstName: string) => ({
  type: t.CHANGE_FIRSTNAME,
  payload: firstName,
});

export const changeLastName = (lastName: string) => ({
  type: t.CHANGE_LASTNAME,
  payload: lastName,
});
