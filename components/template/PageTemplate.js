import Header from "./Header";
import { createTheme, ThemeProvider } from "@mui/material/styles";

/*

    Layout for entire webapp with the help of bootstrap and MUI

*/

const theme = createTheme({
  // Give MUI elements a specific theme to help with the color scheme

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
