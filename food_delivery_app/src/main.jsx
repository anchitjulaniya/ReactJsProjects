
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Body from './Body.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import AboutClass from './AboutClass'
import Contact from './Contact.jsx'
import RestaurantMenuPage from './RestaurantMenuPage.jsx'

const appRouter = createBrowserRouter([{
  path:'/',
  element:<App />,
  children:[
    {
      path:"/",
      element:<Body />
    }
    ,
    {
      path:"/About",
      element : <AboutClass name={"Anchit Julaniya (class)"}/>
    },
    {
      path:"/contact",
      element:<Contact />
    },
    {
      path:"*",
      element:<div>Page Not Found</div>
    },
    {
      path:"/restaurant/:resId",  //  : -> means dynamic part 
      element:<RestaurantMenuPage />
    }
  ],
  errorElement:<div>Page Not Found from foodApp</div>,
},


])

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    // <App />
<RouterProvider router={appRouter} />
  // </React.StrictMode>,
)
