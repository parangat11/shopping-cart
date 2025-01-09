import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import {ShoppingDataProvider} from './components/ShoppingDataProvider'

function App() {
  return (
    <ShoppingDataProvider>
      <Navbar />
      <div className="outlet">
        <Outlet />
      </div>
    </ShoppingDataProvider>
  )
}

export default App
