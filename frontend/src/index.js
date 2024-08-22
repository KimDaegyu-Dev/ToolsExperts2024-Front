import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import LandingPage from "./LandingPage";
// import MyPage from "./MyPage";
import DetailPage from "./DetailPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DetailPage />
  </React.StrictMode>
);

reportWebVitals();
