import React from "react";
import ReactDOM from "react-dom";
import main from "../sass/main.scss";

import App from "./app";

ReactDOM.render(
  <div id={main.root}>
    <App />
  </div>,
  document.body
);
