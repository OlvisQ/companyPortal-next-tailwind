import * as t from "@/redux/types";

export const increaseSignupStep = (step: number) => ({
  type: t.INCREASE_SIGNUP_STEP,
  payload: step,
});

export const decreaseSignupStep = (step: number) => ({
  type: t.DECREASE_SIGNUP_STEP,
  payload: step,
});
