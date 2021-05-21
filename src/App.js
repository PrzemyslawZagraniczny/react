import './App.css';
import './Main.css';
import { BrowserRouter, Link, Route } from 'react-router-dom'
import Main from './Main'
import Product from './Product'

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
      </ul>
      
      <Route path="/main"> <Main/></Route>
      <Route path="/products"><Product/></Route>

      </BrowserRouter>
      </div>
      <div className="root"></div>       
    </div>
  );
}

export default App;
