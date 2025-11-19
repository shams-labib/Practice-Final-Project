import { createBrowserRouter } from "react-router";
import RootLaout from "../Layout/RootLaout";
import Home from "../Pages/Home/Home";
import Coverage from "../Pages/Coverage/Coverage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLaout></RootLaout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/coverage",
        element: <Coverage></Coverage>,
      },
    ],
  },
]);
