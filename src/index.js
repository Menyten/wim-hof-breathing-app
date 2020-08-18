import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import Test from "./Test";
import S from "./elements";

ReactDOM.render(
  <React.StrictMode>
    <S.CssReset />
    <App />
    {/* <Test /> */}
  </React.StrictMode>,
  document.getElementById("root")
);
