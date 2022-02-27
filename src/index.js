import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Header from "./components/Header";

// Imported Bootstrap styles without JS
import 'bootstrap/dist/css/bootstrap.min.css';
// Customized bootstrap styling
import './index.css';

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
