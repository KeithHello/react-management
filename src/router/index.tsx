import Home from "../views/Home";
import Login from "../views/Login";
import { Navigate } from "react-router-dom";
import React, { lazy } from "react";

const Page1 = lazy(() => import("@/views/Page1"));
const Page2 = lazy(() => import("@/views/Page2"));
const Page301 = lazy(() => import("@/views/Page301"));
const Page302 = lazy(() => import("@/views/Page302"));
const Page303 = lazy(() => import("@/views/Page303"));
const Page401 = lazy(() => import("@/views/Page401"));
const Page402 = lazy(() => import("@/views/Page402"));
const Page403 = lazy(() => import("@/views/Page403"));
const Page5 = lazy(() => import("@/views/Page5"));

const withLoadingComponent = (comp: JSX.Element) => {
    return <React.Suspense fallback={<div>Loading...</div>}>{comp}</React.Suspense>;
};

const routes = [
    {
        path: "/",
        element: <Navigate to="/page1" />,
    },
    {
        path: "/",
        element: <Home />,
        children: [
            {
                path: "/page1",
                element: withLoadingComponent(<Page1 />),
            },
            {
                path: "/page2",
                element: withLoadingComponent(<Page2 />),
            },
            {
                path: "/page3/301",
                element: withLoadingComponent(<Page301 />),
            },
            {
                path: "/page3/302",
                element: withLoadingComponent(<Page302 />),
            },
            {
                path: "/page3/303",
                element: withLoadingComponent(<Page303 />),
            },
            {
                path: "/page4/401",
                element: withLoadingComponent(<Page401 />),
            },
            {
                path: "/page4/402",
                element: withLoadingComponent(<Page402 />),
            },
            {
                path: "/page4/403",
                element: withLoadingComponent(<Page403 />),
            },
            {
                path: "/page5",
                element: withLoadingComponent(<Page5 />),
            },
        ],
    },
    {
        path: "/login",
        element: <Login />,
    },
    // 404
    {
        path: "*",
        element: <Navigate to="/page1" />,
    },
];

export default routes;
