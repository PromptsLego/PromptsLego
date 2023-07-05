import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css"
import { ContentContextProvider } from "./contexts/ContentContext.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ContentContextProvider>
      <App />
    </ContentContextProvider>
  </React.StrictMode>
);
