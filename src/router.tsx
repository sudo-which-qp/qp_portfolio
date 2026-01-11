import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen.tsx";
import NotFound from "./pages/NotFound";
import BlogScreen from "./pages/BlogScreen.tsx";
import Layout from "./pages/Layout";
import PaperScreen from "./pages/PaperScreen.tsx";
import WorkInProgress from "@/components/custom/WorkInProgress.tsx";
import ProjectScreen from "@/pages/ProjectScreen.tsx";

const isOnMaintenance = true;
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <HomeScreen />,
      },
      {
        path: "projects",
        element: <ProjectScreen />,
      },
      {
        path: "papers",
        element: isOnMaintenance ? <WorkInProgress /> : <PaperScreen /> ,
      },
      {
        path: "blog",
        element: isOnMaintenance ? <WorkInProgress /> : <BlogScreen />,
      },
    ],
  },
  {
    path: "/index",
    element: <Navigate to="/" replace />,
  },
  {
    path: "/not-found",
    element: <NotFound />,
  },
]);

export default router;
