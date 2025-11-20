import { createBrowserRouter } from "react-router";
import RootLaout from "../Layout/RootLaout";
import Home from "../Pages/Home/Home";
import Coverage from "../Pages/Coverage/Coverage";
import AuthLaytout from "../Layout/AuthLaytout";
import Login from "../Pages/Auth/Login/Login";
import Register from "../Pages/Auth/Register/Register";
import PrivateLayout from "../Layout/PrivateLayout/PrivateLayout";
import SendParcel from "../Pages/Send Parcel/SendParcel";
import DashboardLayout from "../Layout/DashboardLayout";
import My_parcel from "../Pages/Dashboard/my_parcel";

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
        element: (
          <PrivateLayout>
            <Coverage></Coverage>
          </PrivateLayout>
        ),
      },
      {
        path: "/send-parcel",
        element: (
          <PrivateLayout>
            <SendParcel></SendParcel>
          </PrivateLayout>
        ),
        loader: () => fetch("./serviceCenter.json").then((res) => res.json()),
      },
    ],
  },
  {
    path: "/",
    element: <AuthLaytout></AuthLaytout>,
    children: [
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },

  {
    path: "/dashboard",
    element: (
      <PrivateLayout>
        <DashboardLayout></DashboardLayout>
      </PrivateLayout>
    ),
    children: [
      {
        path: "my-parcel",
        element: <My_parcel></My_parcel>,
      },
    ],
  },
]);
