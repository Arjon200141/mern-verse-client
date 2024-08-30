import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from './Components/Root/Root';
import Services from './Components/Layouts/Services';
import Home from './Components/Home/Home';
import AddServices from './Components/Layouts/AddServices';
import ManageService from './Components/Layouts/ManageService';
import BookedServices from './Components/Layouts/BookedServices';
import ServicesToDo from './Components/Layouts/ServicesToDo';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import LogIn from '../src/Components/Log In/LogIn';
import Register from '../src/Components/Log In/Register';
import AuthProviders from './Components/providers/AuthProviders';
import ServiceDetails from './Components/Layouts/ServiceDetails';
import PrivateRoutes from './Components/Layouts/PrivateRoutes';
import Update from './Components/Layouts/Update';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AdminRoutes from './Components/AdminRoutes/AdminRoutes';
import AllBookings from './Components/Layouts/AllBookings';
import About from './About';

// Create an instance of QueryClient
const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/services/"),
      },
      {
        path: "/services",
        element: <Services></Services>,
        loader: () => fetch("http://localhost:5000/services/"),
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
        path: "/booking",
        element: <BookedServices></BookedServices>,
      },
      {
        path: "/servicetodo",
        element: <ServicesToDo></ServicesToDo>,
      },
      {
        path: "services/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
      },
      {
        path: "update/:id",
        element: <Update></Update>,
        loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
      },
      {
        path:"/allbookings",
        element:<AllBookings></AllBookings>
      },
      {
        path:"/about",
        element:<About></About>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProviders>
        <RouterProvider router={router} />
      </AuthProviders>
    </QueryClientProvider>
  </React.StrictMode>,
);
