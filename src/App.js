import { BrowserRouter, Switch, Route } from "react-router-dom"
import { useState } from "react"
import { CartContext } from '../src/components/context/cartContext'
import CartContextLogic from '../src/components/context/cartContext'
import NavBar from  "./components/navbar/NavBar"
import ItemListContainer from './components/catalogo/itemListContainer'
import Index from './components/index/Index'
import ItemDetailContainer from './components/catalogo/ItemDetailContainer'
import Cart from './components/cart/Cart'
import './components/css/style.css';

function App() {

  const [cart, setCart] = useState([])
  const addItem = (item, quantity, count) => {
    setCart(item)
    Object.defineProperty(item, 'quantityToBuy', {value: quantity+count, writable: true})
  }

  /*
  const isInCart = (id) => {
    const isIt = cart.some(el => el.id === id)
  }*/

  
  /*const removeItem = (item) => {
    setCart(() => {cart.pop(item.id)})
  }*/

  /*
  const clear = () => {
    setCart()
  }*/

  return (
    <>
  
    <BrowserRouter>
      <NavBar/>
      <Switch>
        <CartContextLogic>
          <Route exact path="/">
            <Index/>
          </Route>
          <Route exact path="/products">
            <div className="products-div">
              <h2 className="products-h2">PRODUCTOS</h2>
              <ItemListContainer/>
            </div>
          </Route>
          <Route exact path={`/products/product/:id`}>
              <ItemDetailContainer/>
          </Route>
          <Route exact path={`/cart`}>
            <Cart/>
          </Route>
        </CartContextLogic>
      </Switch>
    </BrowserRouter>
   
    </> 
  );
}

export default App;
