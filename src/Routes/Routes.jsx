import {
    createBrowserRouter,
  
  } from "react-router-dom";
import Root from "../root/Root";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <h1>404 page not found</h1>,
      children: [
        {
            path: "/",
            element : <Home></Home>
        },
        {
            path: "/login",
            element : <Login></Login>
        },
        {
            path: "/register",
            element : <Register></Register>
        },
        {
            path: "/dashboard",
            element : <Dashboard></Dashboard>
        },
      ]
    },
  ]);