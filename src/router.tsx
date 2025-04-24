import { createBrowserRouter, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import GalleryPage from "./pages/GalleryPage";
import BlogPage from "./pages/BlogPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFound />,
  },

  {
    path: "/gallery",
    element: <GalleryPage />,
  },
  {
    path: "/blog",
    element: <BlogPage />,
  },

  //
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
