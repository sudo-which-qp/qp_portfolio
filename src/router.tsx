import { createBrowserRouter, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import BlogPage from "./pages/BlogPage";
import Layout from "./pages/Layout";
import PaperPage from "./pages/PaperPage";
import WorkInProgress from "@/components/custom/WorkInProgress.tsx";
import ProjectPage from "@/pages/ProjectPage.tsx";

const isOnMaintenance = true;
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "projects",
        element: <ProjectPage />,
      },
      {
        path: "papers",
        element: isOnMaintenance ? <WorkInProgress /> : <PaperPage /> ,
      },
      {
        path: "blog",
        element: isOnMaintenance ? <WorkInProgress /> : <BlogPage />,
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
