import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { SignInFour } from './components/Signin.jsx'
import { SignUpThree } from './components/Signup.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'
import {Cart} from "./components/Cart.jsx"
import {Products} from "./components/Products.jsx"
import {Error} from "./components/ErrorComponent.jsx"
import { AboutPageOne } from './components/About.jsx'
import { Router } from 'lucide-react'

const rFunction = createBrowserRouter([
  {
    path : "/",
    element : <App />,
    children : [
      {
        path : "/",
        element : <Home />,   
      },
      {
        path : "/signin",
        element : <SignInFour />
      },
      {
        path : "/signup",
        element : <SignUpThree />
      },
      {
        path : "/about",
        element : <AboutPageOne />
      },
      {
        path : "/products",
        element : <Products />
      },
      {
        path : "/cart",
        element : <Cart />
      },
      
    ],
    errorElement : <Error />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={rFunction} ></RouterProvider> 
)
