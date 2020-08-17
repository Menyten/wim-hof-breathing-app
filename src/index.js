import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { CssReset } from "./elements/reset";

ReactDOM.render(
  <React.StrictMode>
    <CssReset />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
