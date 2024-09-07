import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client"

import './index.css'

import Header from './src/component/Header'
import Body from "./src/component/Body";
import About from "./src/component/About";
import Contact from "./src/component/Contact";
import Error from "./src/component/Error";
import RestaurantMenu from "./src/component/RestaurantMenu";
import Shimmer from "./src/component/Shimmer";

//import Grocery from "./src/component/Grocery";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />

        </div>
    )
}

const Grocery = lazy(()=> import('./src/component/Grocery'))

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout/>,
        children: [
            {
                path: '/',
                element: <Body/>
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '/contact',
                element: <Contact/>
            },
            {
                path: '/restaurants/:resId',
                element: <RestaurantMenu />
            },
            {
                path: '/grocery',
                element: <Suspense fallback={<Shimmer/>}> <Grocery/> </Suspense>
            }
        ],

        errorElement: <Error/>
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter} />)