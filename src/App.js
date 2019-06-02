import React from 'react';
import Header from './components/header';
import RegistrationForm from './components/registrationForm';
import SignInForm from './components/signInForm';
import Cart from './components/cart';
import AboutUs from './components/aboutUs';
import SimpleMap from'./components/contact';
import Slider from './components/slider';
import Products from './components/products';
import Product from './components/product';
import Footer from './components/footer';

import { Router } from "@reach/router";
import 'font-awesome/css/font-awesome.css';

const Home = (props) => {
  return (
    <React.Fragment>
      <Slider />
      <Products />
    </React.Fragment>
  )
}

function App() {
  return (
    <div> 
      <Header />
      <Router>
        <Home path="/"/>
        <AboutUs path="/AboutUs" />
        <RegistrationForm path="/registration" />
        <SignInForm path="/signIn" />
        <Cart path="/MyBag" />
        <Product path="/Product/:id"/>
        <SimpleMap path="/contact" />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
