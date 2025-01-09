import App from './App.jsx'
import Home from './components/Home.jsx'
import Shop from './components/Shop.jsx'
import Cart from './components/Cart.jsx'
import Item from './components/Item.jsx'

const routes = [
    {
      path: "/",
      element: <App />,
      children: [
        {index: true, element: <Home />},
        {
          path: "shop", 
          element: <Shop />,
        },
        {
          path: "/:name",
          element: <Item />
        },
        {
          path: "/cart",
          element: <Cart />
        }
      ]
    },
]

export default routes