const createOpportunityReducer: object = {
  opportunitySteps: 1,
  maxOpportunitySteps: 7,
  stepIdentifiers: [
    {
      id: 1,
      title: "About",
      isActive: true,
      completed: false,
    },
    {
      id: 2,
      title: "Description",
      isActive: false,
      completed: false,
    },
    {
      id: 3,
      title: "Category (& Skills)",
      isActive: false,
      completed: false,
    },
    {
      id: 4,
      title: "Salary",
      isActive: false,
      completed: false,
    },
    {
      id: 5,
      title: "Talent",
      isActive: false,
      completed: false,
    },
    {
      id: 6,
      title: "Review",
      isActive: false,
      completed: false,
    },
  ],
  createOpportunity: {
    opportunityTypes: [
      "Front-End Developer",
      "Back-End Developer",
      "FullStack Developer",
    ],
    opportunityType: "Please Select",
    opportunityTitle: "",
    talentOfficeLocations: [
      {
        id: 1,
        title: "United State",
        icon: "/img/icons/united-states-icon.svg",
      },
      {
        id: 2,
        title: "United Kingdom",
        icon: "/img/icons/united-kingdom-icon.svg",
      },
    ],
    selectedTalentOfficeLocations: [
      {
        id: 1,
        title: "United State",
        icon: "/img/icons/united-states-icon.svg",
      },
      {
        id: 2,
        title: "United Kingdom",
        icon: "/img/icons/united-kingdom-icon.svg",
      },
    ],
    whatToDo: {
      __html: "",
    },
    oppDescription: {
      __html: "",
    },
    opportunityCategories: [
      "category-1",
      "category-2",
      "category-3",
      "category-4",
    ],
    selectedCategory: "Please Select",
    requiredSkills: [
      {
        id: 1,
        technology: "HTML (5 years) ",
        technologyBg: "bg-skills-skill1",
      },
      {
        id: 2,
        technology: "CSS (5 years)",
        technologyBg: "bg-skills-skill2",
      },
      {
        id: 3,
        technology: "Javascript: Angular (3 years)",
        technologyBg: "bg-skills-skill3",
      },
      {
        id: 4,
        technology: "Javascript: React (3 years)",
        technologyBg: "bg-skills-skill4",
      },
      {
        id: 5,
        technology: "Ruby (2 years)",
        technologyBg: "bg-skills-skill2",
      },
      {
        id: 6,
        technology: "Javascript: NodeJS (3 years)",
        technologyBg: "bg-skills-skill5",
      },
    ],
    bonusSkills: [
      {
        id: 1,
        technology: "HTML (5 years) ",
        technologyBg: "bg-skills-skill1",
      },
      {
        id: 2,
        technology: "CSS (5 years)",
        technologyBg: "bg-skills-skill2",
      },
      {
        id: 3,
        technology: "Javascript: Angular (3 years)",
        technologyBg: "bg-skills-skill3",
      },
      {
        id: 4,
        technology: "Javascript: React (3 years)",
        technologyBg: "bg-skills-skill4",
      },
      {
        id: 5,
        technology: "Ruby (2 years)",
        technologyBg: "bg-skills-skill2",
      },
      {
        id: 6,
        technology: "Javascript: NodeJS (3 years)",
        technologyBg: "bg-skills-skill5",
      },
    ],
    salary: {
      currencies: ["USD", "CAD", "PON", "EUR", "RS", "INR"],
      selectedCurrency: "Please Select",
      salaryFrom: "",
      salaryTo: "",
    },
    talentLocations: [
      "United State",
      "United Kingdom",
      "Pakistan",
      "India",
      "Turkey",
      "Brazil",
      "Canada",
    ],
    selectedTalentLocation: "Please select",
    talentWorkHours: [
      "GMT+1",
      "GMT+2",
      "GMT+3",
      "GMT+4",
      "GMT+5",
      "GMT+6",
      "GMT+7",
      "GMT+8",
      "GMT+9",
      "GMT+10",
      "GMT+11",
      "GMT+12",
    ],
    selectedWorkHoursFrom: "Please Select",
    selectedWorkHoursTo: "Please Select", 
  },
};

export default createOpportunityReducer;
