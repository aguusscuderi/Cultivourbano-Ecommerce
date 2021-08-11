
import NavBar from  "./components/navbar/NavBar"
import ItemListContainer from './components/catalogo/itemListContainer'
import Index from './components/index/Index'
import './components/css/style.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Index/>
      <div className="products-div">
        <h2 className="products-h2">PRODUCTOS</h2>
        <ItemListContainer/>
      </div>
    </div>
  );
}

export default App;
