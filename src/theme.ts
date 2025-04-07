import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: `'Space Grotesk', sans-serif`,
    allVariants: {
      color: "#F7FFF7",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
          padding: 0,
          background:
            "linear-gradient(270deg, #181f1c, #56203D, #857F74, #3c413c)",
          backgroundSize: "600% 600%",
          animation: "gradientShift 5s ease infinite",
          color: "#F7FFF7",
          minHeight: "100vh",
          fontFamily: `'Space Grotesk', sans-serif`,
        },
        "@keyframes gradientShift": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
    },
  },
});

export default theme;
