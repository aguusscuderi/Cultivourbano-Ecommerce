
import NavBar from  "./components/navbar/NavBar"
import ItemListContainer from './components/catalogo/itemListContainer'
import './components/css/style.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting = "Futuro Catalogo"/>
    </div>
  );
}

export default App;
