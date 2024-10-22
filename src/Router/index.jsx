import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import SignIn from "../Pages/SignIn";
import User from "../Pages/User";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/SignIn",
    element: <SignIn />,
  },
  {
    path: "/User",
    element: <User />,
  },
]);

export default router;
