import App from "@/pages/app";
import Waitlist from "@/pages/waitlist";
import { hasToken } from "@/utils/token";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: hasToken() ? <App /> : <Waitlist />,
  },
]);
