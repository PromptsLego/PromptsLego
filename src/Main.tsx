import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ContentContextProvider } from "./contexts/ContentContext.tsx";
import { AuthContextProvider } from "./contexts/AuthContext.tsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./routers/router.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AuthContextProvider>
      <ContentContextProvider>
        <RouterProvider router={router} />
      </ContentContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
