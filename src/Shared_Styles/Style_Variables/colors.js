// COLORS

export const colors = {
  background: "#e1e1e1",
  primary: "#08FDD8",
  // "#66fcf1",
  secondary: "#45829e",
  // text: "#e1e1e1",
  text: "#fff",
  dark: "#0b0c10",
  navRegular: "#4B4D4E",
  // "#6b6e70",
  accent1: "#13CDFF",
  white: "#fff"
};

// RANDOM COLOR PICKER
export const randomColor = () => {
  const colorArray = [
    "#e74c3c",
    "#8e44ad",
    "#3498db",
    "#2ecc71",
    "#f1c40f",
    "#FC6B7B",
    "#b5ead7",
    "#fc5d3d",
    "#3db0f5",
    "#b5ead7",
    "#4343f2",
    "#fcd934",
    "#588c57"
  ];
  const randomNum = Math.floor(Math.random() * colorArray.length);
  const pick = colorArray[randomNum];
  return pick;
};

// FONTS

export const fonts = {
  title: `'Roboto', sans-serif;`,
  body: `'Roboto', sans-serif;`
  // title: `'Montserrat', sans-serif;`,
  // body: `'Montserrat', sans-serif;;`
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
