import * as t from "@/redux/types";
import opportunitiesData from "@/redux/reducers/opportunitiesReducer";
import userInfoReducer from "@/redux/reducers/userInfoReducer";
import latestTalentsReducer from "@/redux/reducers/latestTalentsReducer";
import unreadMessagesReducer from "@/redux/reducers/unreadMessagesReducer";
import chatInitiaterReducer from "@/redux/reducers/chatInitiaterReducer";
import signupInfo from "@/redux/reducers/signupReducer";
import messagesReducer from "@/redux/reducers/messagesReducer";
import teamReducer from "@/redux/reducers/teamReducer";
import profileReducer from "@/redux/reducers/profileReducer";
import passwordReducer from "@/redux/reducers/passwordReducer";
import notifications from "@/redux/reducers/notificationsSettings";
import paymentMethodsReducer from "@/redux/reducers/paymentMethodsReducer";
import paymentHistory from "@/redux/reducers/paymentHistoryReducers";
import createOpportunityReducer from "@/redux/reducers/createOpportunityReducer";
import notificationsReducer from "@/redux/reducers/notificationsReducer";

interface ActionsInterface {
  type: string;
  payload: any;
}

interface IAboutBenefitsImages {
  id: string | number;
  img: string;
  hasOverlay?: string;
}

interface IPaymentMethod {
  id: string | number;
  isSelected: boolean;
  cardNumber: string;
  expiryDate: string;
  firstName: string;
  lastName: string;
}

const main = (
  state: any = {
    ...signupInfo,
    ...userInfoReducer,
    ...latestTalentsReducer,
    ...unreadMessagesReducer,
    ...chatInitiaterReducer,
    ...opportunitiesData,
    ...messagesReducer,
    teamMembers: [
      {
        teamMemberImg: "/img/messages/user-one.jpeg",
        teamMemberName: "Jack",
        teamMemberRole: "Recruitment Agent",
        teamMemberDateJoined: "14/08/2019",
        teamMemberEmail: "pam@pixelandgraphcs.com",
      },
      {
        teamMemberImg: "/img/messages/user-two.jpeg",
        teamMemberName: "Gabe Lewis",
        teamMemberRole: "Recruitment Agent",
        teamMemberDateJoined: "14/08/2019",
        teamMemberEmail: "gabe@pixelandgraphcs.com",
      },
    ],
    ...teamReducer,
    ...profileReducer,
    ...passwordReducer,
    ...notifications,
    ...paymentMethodsReducer,
    ...paymentHistory,
    ...createOpportunityReducer,
    ...notificationsReducer,
  },
  action: ActionsInterface
) => {
  switch (action.type) {
    case t.CHANGE_FIRSTNAME:
      return {
        ...state,
        firstName: action.payload,
      };

    case t.CHANGE_LASTNAME:
      return {
        ...state,
        lastName: action.payload,
      };

    case t.INCREASE_SIGNUP_STEP:
      return {
        ...state,
        signupSteps: action.payload,
      };

    case t.DECREASE_SIGNUP_STEP:
      return {
        ...state,
        signupSteps: action.payload,
      };

    case t.CHANGE_SIGNUP_EMAIL:
      return {
        ...state,
        signupStepOne: {
          ...state.signupStepOne,
          email: action.payload,
        },
      };

    case t.CHANGE_SIGNUP_PASSWORD:
      return {
        ...state,
        signupStepOne: {
          ...state.signupStepOne,
          password: action.payload,
        },
      };

    case t.CHANGE_SIGNUP_CONFIRM_PASSWORD:
      return {
        ...state,
        signupStepOne: {
          ...state.signupStepOne,
          confirmPassword: action.payload,
        },
      };

    case t.CHANGE_SIGNUP_TERMS:
      return {
        ...state,
        signupStepOne: {
          ...state.signupStepOne,
          areTermsAccepted: action.payload,
        },
      };

    case t.CHANGE_SIGNUP_CONFIRM_EMAIL:
      return {
        ...state,
        signupStepTwo: {
          ...state.signupStepTwo,
          confirmEmail: action.payload,
        },
      };

    case t.CHANGE_SIGNUP_CONFIRM_CODE:
      return {
        ...state,
        signupStepTwo: {
          ...state.signupStepTwo,
          confirmCode: action.payload,
        },
      };

    case t.CHANGE_SIGNUP_FIRSTNAME:
      return {
        ...state,
        signupStepThree: {
          ...state.signupStepThree,
          firstName: action.payload,
        },
      };

    case t.CHANGE_SIGNUP_LASTNAME:
      return {
        ...state,
        signupStepThree: {
          ...state.signupStepThree,
          lastName: action.payload,
        },
      };

    case t.CHANGE_SIGNUP_COMPANY:
      return {
        ...state,
        signupStepThree: {
          ...state.signupStepThree,
          companyName: action.payload,
        },
      };

    case t.CHANGE_SIGNUP_COMPANYSIZE:
      return {
        ...state,
        signupStepThree: {
          ...state.signupStepThree,
          companySelectedSize: action.payload,
        },
      };

    case t.CHANGE_SIGNUP_COMPANYLOCATION:
      return {
        ...state,
        signupStepThree: {
          ...state.signupStepThree,
          companySelectedLocation: action.payload,
        },
      };

    case t.CHANGE_SIGNUP_POSTALCODE:
      return {
        ...state,
        signupStepThree: {
          ...state.signupStepThree,
          postalCode: action.payload,
        },
      };

    case t.CHANGE_SIGNUP_ADDRESS:
      return {
        ...state,
        signupStepThree: {
          ...state.signupStepThree,
          address: action.payload,
        },
      };

    case t.CHANGE_SIGNUP_WEBSITE:
      return {
        ...state,
        signupStepThree: {
          ...state.signupStepThree,
          socialMedia: {
            ...state.signupStepThree.socialMedia,
            website: action.payload,
          },
        },
      };

    case t.CHANGE_SIGNUP_LINKEDIN:
      return {
        ...state,
        signupStepThree: {
          ...state.signupStepThree,
          socialMedia: {
            ...state.signupStepThree.socialMedia,
            linkedIn: action.payload,
          },
        },
      };

    case t.CHANGE_SIGNUP_FACEBOOK:
      return {
        ...state,
        signupStepThree: {
          ...state.signupStepThree,
          socialMedia: {
            ...state.signupStepThree.socialMedia,
            facebook: action.payload,
          },
        },
      };

    case t.CHANGE_SIGNUP_INSTAGRAM:
      return {
        ...state,
        signupStepThree: {
          ...state.signupStepThree,
          socialMedia: {
            ...state.signupStepThree.socialMedia,
            instagram: action.payload,
          },
        },
      };

    case t.CHANGE_SIGNUP_FIELD_OF_OCCUPATION:
      return {
        ...state,
        signupStepFour: {
          ...state.signupStepFour,
          companySelectedFieldOfOccupation: action.payload,
        },
      };

    case t.CHANGE_SIGNUP_COMPANY_LOGO:
      return {
        ...state,
        signupStepFive: {
          ...state.signupStepFive,
          companyLogo: action.payload,
        },
      };

    case t.UPDATE_CLICKED_MESSAGE:
      const index = state.messages.latestMessages.indexOf(action.payload);
      const newMessages = [...state.messages.latestMessages];
      newMessages.forEach((msg) => (msg.isOpened = false));
      newMessages[index].isOpened = !newMessages[index].isOpened;

      return {
        ...state,
        messages: {
          ...state.messages,
          latestMessages: newMessages,
        },
      };

    case t.UPDATE_CHATBOX:
      return {
        ...state,
        messages: {
          ...state.messages,
          displayedMessages: action.payload,
        },
      };

    case t.UPDATE_CHAT_HEADER:
      return {
        ...state,
        messages: {
          ...state.messages,
          chatHeaderData: action.payload,
        },
      };

    case t.UPDATE_CHAT_BAR:
      return {
        ...state,
        messages: {
          ...state.messages,
          messageOpen: action.payload,
        },
      };

    case t.UPDATE_MSG_RIGHT_BAR:
      return {
        ...state,
        messages: {
          ...state.messages,
          messageRightbarOpen: action.payload,
        },
      };

    case t.UPDATE_SENT_MSG:
      return {
        ...state,
        messages: {
          ...state.messages,
          messageToSend: action.payload,
        },
      };

    case t.UPDATE_MSG_VIEW:
      return {
        ...state,
        messages: {
          ...state.messages,
          displayedMessages: [
            ...state.messages.displayedMessages,
            action.payload,
          ],
        },
      };

    case t.ADD_NEW_TEAM_MEMBER:
      return {
        ...state,
        teamMembers: [...state.teamMembers, action.payload],
      };

    case t.CHANGE_PROFILE_ORDER:
      return {
        ...state,
        settingsOrder: action.payload,
      };

    case t.CHANGE_COMPANY_NAME:
      return {
        ...state,
        companyName: action.payload,
      };

    case t.CHANGE_COMPANY_SIZE:
      return {
        ...state,
        companyEmployeeSize: action.payload,
      };

    case t.CHANGE_FIELD_OF_OCCUPATION:
      return {
        ...state,
        selectedFieldOfOccupation: action.payload,
      };

    case t.CHANGE_COMPANY_LOCATION:
      return {
        ...state,
        companyLocation: action.payload,
      };

    case t.CHANGE_POSTAL_CODE:
      return {
        ...state,
        locationPostalCode: action.payload,
      };

    case t.CHANGE_COMPANY_ADDRESS:
      return {
        ...state,
        locationAddress: action.payload,
      };

    case t.CHANGE_WORK_HOURS_FROM:
      return {
        ...state,
        companyWorkHoursFrom: action.payload,
      };

    case t.CHANGE_WORK_HOURS_TO:
      return {
        ...state,
        companyWorkHoursTo: action.payload,
      };

    case t.CHANGE_ABOUT_OVERLAY:
      const newAboutImages: IAboutBenefitsImages[] = [];

      state.companyAbout.aboutImages.map(
        (img: IAboutBenefitsImages, index: number) => {
          if (index === action.payload.index) {
            img.hasOverlay = action.payload.overlay;
          }
          newAboutImages.push(img);
        }
      );

      return {
        ...state,
        companyAbout: {
          ...state.companyAbout,
          aboutImages: newAboutImages,
        },
      };

    case t.CHANGE_ABOUT_IMAGES:
      return {
        ...state,
        companyAbout: {
          ...state.companyAbout,
          aboutImages: action.payload,
        },
      };

    case t.CHANGE_ABOUT_TEXT:
      return {
        ...state,
        companyAbout: {
          ...state.companyAbout,
          aboutText: action.payload,
        },
      };

    case t.CHANGE_BENEFITS_OVERLAY:
      const newBenefitsImages: IAboutBenefitsImages[] = [];

      state.companyBenefits.benefitsImages.map(
        (img: IAboutBenefitsImages, index: number) => {
          if (index === action.payload.index) {
            img.hasOverlay = action.payload.overlay;
          }
          newBenefitsImages.push(img);
        }
      );

      return {
        ...state,
        companyBenefits: {
          ...state.companyBenefits,
          benefitsImages: newBenefitsImages,
        },
      };

    case t.CHANGE_BENEFITS_IMAGES:
      return {
        ...state,
        companyBenefits: {
          ...state.companyBenefits,
          benefitsImages: action.payload,
        },
      };

    case t.CHANGE_BENEFITS_TEXT:
      return {
        ...state,
        companyBenefits: {
          ...state.companyBenefits,
          cultureText: action.payload,
        },
      };

    case t.CHANGE_TECHNOLOGIES:
      return {
        ...state,
        technologiesUsed: action.payload,
      };

    case t.CHANGE_COMPANY_LINKS:
      return {
        ...state,
        companySocialMedia: action.payload,
      };

    case t.CHANGE_USER_PASSWORD:
      return {
        ...state,
        password: action.payload,
      };

    case t.CHANGE_NOTIFICATION_SETTINGS:
      return {
        ...state,
        notificationSettings: action.payload,
      };

    case t.TURN_OFF_ALL_NOTIFICATIONS:
      return {
        ...state,
        turnOffAll: action.payload,
      };

    case t.CHANGE_PAYMENT_METHOD:
      return {
        ...state,
        paymentMethods: action.payload,
      };

    case t.CHANGE_SELECTED_METHOD:
      return {
        ...state,
        selectedMethod: action.payload,
      };

    case t.REMOVE_SELECTED_CARD:
      let updatedMethods: IPaymentMethod[] = state.paymentMethods;
      updatedMethods.splice(updatedMethods.indexOf(action.payload), 1);

      return {
        ...state,
        paymentMethods: updatedMethods,
      };

    case t.TOGGLE_ADD_CARD_POPUP:
      return {
        ...state,
        toggleAddCardPopup: action.payload,
      };

    case t.TOGGLE_EDIT_CARD_POPUP:
      return {
        ...state,
        toggleEditCardPopup: action.payload,
      };

    case t.ADD_NEW_CARD:
      const newMethods: IPaymentMethod[] = state.paymentMethods;
      newMethods.forEach((card: IPaymentMethod) => (card.isSelected = false));
      newMethods.push(action.payload);

      return {
        ...state,
        paymentMethods: newMethods,
      };

    case t.INCREASE_OPPORTUNITY_STEP:
      return {
        ...state,
        opportunitySteps: action.payload,
      };

    case t.DECREASE_OPPORTUNITY_STEP:
      return {
        ...state,
        opportunitySteps: action.payload,
      };

    case t.UPDATE_CREATE_OPPORTUNITY_SIDE_LINKS:
      return {
        ...state,
        stepIdentifiers: action.payload,
      };

    case t.UPDATE_OPPORTUNITY_TYPE:
      return {
        ...state,
        createOpportunity: {
          ...state.createOpportunity,
          opportunityType: action.payload,
        },
      };

    case t.UPDATE_OPPORTUNITY_TITLE:
      return {
        ...state,
        createOpportunity: {
          ...state.createOpportunity,
          opportunityTitle: action.payload,
        },
      };

    case t.UPDATE_SELECTED_LOCATIONS:
      const updatedLocations =
        state.createOpportunity.selectedTalentOfficeLocations;
      updatedLocations.push(action.payload);

      return {
        ...state,
        createOpportunity: {
          ...state.createOpportunity,
          selectedTalentOfficeLocations: updatedLocations,
        },
      };

    case t.REMOVE_SELECTED_LOCATION:
      const removedLocations =
        state.createOpportunity.selectedTalentOfficeLocations;
      removedLocations.splice(action.payload, 1);

      return {
        ...state,
        createOpportunity: {
          ...state.createOpportunity,
          selectedTalentOfficeLocations: removedLocations,
        },
      };

    case t.UPDATE_OPP_WHAT_TO_DO:
      return {
        ...state,
        createOpportunity: {
          ...state.createOpportunity,
          whatToDo: {
            ...state.createOpportunity.whatToDo,
            __html: action.payload,
          },
        },
      };

    case t.UPDATE_OPP_DESCRIPTION:
      return {
        ...state,
        createOpportunity: {
          ...state.createOpportunity,
          oppDescription: {
            ...state.createOpportunity.oppDescription,
            __html: action.payload,
          },
        },
      };

    case t.CHANGE_OPP_CATEGORY:
      return {
        ...state,
        createOpportunity: {
          ...state.createOpportunity,
          selectedCategory: action.payload,
        },
      };

    case t.REMOVE_REQUIRED_SKILL:
      const updatedRequiredSkills: [] = state.createOpportunity.requiredSkills;
      updatedRequiredSkills.splice(action.payload, 1);

      return {
        ...state,
        createOpportunity: {
          ...state.createOpportunity,
          requiredSkills: updatedRequiredSkills,
        },
      };

    case t.REMOVE_BONUS_SKILL:
      const updatedBonusSkills: [] = state.createOpportunity.bonusSkills;
      updatedBonusSkills.splice(action.payload, 1);

      return {
        ...state,
        createOpportunity: {
          ...state.createOpportunity,
          bonusSkills: updatedBonusSkills,
        },
      };

    case t.UPDATE_CURRENCY:
      return {
        ...state,
        createOpportunity: {
          ...state.createOpportunity,
          salary: {
            ...state.createOpportunity.salary,
            selectedCurrency: action.payload,
          },
        },
      };

    case t.UPDATE_SALARY_FROM:
      return {
        ...state,
        createOpportunity: {
          ...state.createOpportunity,
          salary: {
            ...state.createOpportunity.salary,
            salaryFrom: action.payload,
          },
        },
      };

    case t.UPDATE_SALARY_TO:
      return {
        ...state,
        createOpportunity: {
          ...state.createOpportunity,
          salary: {
            ...state.createOpportunity.salary,
            salaryTo: action.payload,
          },
        },
      };

    case t.UPDATE_TALENT_LOCATION:
      return {
        ...state,
        createOpportunity: {
          ...state.createOpportunity,
          selectedTalentLocation: action.payload,
        },
      };

    case t.UPDATE_WORK_HOURS_FROM:
      return {
        ...state,
        createOpportunity: {
          ...state.createOpportunity,
          selectedWorkHoursFrom: action.payload,
        },
      };

    case t.UPDATE_WORK_HOURS_TO:
      return {
        ...state,
        createOpportunity: {
          ...state.createOpportunity,
          selectedWorkHoursTo: action.payload,
        },
      };

    default:
      return state;
  }
};

export default main;
