const signupInfo = {
  signupSteps: 1,
  signupStepOne: {
    email: "",
    password: "",
    confirmPassword: "",
    areTermsAccepted: false,
  },
  signupStepTwo: {
    confirmEmail: "",
    confirmCode: "",
  },
  signupStepThree: {
    firstName: "",
    lastName: "",
    companyName: "",
    companySizes: [
      "1 - 10 employees",
      "11 - 50 employees",
      "51 - 100+ employees",
    ],
    companySelectedSize: "Please Select",
    companyLocations: ["United States", "United Kingdom"],
    companySelectedLocation: "Please Select",
    postalCode: "",
    address: "",
    socialMedia: {
      website: "",
      linkedIn: "",
      facebook: "",
      instagram: "",
    },
  },
  signupStepFour: {
    companyFieldsOfOccupation: [
      "Web Development",
      "Front-End Development",
      "Back-End Development",
      "App Development",
      "Devops Development",
      "SEO",
      "Digital Marketing",
    ],
    companySelectedFieldOfOccupation: "Please Select",
  },
  signupStepFive: {
    companyLogo: "",
  },
};

export default signupInfo;
