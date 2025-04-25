import { createBrowserRouter, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import GalleryPage from "./pages/GalleryPage";
import BlogPage from "./pages/BlogPage";
import Layout from "./pages/Layout";
import PaperPage from "./pages/PaperPage";

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
        path: "gallery",
        element: <GalleryPage />,
      },
      {
        path: "papers",
        element: <PaperPage />,
      },
      {
        path: "blog",
        element: <BlogPage />,
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
