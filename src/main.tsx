import React from "react";
import ReactDOM from "react-dom/client";
// remove all default browser styles
import "reset-css";

// UI framework styles

// global styles
import "@/assets/styles/global.scss";

// state management
import { Provider } from "react-redux";

import App from "./App";
import { BrowserRouter } from "react-router-dom";
import store from "./store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
