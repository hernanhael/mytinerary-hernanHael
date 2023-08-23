import { createBrowserRouter } from "react-router-dom";
import LayoutMain from "./layouts/layout-main/LayoutMain";
import Home from "./pages/home/Home";
import Cities from "./pages/cities/Cities";
import NotFoundPage from "./pages/not-found-page/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutMain />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "/index", element: <Home /> },
      { path: "/cities", element: <Cities /> },
      { path: "/*", element: <NotFoundPage /> },
    ],
  },
]);

export default router;
