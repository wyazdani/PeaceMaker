import LandingPage from "Pages/LandingPage";
import Home from "Pages/Home/loadable";
import User from "Pages/User/loadable";
import Profile from "Pages/Profile/loadable";
import NotFound from "Pages/NotFound/loadable";

import MainLayout from "Layout/MainLayout";
import AuthLayout from "../Layout/AuthLayout";
import login from "../Pages/Auth/login";

const routes = [
  //{ path: "/", component: LandingPage },
  //{ path: "/home", component: Home, layout: MainLayout },
  { path: "/",
    layout: AuthLayout,
    component: login
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
