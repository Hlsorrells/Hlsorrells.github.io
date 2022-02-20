import { render } from "react-dom";
import { BrowserRouter, Link } from "react-router-dom";
import App from "./App";

const rootElement = document.getElementById("root");
render(
  <>
    <BrowserRouter>
      <nav style={{
        borderBottom: "solid 1px",
        paddingBottom: "1rem"
      }}>
        <Link to='/'>Home</Link> |{" "}
        <Link to='/about'>About</Link> |{" "}
        <Link to='/contact'>Contact</Link>
      </nav>
      <App />
    </BrowserRouter>
  </>,
  rootElement
);
