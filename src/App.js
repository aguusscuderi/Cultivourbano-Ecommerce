import { BrowserRouter, Switch, Route } from "react-router-dom"
import NavBar from  "./components/navbar/NavBar"
import ItemListContainer from './components/catalogo/itemListContainer'
import Index from './components/index/Index'
import ItemDetailContainer from './components/catalogo/ItemDetailContainer'
import './components/css/style.css';

function App() {
  return (
    <>
    <BrowserRouter>
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
      <Route exact path={`/products/product/:id`}>
        <ItemDetailContainer/>
      </Route>
    </Switch>
    </BrowserRouter>
    </> 
  );
}

export default App;
