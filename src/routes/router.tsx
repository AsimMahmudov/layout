import { createBrowserRouter } from "react-router-dom";
import LayoutSide from "../pagesSide/components/layout/LayoutSide";
import HomePage from "../pagesSide/pages/HomePage";
import AboutPage from "../pagesSide/pages/AboutPage";
import LayoutAdmin from "../pagesAdmin/components/layout/LayoutAdmin";
import DashboadPage from "../pagesAdmin/pages/DashboadPage";
import SettingsPage from "../pagesAdmin/pages/SettingsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutSide />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
    ],
  },
  {
    path: "/admin",
    element: <LayoutAdmin />,
    children: [
      {
        path: "/admin/dashboard",
        element: <DashboadPage />,
      },
      {
        path: "/admin/settings",
        element: <SettingsPage />,
      },
    ],
  },
]);
