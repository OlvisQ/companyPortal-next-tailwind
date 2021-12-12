const profileReducer: object = {
  settingsOrder: 0,
  companyName: "Pixel & Graphs",
  companyEmployeeSize: "26 - 50 employees",
  companyEmployeeSizes: [
    "1 - 10 employees",
    "11 - 24 employees",
    "26 - 50 employees",
    "51 - 100 employees",
    "100+ employees",
  ],
  fieldOfOccupations: [
    "Web, Mobile & Software Development",
    "AI Development",
    "Digital Marketing",
    "Data Sciences",
    "Backend Development",
  ],
  selectedFieldOfOccupation: "Web, Mobile & Software Development",
  companyLocation: "United Kingdom, London",
  locationPostalCode: "SW1A 1AA",
  locationAddress: "Your House, 26 Edgware Rd",
  companyWorkHoursFrom: "GMT + 2",
  companyWorkHoursFromSelection: [
    "GMT + 1",
    "GMT + 2",
    "GMT + 3",
    "GMT + 4",
    "GMT + 5",
    "GMT + 6",
    "GMT + 7",
    "GMT + 8",
    "GMT + 9",
    "GMT + 10",
    "GMT + 11",
    "GMT + 12",
  ],
  companyWorkHoursToSelection: [
    "GMT + 1",
    "GMT + 2",
    "GMT + 3",
    "GMT + 4",
    "GMT + 5",
    "GMT + 6",
    "GMT + 7",
    "GMT + 8",
    "GMT + 9",
    "GMT + 10",
    "GMT + 11",
    "GMT + 12",
  ],
  companyWorkHoursTo: "GMT + 8",
  companyAbout: {
    aboutImages: [
      {
        id: 1,
        img: "/img/profile/profile-about.jpg",
        hasOverlay: false,
      },
      {
        id: 2,
        img: "/img/profile/profile-about.jpg",
        hasOverlay: false,
      },
      {
        id: 3,
        img: "/img/profile/profile-about.jpg",
        hasOverlay: false,
      },
      {
        id: 4,
        img: "/img/profile/profile-about.jpg",
        hasOverlay: false,
      },
    ],
    aboutText: {
      __html:
        "One of our company goals has always been to create a workplace where developers can quickly grow their professional careers and use all of their skills to create innovative products, software, app, and websites. We've come really close because we aren't growing the team with 'lone wolves', but developers who want to learn soemthing new, who want to share knowledge with others and who are ready to jump into that problem-solving mode whenever they encounter any kind of challenge. And, of course, have fun while they're doing it! <br> <br> Right now, we have 31 members in our Development department. That's 31 amazing minds who can look at a project from countless sides to find the right way to deliver the best result. And if their primary stack of PHP with Symfony, MySQL and JavaScript aren't enough to crack the issue, they'll learn a new language & use new tech - anything that'll make their job easier and themselves more proficient",
    },
  },
  companyBenefits: {
    benefitsImages: [
      {
        id: 1,
        img: "/img/profile/profile-benefits.jpg",
        hasOverlay: false,
      },
      {
        id: 2,
        img: "/img/profile/profile-benefits.jpg",
        hasOverlay: false,
      },
      {
        id: 3,
        img: "/img/profile/profile-benefits.jpg",
        hasOverlay: false,
      },
      {
        id: 4,
        img: "/img/profile/profile-benefits.jpg",
        hasOverlay: false,
      },
    ],
    cultureText: {
      __html:
        "To harness the power of innovation, SAP invest in the development of its diverse employees. We aspire to leverage the qualities and appreciate the unique competencies that each person brings to the company. <ul><li>Plan, structure and implement applications, websites, APIs, databases, etc.</li><li>Develop medium-sized and large web-based projects</li><li>Give your input and actively participate in various brainstormings</li><li>Maintain active applications</li><li>Define daily responsibilities and tasks with Project Managers and team members</li><li>Collaborate with the members of the Quality Assurance team</li><li>Work and experiment with the trending technologies</li></ul>",
    },
  },
  technologiesUsed: [
    {
      id: 1,
      technology: "HTML",
      technologyBg: "bg-skills-skill1",
    },
    {
      id: 2,
      technology: "CSS",
      technologyBg: "bg-skills-skill2",
    },
    {
      id: 3,
      technology: "Javascript: Angular",
      technologyBg: "bg-skills-skill3",
    },
    {
      id: 4,
      technology: "Javascript: React",
      technologyBg: "bg-skills-skill4",
    },
    {
      id: 5,
      technology: "Ruby",
      technologyBg: "bg-skills-skill2",
    },
    {
      id: 6,
      technology: "Javascript: NodeJS",
      technologyBg: "bg-skills-skill5",
    },
  ],
  companySocialMedia: [
    {
      id: 1,
      icon: "/img/icons/website-icon.svg",
      link: "www.pixelsandgraphs.com",
      label: "website",
    },
    {
      id: 2,
      icon: "/img/icons/linkedin-icon.svg",
      link: "www.linkedin.com/pixelsandgraphs",
      label: "linkedin",
    },
    {
      id: 3,
      icon: "/img/icons/facebook-icon.svg",
      link: "www.facebook.com/pixelsandgraphs",
      label: "facebook",
    },
    {
      id: 4,
      icon: "/img/icons/instagram-icon.svg",
      link: "www.instagram.com/pixelsandgraphs",
      label: "instagram",
    },
  ],
};

export default profileReducer;
