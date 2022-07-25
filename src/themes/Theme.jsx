import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#141414",
      secondary: "#141414",
    },
    secondary: {
      main: "#EFCA08",
    },
  },
  typography: {
    caption: {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "13px",
      lineHeight: "16px",
      textDecoration: "none",
      color: "#e5e5e5",
    },
    caption2: {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: 300,
      fontSize: "11px",
      lineHeight: "13px",
      textDecoration: "none",
      color: "#e5e5e5",
    },
  },
});

export default theme;
