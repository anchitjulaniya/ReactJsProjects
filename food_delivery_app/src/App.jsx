
// import React from 'react'
// import ReactDOM from 'react-dom/client'
import Header from './Nav'
import Footer from './Footer'
import { Outlet} from 'react-router-dom'
// import About from './About'

// import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
   <>
      <Header />
      <Outlet />
      <Footer />
   </>  
  )
}

// const appRouter = createBrowserRouter([{
//   path:'/',
//   element:<App />
// },
// {
//   path:"/about",
//   element : <About />
// },

// ])


export default App
// ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={appRouter} />)
