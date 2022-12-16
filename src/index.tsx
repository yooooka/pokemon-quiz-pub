import { render } from "react-dom";
import App from "./App";
import { makeTheme } from "./theme";
import { ThemeProvider } from "theme-ui";

const rootElement = document.getElementById("root");
render(
  <ThemeProvider theme={makeTheme}>
    <App />
  </ThemeProvider>,
  rootElement
);
