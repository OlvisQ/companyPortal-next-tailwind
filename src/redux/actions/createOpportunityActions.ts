import * as t from "@/redux/types";

interface IStepIdentifier {
  id: string | number;
  title: string;
  isActive: boolean;
  completed: boolean;
}

interface ITalentLocation {
  id: string | number;
  title: string;
  icon: string;
}

export const changeCreateOppSideLinks = (links: IStepIdentifier[]) => ({
  type: t.UPDATE_CREATE_OPPORTUNITY_SIDE_LINKS,
  payload: links,
});

export const changeOpportunityType = (type: string) => ({
  type: t.UPDATE_OPPORTUNITY_TYPE,
  payload: type,
});

export const changeOpportunityTitle = (title: string) => ({
  type: t.UPDATE_OPPORTUNITY_TITLE,
  payload: title,
});

export const changeSelectedLocations = (location: ITalentLocation) => ({
  type: t.UPDATE_SELECTED_LOCATIONS,
  payload: location,
});

export const removeSelectedLocation = (location: number) => ({
  type: t.REMOVE_SELECTED_LOCATION,
  payload: location,
});

export const updateOppWhatToDo = (details: string) => ({
  type: t.UPDATE_OPP_WHAT_TO_DO,
  payload: details,
});

export const updateOppDescription = (details: string) => ({
  type: t.UPDATE_OPP_DESCRIPTION,
  payload: details,
});

export const changeOppCat = (cat: string) => ({
  type: t.CHANGE_OPP_CATEGORY,
  payload: cat,
});

export const removeRequiredSkill = (skill: number) => ({
  type: t.REMOVE_REQUIRED_SKILL,
  payload: skill,
});

export const removeBonusSkill = (skill: number) => ({
  type: t.REMOVE_BONUS_SKILL,
  payload: skill,
});

export const updateCurrency = (currency: string) => ({
  type: t.UPDATE_CURRENCY,
  payload: currency,
});

export const updateSalaryFrom = (from: string) => ({
  type: t.UPDATE_SALARY_FROM,
  payload: from,
});

export const updateSalaryTo = (to: string) => ({
  type: t.UPDATE_SALARY_TO,
  payload: to,
});

export const updateTalentLocation = (location: string) => ({
  type: t.UPDATE_TALENT_LOCATION,
  payload: location,
});

export const updateWorkHoursFrom = (hoursFrom: string) => ({
  type: t.UPDATE_WORK_HOURS_FROM,
  payload: hoursFrom,
});

export const updateWorkHoursTo = (hoursTo: string) => ({
  type: t.UPDATE_WORK_HOURS_TO,
  payload: hoursTo,
});
