import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Cart  from './components/Cart.jsx'
import Products from './components/Products.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
const ren = createBrowserRouter([
  {
    path: '/',
    element: <App />,
 
  children : [
    {
      path: '/',
      element: <Products />,
    }
    ,{
      path: '/cart',
      element: <Cart />
    }
  ]
},
])
ReactDOM.createRoot(document.getElementById('root')).render(

  <RouterProvider router={ren} />
)
