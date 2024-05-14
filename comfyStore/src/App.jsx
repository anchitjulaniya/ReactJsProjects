import { ExampleNavbarThree } from "./components/Navbar"
import { FooterThree } from "./components/Footer"
import { Outlet } from "react-router-dom"
function App() {

  return (
    <>
      <ExampleNavbarThree />
      <Outlet />
      <FooterThree />
    </>
  )
}

export default App
