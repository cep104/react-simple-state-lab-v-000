import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { pattern1 } from "./data.js";
import Matrix from "./Matrix.js";

ReactDOM.render(
  <Matrix values={pattern1} />,
  document
    //patern1 is an array of array getting imported from /data.js
    .getElementById("root")
);
