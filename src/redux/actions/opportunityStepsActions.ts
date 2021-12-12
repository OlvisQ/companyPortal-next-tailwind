import * as t from "@/redux/types";

export const increaseOpportunityStep = (step: number) => ({
  type: t.INCREASE_OPPORTUNITY_STEP,
  payload: step
})

export const decreaseOpportunityStep = (step: number) => ({
  type: t.DECREASE_OPPORTUNITY_STEP,
  payload: step
})
