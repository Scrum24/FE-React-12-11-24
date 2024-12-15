import React from "react";
import ReactDOM from "react-dom/client";
import {HashRouter} from "react-router-dom";
import UserInfoContextProvider from "./contexts/UserInfoContextProvider.jsx";

import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
    <UserInfoContextProvider>
      <App />
    </UserInfoContextProvider>
  </HashRouter>
);
