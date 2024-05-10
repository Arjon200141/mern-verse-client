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


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path:"/login",
        element: <LogIn></LogIn>
      },
      {
        path:"/register",
        element: <Register></Register>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
