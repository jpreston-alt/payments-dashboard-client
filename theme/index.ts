import { createTheme } from "@mui/material";

const muiTheme = createTheme();

export const theme = createTheme({
  shape: { borderRadius: 10 },
  typography: {
    fontFamily: `"Montserrat", "Helvetica", "Arial", sans-serif`,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: `${muiTheme.spacing(1)} ${muiTheme.spacing(5)}`,
          margin: muiTheme.spacing(1),
          boxShadow: "3px 3px 17px 1px rgba(0, 0, 0, 0.12)",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        head: { fontWeight: 600 },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h1: {
          fontSize: "3rem",
          fontWeight: 700,
          color: "#142433",
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          borderRadius: muiTheme.shape.borderRadius,
          "&:before": {
            border: "none",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "3px 3px 17px 1px rgba(0, 0, 0, 0.05)",
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: "#fff",
          backgroundColor: "#6dbfb8",
          boxShadow: "3px 3px 17px 1px rgba(0, 0, 0, 0.12)",
          "&:hover": {
            backgroundColor: "#4c8580",
          },
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
        },
      },
    },
  },
  palette: {
    primary: { main: "#6dbfb8", contrastText: "#fff" },
    text: { primary: "#142433" },
    common: { white: "#FDFCFF" },
  },
});
