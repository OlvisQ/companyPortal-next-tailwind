import * as t from "@/redux/types";

export const changeSignupEmail = (email: string) => ({
  type: t.CHANGE_SIGNUP_EMAIL,
  payload: email,
});

export const changeSignupPassword = (password: string) => ({
  type: t.CHANGE_SIGNUP_PASSWORD,
  payload: password,
});

export const changeSignupConfirmPassword = (confirmPassword: string) => ({
  type: t.CHANGE_SIGNUP_CONFIRM_PASSWORD,
  payload: confirmPassword,
});

export const changeSignupTerms = (terms: boolean) => ({
  type: t.CHANGE_SIGNUP_TERMS,
  payload: terms,
});

export const changeSignupConfirmEmail = (email: string) => ({
  type: t.CHANGE_SIGNUP_CONFIRM_EMAIL,
  payload: email,
});

export const changeSignupConfirmCode = (code: string) => ({
  type: t.CHANGE_SIGNUP_CONFIRM_CODE,
  payload: code,
});

export const changeSignupFirstName = (firstName: string) => ({
  type: t.CHANGE_SIGNUP_FIRSTNAME,
  payload: firstName,
});

export const changeSignupLastname = (lastName: string) => ({
  type: t.CHANGE_SIGNUP_LASTNAME,
  payload: lastName,
});

export const changeSignupCompanyName = (companyName: string) => ({
  type: t.CHANGE_SIGNUP_COMPANY,
  payload: companyName,
});

export const changeSignupCompanySize = (companySize: string) => ({
  type: t.CHANGE_SIGNUP_COMPANYSIZE,
  payload: companySize,
});

export const changeSignupCompanyLocation = (companyLocation: string) => ({
  type: t.CHANGE_SIGNUP_COMPANYLOCATION,
  payload: companyLocation,
});

export const changeSignupPostalCode = (postalCode: string) => ({
  type: t.CHANGE_SIGNUP_POSTALCODE,
  payload: postalCode,
});

export const changeSignupAddress = (address: string) => ({
  type: t.CHANGE_SIGNUP_ADDRESS,
  payload: address,
});

export const changeSignupWebsite = (website: string) => ({
  type: t.CHANGE_SIGNUP_WEBSITE,
  payload: website,
});

export const changeSignupLinkedIn = (linkedIn: string) => ({
  type: t.CHANGE_SIGNUP_LINKEDIN,
  payload: linkedIn,
});

export const changeSignupFacebook = (facebook: string) => ({
  type: t.CHANGE_SIGNUP_FACEBOOK,
  payload: facebook,
});

export const changeSignupInstagram = (instagram: string) => ({
  type: t.CHANGE_SIGNUP_INSTAGRAM,
  payload: instagram,
});

export const changeSignupFieldOfOccupation = (occupation: string) => ({
  type: t.CHANGE_SIGNUP_FIELD_OF_OCCUPATION,
  payload: occupation,
});

export const changeSignupCompanyLogo = (logo: string) => ({
  type: t.CHANGE_SIGNUP_COMPANY_LOGO,
  payload: logo
})
