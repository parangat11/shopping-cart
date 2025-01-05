import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import {ShoppingDataProvider} from './components/ShoppingDataProvider'
import './App.css'

function App() {
  return (
    <ShoppingDataProvider>
      <Navbar />
      <Outlet />
    </ShoppingDataProvider>
  )
}

export default App
