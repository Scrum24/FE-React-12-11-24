import React from "react";
import ReactDOM from "react-dom/client";
import {HashRouter} from "react-router-dom";
import UserInfoContextProvider from "./contexts/UserInfoContextProvider.jsx";

import App from "./App.jsx";
import PizzaContextProvider from "./contexts/PizzaContextProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
    <UserInfoContextProvider>
      <PizzaContextProvider>
        <App />
      </PizzaContextProvider>
    </UserInfoContextProvider>
  </HashRouter>
);
