import React from "react";
import ReactDOM from "react-dom/client";
// remove all default browser styles
import "reset-css";

// UI framework styles

// global styles
import "@/assets/styles/global.scss";

// app styles

import App from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
