import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './routes/Root'
import HomePage from './pages/HomePage'
import Deals from './pages/Deals'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Error from './pages/Signup'
import './assets/styles/index.css'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    // loader: rootLoader,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
      path: "/products",
      element: <Deals />,
    },
    {
      path: "/buy",
      element: <Deals />,
    },
  ]
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <Signup />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

