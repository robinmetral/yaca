// color palette for light theme
const lightPalette = {
  bg: "#e6ecf0",
  box: "white",
  text: "#14171a",
  medium: "#5c6e80",
  accent: "#ffac33"
};

// color palette for dark theme
const darkPalette = {
  bg: "#10171e",
  box: "#15202b",
  text: "white",
  medium: "#38444d",
  accent: "#ffac33"
};

// theme values for both themes
const bothThemes = {
  borderradius: "1rem"
};

// lightTheme export
export const lightTheme = {
  ...bothThemes,
  ...lightPalette,
  border: `1px solid ${lightPalette.medium}`
};

// darkTheme export
export const darkTheme = {
  ...bothThemes,
  ...darkPalette,
  border: `1px solid ${darkPalette.medium}`
};
