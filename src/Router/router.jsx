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
import UpdateGroup from "../components/UpdateGroup";
import NotFound from "../components/NotFound";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <PrivateRoute>
            <Root />
          </PrivateRoute>
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
          <PrivateRoute>
            <AllGroups />
          </PrivateRoute>
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
        element: (
          <PrivateRoute>
            <Group />
          </PrivateRoute>
        ),
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
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);
