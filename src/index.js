import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Header from "./components/Header";

const rootElement = document.getElementById("root");
render(
  <>
    <BrowserRouter>
      <Header />
      <App />
    </BrowserRouter>
  </>,
  rootElement
);
