import { login } from "@/services/auth";
import { getFavorites } from "@/services/favorite";
import {
  getEmail,
  getToken,
  hasEmail,
  hasToken,
  removeEmail,
  removeToken,
} from "@/utils/token";
import { lazy, Suspense } from "react";
import { Navigate, createBrowserRouter, redirect } from "react-router-dom";

const App = lazy(() => import("@/pages/app"));
const Waitlist = lazy(() => import("@/pages/waitlist"));

async function rootloader() {
  if (hasToken() && hasEmail()) {
    const res = await getFavorites(getEmail()!, getToken()!);
    if (res.success) {
      return res.data.favorites;
    } else {
      removeToken();
      removeEmail();
    }
  }
  return redirect("/waitlist");
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/app" />,
  },
  {
    path: "/app",
    id: "app",
    element: <App />,
    loader: rootloader,
  },
  {
    path: "/waitlist",
    element: <Waitlist />,
  },
  {
    path: "*",
    element: <Navigate to="/app" />,
  },
]);
