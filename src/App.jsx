import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import {ShoppingDataProvider} from './components/ShoppingDataProvider'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <ShoppingDataProvider>
      <Navbar />
      <Outlet />
      <Footer />
    </ShoppingDataProvider>
  )
}

export default App
