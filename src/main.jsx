import React from "react";
import ReactDOM from "react-dom/client";
import {HashRouter} from "react-router-dom";
import AppContextProvider from "./components/AppContextProvider.jsx";

import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </HashRouter>
);
