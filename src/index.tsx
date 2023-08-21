import React from "react";
import ReactDOM from "react-dom/client";
import { AuthContextProvider } from "@/contexts/AuthContext";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import GlobalStyles from "@/styles/GlobalStyles.ts";
import Waitlist from "@/pages/waitlist/index";
import App from "@/pages/app/index";
import { hasToken } from "@/utils/token";
import { Provider } from "react-redux";
import { store } from "@/contexts/store";

export const router = createBrowserRouter([
  {
    path: "/",
    element: hasToken() ? <App /> : <Waitlist />,
  },
]);

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
