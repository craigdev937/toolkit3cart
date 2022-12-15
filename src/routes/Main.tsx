import React from "react";
import { createBrowserRouter, 
    RouterProvider } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Home } from "../pages/Home/Home";
import { Product } from "../pages/Product/Product";
import { Category } from "../pages/Category/Category";
import { Search } from "../pages/Search/Search";
import { Cart } from "../pages/Cart/Cart";
import { ErrorCom } from "../components/ErrorCom";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Navbar />,
        errorElement: <ErrorCom />,
        children: [
            {
                path: "/",
                element: <Home />,
                errorElement: <ErrorCom />
            },
            {
                path: "/product/:id",
                element: <Product />,
                errorElement: <ErrorCom />
            },
            {
                path: "/category/:category",
                element: <Category />,
                errorElement: <ErrorCom />
            },
            {
                path: "/cart",
                element: <Cart />,
                errorElement: <ErrorCom />
            },
            {
                path: "/search/:searchTerm",
                element: <Search />,
                errorElement: <ErrorCom />
            }
        ]
    }
]);

export const Main = (): JSX.Element => {
    return (
        <React.Fragment>
            <RouterProvider router={Router} />
        </React.Fragment>
    );
};


