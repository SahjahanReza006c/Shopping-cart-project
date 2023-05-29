import { Router } from "@reach/router";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import './App.css';
import { useThemeHook } from './GlobalComponents/ThemeProvider';

import Footer from './components/Footer';
import Header from './components/Header';
import './components/footer.css';

//Pages
import Cart from './Pages/Cart';
import Home from './Pages/Home';
import MyAccount from "./Pages/MyAccount";
import ProductDetails from "./Pages/ProductDetails";
import Register from "./Pages/Register";
import SignIn from "./Pages/SignIn";


function App() {
  const [theme] = useThemeHook();
  return (
    <main className={theme? 'bg-black': 'bg-light-2'} style={{ height: '100vh', overflowY: 'auto'}}>
      <Header/>
      <Router>
        <Home path="/" />
        <MyAccount path="my-account" />
        <SignIn path="sign-in"/>
        <Register path="register"/>
        <ProductDetails path="product-details/:productId"/>
        <Cart path="/cart" />
      </Router>
      <Footer/>
    </main>
   
  );
}

export default App;
