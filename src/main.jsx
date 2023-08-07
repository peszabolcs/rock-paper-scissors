import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/header/App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import MainBody from "./components/mainbody/MainBody.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <MainBody />
  </React.StrictMode>
);
