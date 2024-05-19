import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './components/Home.jsx'
import RemoveBg from './components/RemoveBg.jsx'
import Convert from './components/Convert.jsx'
import Download from './components/Download.jsx'
import Search from './components/Search.jsx'
import Support from './components/Support.jsx'
import Setting  from './components/Setting.jsx'


const renderFunction = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/remove',
        element: <RemoveBg />
      },
      {
        path: '/convert',
        element: <Convert />
      },
      {
        path: '/download',
        element: <Download />
      },
      {
        path: '/search',
        element:<Search />
      },
      {
        path: '/support',
        element:<Support />
      },
      {
        path: '/setting',
        element:<Setting />
      }
    ]
  },
  
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={renderFunction} />
)
