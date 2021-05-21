import './App.css';
import './Main.css';
import { BrowserRouter, Link, Route } from 'react-router-dom'
import Main from './Main'
import Product from './Product'
import Category from './Category'
import CategoryForm from './CategoryForm'
import ProductForm from './ProductForm'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div className="menu">
      <BrowserRouter>
      <ul>
        <li><Link to="/">Strona główna</Link>  </li>
        <li><Link to="/products">Produkty</Link>  </li>
        <li><Link to="/addproduct">Dodaj Produkt</Link>  </li>
        <li><Link to="/cats">Kategorie</Link>  </li>
        <li><Link to="/addcat">Dodaj Kategorię</Link>  </li>
      </ul>
      
      <Route path="/main"> <Main/></Route>
      <Route path="/products"><Product/></Route>
      <Route path="/addproduct"><ProductForm/></Route>
      <Route path="/cats"><Category/></Route>
      <Route path="/addcat"><CategoryForm/></Route>
      </BrowserRouter>
      </div>
      <div className="root"></div>       
    </div>
  );
}

export default App;
