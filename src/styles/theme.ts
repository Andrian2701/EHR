import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#007bfc",
      light: "rgba(0, 123, 252, 0.8)",
    },
    text: {
      primary: "#050505",
      secondary: "#808588",
    },
    error: {
      main: "#fa6969",
    },
    background: {
      default: "#edf3fa",
      paper: "#f7f9fa",
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    h1: {
      fontWeight: 600,
      fontSize: 20,
      color: "#050505",
    },
    body1: {
      fontSize: 12.5,
      fontWeight: 500,
      color: "#808588",
    },
    button: {
      textTransform: "none",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: "6px",
          color: "#fff",
          backgroundColor: theme.palette.primary.main,
          width: 95,
          height: 40,
          "&:hover": {
            backgroundColor: theme.palette.primary.light,
          },
        }),
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          height: 40,
          fontWeight: 400,
          borderRadius: "6px",
          color: theme.palette.text.primary,
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.text.secondary,
            borderWidth: 1,
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.text.secondary,
          },
          "& input::placeholder": {
            color: theme.palette.text.secondary,
          },
          "& input": {
            padding: "10px",
          },
        }),
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        },
      },
    },
  },
});
