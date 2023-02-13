import React from "react";
import ReactDOM from "react-dom/client";
import { AlignItems } from "./components/AlignItems";
import App from "./App";
import "./style/reset.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AlignItems>
    <App />
  </AlignItems>
);
