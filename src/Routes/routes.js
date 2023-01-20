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
import HomePage from "Pages/HomePage";
import ExploreProvider from "Pages/ExploreProvider";
import MapShow from "Pages/ExploreProvider/MapShow";
import HabitTracker from "Pages/HabitTracker";
import ClickSection from "Pages/HabitTracker/ClickSection";
import PopUp from "Pages/HabitTracker/PopUp";
import AddHabitNext from "Pages/HabitTracker/AddHabitNext";
import Affirmations from "Pages/Affirmations";
import SettingIconClick from "Pages/Affirmations/SettingIconClick";
import Journal from "Pages/Journal";
import AddEntryButton from "Pages/Journal/AddEntryButton";
import Challenges from "Pages/Challenges";
import NextScreen from "Pages/Challenges/NextScreen";
import Counter from "Components/Counter";
import LevelOneChallenge from "Components/LevelOneChallenge";
import LevelOne from "Pages/Challenges/levelOne";
import YellowButton from "Pages/Challenges/YellowButton";
import Notification from "Pages/Notification";
import Review from "Pages/Review";
import ProfilePage from "Pages/ProfilePage";
import List from "Components/AccordianList";
import SecondHeader from "Components/Header/SecondHeader";
import Messages from "Pages/Messages";
import { PieChart } from "Pages/PieChart";
import { BarChart } from "Components/Chart/BarChart";
import UserProfile from "Pages/User/UserProfile";

import DateSet from "Components/DatePicker";
import CSV from "Components/CSV";
import VerifyAccount from "../Pages/Auth/verifyAccount";
import SendOTPPhone from "../Pages/Auth/otpphone";

const routes = [
  //{ path: "/", component: LandingPage },
  //{ path: "/home", component: Home, layout: MainLayout },
  {
    path: "/login",
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
  {
    path: "/otp-phone",
    layout: AuthLayout,
    component: SendOTPPhone,
  },
  {
    path: "/home",
    layout: MainLayout,
    component: HomePage
  },
  {
    path: "/verify-account",
    layout: AuthLayout,
    component: VerifyAccount,
  },
  {
    path: "/user-profile",
    layout: MainLayout,
    component: UserProfile,
  },
  {
    path: "/explore-provider",
    layout: MainLayout,
    component: ExploreProvider
  },
  {
    path: "/map-show",
    layout: MainLayout,
    component: MapShow
  },
  {
    path: "/date",
    layout: MainLayout,
    component: DateSet
  },
  {
    path: "/csv",
    layout: MainLayout,
    component: CSV
  },

  
  {
    path: "/habit-tracker",
    layout: MainLayout,
    component: HabitTracker
  },
  {
    path: "/click-section",
    layout: MainLayout,
    component: ClickSection
  },
  {
    path: "/profile",
    layout: MainLayout,
    component: ProfilePage
  },
  {
    path: "/list",
    layout: MainLayout,
    component: List
  },
  {
    path: "/second-header",
    layout: MainLayout,
    component: SecondHeader
  },
  {
    path: "/messages",
    layout: MainLayout,
    component: Messages
  },
  {
    path: "/piechart",
    layout: MainLayout,
    component: PieChart
  },
  {
    path: "/barchart",
    layout: MainLayout,
    component: BarChart
  },
  {
    path: "/popup",
    layout: MainLayout,
    component: PopUp
  },
  {
    path: "/add-habit-next",
    layout: MainLayout,
    component: AddHabitNext
  },
  {
    path: "/affirmations",
    layout: MainLayout,
    component: Affirmations
  },
  {
    path: "/challenges",
    layout: MainLayout,
    component: Challenges
  },
  {
    path: "/level-one",
    layout: MainLayout,
    component: LevelOne
  },
  {
    path: "/yellow-button",
    layout: MainLayout,
    component: YellowButton
  },
  {
    path: "/notification",
    layout: MainLayout,
    component: Notification
  },
  {
    path: "/review",
    layout: MainLayout,
    component: Review
  },
  {
    path: "/level-one-challenge",
    layout: MainLayout,
    component: LevelOneChallenge
  },
  {
    path: "/next-screen",
    layout: MainLayout,
    component: NextScreen
  },
  {
    path: "/counter",
    layout: MainLayout,
    component: Counter
  },
  {
    path: "/setting-icon-click",
    layout: MainLayout,
    component: SettingIconClick
  },
  {
    path: "/journal",
    layout: MainLayout,
    component: Journal
  },
  {
    path: "/add-entry-button",
    layout: MainLayout,
    component: AddEntryButton
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
