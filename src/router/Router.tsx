/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter } from "react-router-dom";
import {lazy} from "react";
import HomepageLayout from "../layout/HomepageLayout";
import AboutLayout from "../layout/AboutLayout";
import About from "../pages/about/About";
// import HomeComp from "../pages/homepage/HomeComp";

const HomeComp = lazy(() => import("../pages/homepage/HomeComp"))



export const element = createBrowserRouter ([
    {
        path: "/",
        element: <HomepageLayout />,
        children: [
            {
                index: true,
                element: <HomeComp />
            }
        ]
    },
    {
        path: "/about",
        element : <AboutLayout />,
        children: [
            {
                index: true,
                element: <About />
            }
        ]
    },
])
