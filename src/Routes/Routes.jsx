import {
    createBrowserRouter,
  
  } from "react-router-dom";
import Root from "../root/Root";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import ErrorPage from "../pages/ErrorPage";
import Admin from "../pages/Dashboard/roles/Admin";
import User from "../pages/Dashboard/roles/User";
import Agent from "../pages/Dashboard/roles/Agent";
import Transaction from "../pages/Dashboard/roles/user/Transaction";
import TransactionForm from "../pages/Dashboard/roles/user/TransactionForm";
import BalanceInquiry from "../pages/Dashboard/roles/user/BalanceInquiry";
import TransactionHistory from "../pages/Dashboard/roles/user/TransactionHistory";





  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
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
    //Dashboard routing:
    {
      path: 'dashboard',
      element: <Dashboard></Dashboard>,
      children:[
        {
          path: 'admin',
          element : <Admin></Admin>
        },
        {
          path: 'user',
          element : <User></User>
        },
        {
          path: 'agent',
          element : <Agent></Agent>
        },
        {
          path: 'transaction',
          element: <Transaction></Transaction>
        },
        {
          path: 'transactionForm',
          element: <TransactionForm></TransactionForm>
        },
        {
          path: 'balanceInquiry',
          element: <BalanceInquiry></BalanceInquiry>
        },
        {
          path: 'transactionHistory',
          element: <TransactionHistory></TransactionHistory>
        },
       
      ]
    }
  ]);