module.exports = {
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        gilroy: "Gilroy-Bold",
      },
      colors: {
        primary: {
          DEFAULT: "#2960ff",
          red: "#FF427C",
        },
        titles: {
          DEFAULT: "#343843",
        },
        secondary: {
          DEFAULT: "#677389",
          purple: "#6842ff",
          red: "#ff427c",
          orange: "#ff6842",
          yellow: "#ffbd0f",
          green: "#31dfad",
          icon: "#c8cfe2",
          elements: "#efefef",
          "elements-light": "rgba(237, 242, 253, 0.8)",
          light: "#f5f7ff",
          light2: "#edf2fd",
          light3: "#EAFCF7",
        },
        skills: {
          skill1: "#edf2fd",
          skill2: "#FFF8E7",
          skill3: "#FFF0EC",
          skill4: "#EAFCF7",
          skill5: "#EFEDFE",
        },
        "popup-overlay": "rgba(52, 56, 67, 0.8)",
      },
      fontSize: {
        "1xl": "1.375rem",
        xss: "0.625rem",
      },
      height: {
        "1xl": "3.25rem",
        "3xl": "4.75rem",
        18: "4.5rem",
        90: "22.5rem",
        "profile-height-desktop": "435px",
        "profile-height-mobile": "219px",
        "52px": "52px",
        "200px": "200px",
      },
      borderRadius: {
        "4xl": "1.875rem",
        "5xl": "2rem",
        "200px": "200px",
      },
      width: {
        "notifications-dropdown": "420px",
        "18-width": "4.5rem",
        "52-width": "3.25rem",
        "card-width": "352px",
        303: "303px",
        "115px": "115px",
        "204px": "204px",
        "69px": "69px",
        "200px": "200px",
        "new-member-width-panel": "469px",
        "225px": "225px",
        "12.5%": "12.5%",
      },
      minHeight: {
        "52px": "52px",
      },
      inset: {
        17: "4.5rem",
      },
      boxShadow: {
        main: "0px 4px 30px rgba(0, 0, 0, 0.16)",
        light: "0px 25px 47px -21px rgba(0,0,0,0.52)",
      },
      margin: {
        18: "4.5rem",
        46: "-11.5rem",
        "225px": "225px",
      },
      zIndex: {
        100: "100",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
