import * as t from "@/redux/types";

export const changeUserPassword = (password: string) => ({
  type: t.CHANGE_USER_PASSWORD,
  payload: password,
});
