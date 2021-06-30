import './App.css';
import './Main.css';
import { BrowserRouter, Link, Route } from 'react-router-dom'
import Main from './Main'
import Product from './Product'
import Category from './Category'
import Shop from './Shop'
import Promocje from './Promocje'
import Stock from './Stock'
import Discount from './Discount'
import Koszyk from './Koszyk'
import DiscountForm from './DiscountForm'
import CategoryForm from './CategoryForm'
import ProductForm from './ProductForm'
import {ShopContextProvider} from "./ShopContext";

import LogIn from './LogIn'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div className="menu">
      <ShopContextProvider>
      <BrowserRouter>
        <ul>
          <li><Link to="/">Strona główna</Link>  </li>
          <li><Link to="/searchproducts">Sklep</Link>  </li>
          <li><Link to="/promocje">Promocje</Link>  </li>
          <li><Link to="/products">Produkty</Link>  </li>
          <li><Link to="/addproduct">Dodaj Produkt</Link>  </li>
          <li><Link to="/cats">Kategorie</Link>  </li>
          <li><Link to="/addcat">Dodaj Kategorię</Link>  </li>
          <li><Link to="/discounts">Bonifikaty</Link>  </li>
          <li><Link to="/adddiscount">Nowa Bonifikata</Link>  </li>
          <li><Link to="/stocks">Stan magazynu</Link>  </li>
          <li><Link to="/basket">Koszyk</Link>  </li>
          <li><Link to="/login">LogIn</Link>  </li>
        </ul>
        
        <Route path="/"> <Main/></Route>
        <Route path="/products"><Product/></Route>
        <Route path="/searchproducts"><Shop/></Route>
        <Route path="/promocje"><Promocje/></Route>
        <Route path="/addproduct"><ProductForm/></Route>
        <Route path="/cats"><Category/></Route>
        <Route path="/addcat"><CategoryForm/></Route>
        <Route path="/discounts"><Discount/></Route>
        <Route path="/adddiscount"><DiscountForm/></Route>
        <Route path="/stocks"><Stock/></Route>
        <Route path="/basket"><Koszyk/></Route>
        <Route path="/login"><LogIn/></Route>
      </BrowserRouter>
      </ShopContextProvider>
      </div>
      <div className="root"></div>       
    </div>
  );
}

export default App;
