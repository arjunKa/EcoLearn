import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { ROUTER_BASENAME } from "./config/appConfig";

const locationState = window.location;
if (locationState.search.startsWith("?/")) {
  const decodedPath = locationState.search
    .slice(2)
    .replace(/~and~/g, "&");
  const nextPath = `${locationState.pathname}${decodedPath}${
    locationState.hash
  }`;
  window.history.replaceState(null, "", nextPath);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router basename={ROUTER_BASENAME}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>
);
