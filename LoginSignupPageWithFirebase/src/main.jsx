import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { SignUp } from './components/Signup.jsx'
import { SignIn } from './components/Signin.jsx'


const renderFunction = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <SignUp />
      },
      {
        path: '/signin',
        element: <SignIn />
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={renderFunction} ></RouterProvider>
)
