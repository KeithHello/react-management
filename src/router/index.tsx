import Home from "../views/Home";
import { Navigate } from "react-router-dom";
import React, { lazy } from "react";

const About = lazy(() => import("../views/About"));
const User = lazy(() => import("../views/User"));

const withLoadingComponent = (comp: JSX.Element) => {
    return <React.Suspense fallback={<div>Loading...</div>}>{comp}</React.Suspense>;
};

const routes = [
  {
    path: "/",
    element: <Navigate to="/home" />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/about",
    element: withLoadingComponent(<About />),
  },
  {
    path: "/user",
    element: withLoadingComponent(<User />),
  },
];

export default routes;
