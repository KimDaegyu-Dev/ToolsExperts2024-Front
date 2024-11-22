import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import FollowPage from "./pages/FollowPage";
//import InfoPage from "./pages/InfoPage";
//import MyNearPage from "./pages/MyNearPage";
//import InfoPage from "./pages/InfoPage";
//import DetailPage from "./pages/DetailPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
