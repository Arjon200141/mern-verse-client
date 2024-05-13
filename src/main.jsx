import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root from './Components/Root/Root';
import Services from './Components/Layouts/Services';
import LogIn from './Components/Log In/LogIn';
import Register from './Components/Log In/Register';
import Home from './Components/Home/Home';
import AddServices from './Components/Layouts/AddServices';
import ManageService from './Components/Layouts/ManageService';
import BookedServices from './Components/Layouts/BookedServices';
import ServicesToDo from './Components/Layouts/ServicesToDo';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import AuthProviders from './Components/providers/AuthProviders';
import PopularServices from './Components/Layouts/PopularServices';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("allservices.json"),
      },
      {
        path: "/services",
        element: <Services></Services>,
        loader: () => fetch("allservices.json"),
      },
      {
        path: "/popular",
        element: <PopularServices></PopularServices>,
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/addservice",
        element: <AddServices></AddServices>,
      },
      {
        path: "/manageservice",
        element: <ManageService></ManageService>,
      },
      {
        path: "/bookedservice",
        element: <BookedServices></BookedServices>,
      },
      {
        path: "/servicetodo",
        element: <ServicesToDo></ServicesToDo>,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>,
)
