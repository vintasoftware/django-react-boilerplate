import { createBrowserRouter } from "react-router";

import { usersLoader } from "../loaders";
import Home from "../pages/Home";
import Users from "../pages/Users";

const router = createBrowserRouter([
  { index: true, Component: Home },
  { path: "users", Component: Users, loader: usersLoader },
]);

export default router;
