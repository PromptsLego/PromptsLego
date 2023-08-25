import React from "react";
import ReactDOM from "react-dom/client";
import { AuthContextProvider } from "@/contexts/AuthContext";
import { RouterProvider } from "react-router-dom";
import GlobalStyles from "@/styles/GlobalStyles.ts";
import { Provider } from "react-redux";
import { store } from "@/contexts/store";
import { router } from "./routers";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AuthContextProvider>
      <Provider store={store}>
        <GlobalStyles />
        <RouterProvider router={router} />
      </Provider>
    </AuthContextProvider>
  </React.StrictMode>
);
