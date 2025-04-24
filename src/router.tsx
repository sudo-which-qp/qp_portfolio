import { createBrowserRouter } from "react-router-dom";
import HomePage from "./components/HomePage";
import NotFound from "./components/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFound />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "/not-found", element: <NotFound /> },
    ],
  },
]);

export default router;
