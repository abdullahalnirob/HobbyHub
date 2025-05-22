import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Root from "../components/Root";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import CreateGroup from "../components/CreateGroup";
import PrivateRoute from "./PrivateRoute";
import AllGroups from "../components/AllGroups";
import Group from "../components/Group";
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
        path: "/group/:id",
        loader: () => fetch(`http://localhost:3000/api/allGroups`),
        element: (
          <PrivateRoute>
            <Group />
          </PrivateRoute>
        ),
      },
    ],
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
