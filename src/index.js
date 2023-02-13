import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./style/reset.css";
import { BodyDisplay } from "./style/style";
import Title from "./components/Title";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BodyDisplay>
    <Title title={"Gerador de curriculo"} />
    <App />
  </BodyDisplay>
);
