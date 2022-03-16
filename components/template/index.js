import Header from "./header";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    neutral: {
      main: "#eab718",
      contrastText: "#fff",
    },
  },
});

export default function PageTemplate({ children }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        {/*

            01/03/2022

            Theme provider provides all elements that are from MUI with theme data for colors and styling
          */}
        <Header />
        {children}
      </ThemeProvider>
    </>
  );
}
