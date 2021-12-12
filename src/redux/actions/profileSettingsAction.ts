import * as t from "@/redux/types";

interface IAboutBenefitsImages {
  id: string | number;
  img: string;
  hasOverlay?: boolean;
}

interface IAboutBenefitsText {
  __html: string;
}

interface ITech {
  id: string | number;
  technology: string;
  technologyBg?: string;
}

interface ILinks {
  id: string | number;
  link: string;
  icon: string;
  label?: string;
}

export const changeCompanyName = (name: string) => ({
  type: t.CHANGE_COMPANY_NAME,
  payload: name,
});

export const changeCompanySize = (size: string) => ({
  type: t.CHANGE_COMPANY_SIZE,
  payload: size,
});

export const changeFieldOfOccupation = (occ: string) => ({
  type: t.CHANGE_FIELD_OF_OCCUPATION,
  payload: occ,
});

export const changeCompanyLocation = (location: string) => ({
  type: t.CHANGE_COMPANY_LOCATION,
  payload: location,
});

export const changeCompanyPostalCode = (code: string) => ({
  type: t.CHANGE_POSTAL_CODE,
  payload: code,
});

export const changeCompanyAddress = (address: string) => ({
  type: t.CHANGE_COMPANY_ADDRESS,
  payload: address,
});

export const changeWorkHoursFrom = (hours: string) => ({
  type: t.CHANGE_WORK_HOURS_FROM,
  payload: hours,
});

export const changeWorkHoursTo = (hours: string) => ({
  type: t.CHANGE_WORK_HOURS_TO,
  payload: hours,
});

export const changeAboutImgOverlay = (overlay: boolean, index: number) => ({
  type: t.CHANGE_ABOUT_OVERLAY,
  payload: {
    overlay,
    index,
  },
});

export const changeAboutImages = (images: IAboutBenefitsImages[]) => ({
  type: t.CHANGE_ABOUT_IMAGES,
  payload: images,
});

export const changeAboutText = (text: IAboutBenefitsText) => ({
  type: t.CHANGE_ABOUT_TEXT,
  payload: text,
});

export const changeBenefitsImgOverlay = (overlay: boolean, index: number) => ({
  type: t.CHANGE_BENEFITS_OVERLAY,
  payload: {
    overlay,
    index,
  },
});

export const changeBenefitsImages = (images: IAboutBenefitsImages[]) => ({
  type: t.CHANGE_BENEFITS_IMAGES,
  payload: images,
});

export const changeBenefitsText = (text: IAboutBenefitsText) => ({
  type: t.CHANGE_BENEFITS_TEXT,
  payload: text,
});

export const changeTechnologies = (technologies: ITech[]) => ({
  type: t.CHANGE_TECHNOLOGIES,
  payload: technologies,
});

export const changeCompanyLinks = (links: ILinks[]) => ({
  type: t.CHANGE_COMPANY_LINKS,
  payload: links,
});
