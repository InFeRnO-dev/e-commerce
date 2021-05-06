import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import React, { useState } from 'react';
import { isConnected } from './services/userService';
import Footer from "./components/footer/footer";
import Header from './components/header/header';
import About from "./pages/about";
import Contact from "./pages/contact";
import Home from "./pages/home";
import Product from "./pages/product";
import Login from "./pages/login";
import AllProduct from "./pages/allProduct";
import Cart from "./pages/cart";
import Address from "./pages/address";
import Recap from "./pages/recap";

export const AuthContext = React.createContext({
  isConnected: false,
  setConnected: (value) => {}
})

function App(props) {
  const [auth, setauth] = useState(isConnected())
  const contextValue = {
    isConnected: auth,
    setConnected: setauth
  }
  return (
      <>
        <AuthContext.Provider value={contextValue}>
          <Router>
            <Header />

              <Switch>
                <Route path="/login" component={Login}/>
                <Route path="/cart/recap" component={Recap}/>
                <Route path="/cart/adresses" component={Address}/>
                <Route path="/cart" component={Cart}/>
                <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/:slugcategory/:slugsubcategory/:id" component={Product}/>
                <Route path="/:slugcategory/:slugsubcategory" component={AllProduct}/>
                <Route path="/:slugcategory" component={AllProduct}/>
                <Route path="/" component={Home}/>
              </Switch>
            
            <Footer />
          </Router>
        </AuthContext.Provider>
      </>
  );
}

export default App;
