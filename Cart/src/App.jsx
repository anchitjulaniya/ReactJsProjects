
import './App.css'
import {Outlet} from 'react-router-dom'
import {Navbar} from './components/Navbar'
import {CartProvider} from 'react-use-cart'
function App() {

  return (
    <CartProvider>
      <Navbar />
      <Outlet />
    </CartProvider>
  )
}

export default App
