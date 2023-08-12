import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ContentContextProvider } from "@/contexts/ContentContext";
import { AuthContextProvider } from "@/contexts/AuthContext";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import GlobalStyles from "@/styles/GlobalStyles.ts";
import Waitlist from "@/pages/waitlist/index";
import App from "@/pages/app/index";
import { hasToken } from "@/utils/token";

export const router = createBrowserRouter([
  {
    path: "/",
    element: hasToken() ? <App /> : <Waitlist />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AuthContextProvider>
      <ContentContextProvider>
        <GlobalStyles />
        <RouterProvider router={router} />
      </ContentContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
);
