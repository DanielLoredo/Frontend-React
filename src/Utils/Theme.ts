import { createTheme, colors } from "@mui/material";

const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    primary: {
      main: "#00035E",
    },
    secondary: {
      main: colors.orange[500],
    },
    white: {
      main: "#ffffff",
      contrastText: "#fff",
    },
    black: {
      main: "#000000",
      contrastText: "#fff",
    },
  },
  typography: {
    fontFamily: [
      '"Helvetica"',
      "Roboto",
      "Arial",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: "#ffffff",
        },
      },
    },
  },
});

export default theme;
