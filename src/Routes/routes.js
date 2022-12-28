import LandingPage from "Pages/LandingPage";
import Home from "Pages/Home/loadable";
import User from "Pages/User/loadable";
import Profile from "Pages/Profile/loadable";
import NotFound from "Pages/NotFound/loadable";

import MainLayout from "Layout/MainLayout";
import AuthLayout from "../Layout/AuthLayout";
import login from "../Pages/Auth/login";
import createNewPassword from "../Pages/Auth/createNewPassword";
import SignUp from "../Pages/Auth/signup";
import Dashboard from "../Pages/Dashboard";

const routes = [
  //{ path: "/", component: LandingPage },
  //{ path: "/home", component: Home, layout: MainLayout },
  { path: "/",
    layout: AuthLayout,
    component: login
  },
  {
    path: "/",
    layout: AuthLayout,
    component: login,
    subRoutes: [
      {
        path: "/",
        component: login,
      },
      {
        path: "/signin",
        component: login,
      },
      {
        path: "/forgot-password",
        component: createNewPassword,
      },
    ],
  },
  {
    path: "/",
    layout: AuthLayout,
    component: SignUp,
    subRoutes: [
      {
        path: "/SignUp",
        component: SignUp,
      },
    ],
  },
  { path: "/dashboard",
    layout: MainLayout,
    component: Dashboard
  },
  {
    path: "/user",
    layout: MainLayout,
    subRoutes: [
      {
        path: "/",
        component: User,
      },
      {
        path: "/profile",
        component: Profile,
      },
    ],
  },
  { path: "*", component: NotFound, layout: MainLayout },
];

export default routes;
