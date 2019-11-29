// COLORS

export const colors = {
  background: "#e1e1e1",
  primary: "#66fcf1",
  secondary: "#45829e",
  // text: "#e1e1e1",
  text: "#fff",
  dark: "#0b0c10",
  navRegular: "#6b6e70",
  accent1: "#13CDFF"
};

// RANDOM COLOR PICKER
export const randomColor = () => {
  const colorArray = ["#66FCF1"];
  const randomNum = Math.floor(Math.random() * colorArray.length);
  const pick = colorArray[randomNum];
  return pick;
};

// FONTS

export const fonts = {
  title: `'Roboto', sans-serif;`,
  body: `'Roboto', sans-serif;`
};

// MEDIA QUERY VARIABLES -- mobile-first

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px"
};

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`
};
