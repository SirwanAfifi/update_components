import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { appService } from "./appService";

setInterval(() => {
  appService.setName("Kaywan");
}, 5000);

ReactDOM.render(<App />, document.querySelector("#root"));
