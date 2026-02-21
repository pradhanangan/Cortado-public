import { alpha, createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    // fontFamily: "'Geist', var(--font-geist-sans), Arial, Helvetica, sans-serif",
    h1: {
      fontSize: "2.25rem", // 36px
      fontWeight: 700,
      color: "#1e293b",
      lineHeight: 1.15,
      letterSpacing: "-0.02em",
    },
    h2: {
      fontSize: "1.75rem", // 28px
      fontWeight: 700,
      color: "#1e293b",
      lineHeight: 1.2,
      letterSpacing: "-0.01em",
    },
    h3: {
      fontSize: "1.5rem", // 24px
      fontWeight: 600,
      color: "#1e293b",
      lineHeight: 1.22,
    },
    h4: {
      fontSize: "1.25rem", // 20px
      fontWeight: 600,
      color: "#1e293b",
      lineHeight: 1.25,
    },
    h5: {
      fontSize: "1.125rem", // 18px
      fontWeight: 500,
      color: "#1e293b",
      lineHeight: 1.3,
    },
    h6: {
      fontSize: "1rem", // 16px
      fontWeight: 500,
      color: "#1e293b",
      lineHeight: 1.35,
    },
    subtitle1: {
      fontSize: "1rem",
      fontWeight: 400,
      color: "#334155",
    },
    subtitle2: {
      fontSize: "0.875rem",
      fontWeight: 400,
      color: "#64748b",
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
      color: "#334155",
    },
    body2: {
      fontSize: "0.875rem",
      fontWeight: 400,
      color: "#64748b",
    },
  },
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
    text: {
      primary: alpha("#000000DE", 0.87),
      secondary: alpha("#000000DE", 0.6),
    },
  },
});

export default theme;
