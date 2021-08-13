import Products from './components/Products';
import Navbar from './components/Navbar';
import './App.css';
import CheckoutPage from './components/CheckoutPages';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/checkout-pages">
            <CheckoutPage />
          </Route>
          <Route path="/">
            <Products />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
