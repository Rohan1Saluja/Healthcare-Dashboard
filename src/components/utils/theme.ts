import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    background: {
      default: "#F6F7F8",
    },
    primary: {
      main: "#01f0d0",
    },
    action: {
      active: "#01F0D0",
    },
    secondary: {
      main: "#072635",
    },
  },
  typography: {
    fontFamily: `FoundryMonolineRegular, monospace`,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
});
