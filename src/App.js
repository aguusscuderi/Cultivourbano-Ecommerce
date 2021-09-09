import { BrowserRouter, Switch, Route } from "react-router-dom"
import { useState } from "react"
//import { CartContext } from '../src/components/context/cartContext'
import CartContextLogic from '../src/components/context/cartContext'
import ProductsApi from '../src/components/context/productsContext'
import NavBar from  "./components/navbar/NavBar"
import ItemListContainer from './components/catalogo/itemListContainer'
import Index from './components/index/Index'
import ItemDetailContainer from './components/catalogo/ItemDetailContainer'
import Cart from './components/cart/Cart'
import './components/css/style.css';

function App() {
  return (
    <>
    <BrowserRouter>
    <CartContextLogic>
    <ProductsApi>
      <NavBar/>
      <Switch>
          <Route exact path="/">
            <Index/>
          </Route>
          <Route exact path="/products">
            <div className="products-div">
              <h2 className="products-h2">PRODUCTOS</h2>
              <ItemListContainer/>
            </div>
          </Route>
          <Route exact path={`/products/product/:idFire`}>
              <ItemDetailContainer/>
          </Route>
          <Route exact path={`/cart`}>
          <h2 className="products-h2">CARRITO</h2>
            <Cart/>
          </Route>
      </Switch>
      </ProductsApi>
      </CartContextLogic>
    </BrowserRouter>
   
    </> 
  );
}

export default App;
