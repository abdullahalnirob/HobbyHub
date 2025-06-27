import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Root from "../components/Root";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import CreateGroup from "../components/CreateGroup";
import PrivateRoute from "./PrivateRoute";
import AllGroups from "../components/AllGroups";
import Group from "../components/Group";
import MyGroup from "../components/MyGroup";
import DashMyGroup from "../Dashboard/DashMyGroup";
import UpdateGroup from "../components/UpdateGroup";
import NotFound from "../components/NotFound";
import Dashboard from "../Dashboard/Dashboard";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <Root />
        ),
      },
      {
        path: "/create",
        element: (
          <PrivateRoute>
            <CreateGroup />
          </PrivateRoute>
        ),
      },
      {
        path: "/groups",
        element: (
          <AllGroups />
        ),
      },
      {
        path: "/my-groups",
        element: (
          <PrivateRoute>
            <MyGroup />
          </PrivateRoute>
        ),
      },
      {
        path: "/group/:id",
        loader: () =>
          fetch(`https://hobby-hub-server-nine.vercel.app/api/allGroups`),
        element: <Group />
      },
      {
        path: "/update-group/:id",
        loader: () =>
          fetch(`https://hobby-hub-server-nine.vercel.app/api/allGroups`),
        element: (
          <PrivateRoute>
            <UpdateGroup />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [{
      path: "/dashboard",
      element: (
        <PrivateRoute>
          <MyGroup />
        </PrivateRoute>
      ),
    }
      ,
    {
      path: "/dashboard/my-groups",
      element: (
        <PrivateRoute>
          <DashMyGroup />
        </PrivateRoute>
      ),
    },
    {
      path: "/dashboard/create-groups",
      element: (
        <PrivateRoute>
          <CreateGroup />
        </PrivateRoute>
      ),
    },
    {
      path: "/dashboard/all-groups",
      element: (
        <PrivateRoute>
          <AllGroups />
        </PrivateRoute>
      ),
    },
    {
      path: "/dashboard/update-group/:id",
      loader: () =>
        fetch(`https://hobby-hub-server-nine.vercel.app/api/allGroups`),
      element: (
        <PrivateRoute>
          <UpdateGroup />
        </PrivateRoute>
      ),
    },
    ]
  },

]);
