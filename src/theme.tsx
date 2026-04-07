import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: "#22283183",
    },
    secondary: {
      main: "#948979",
    },
  },

  typography: {
    fontFamily: "Segoe UI",
  },
});

theme = responsiveFontSizes(theme);

export default theme;
