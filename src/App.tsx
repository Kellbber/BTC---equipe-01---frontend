
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import theme from "./assets/styles/theme";
import Router from '../router'
function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Router/>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
