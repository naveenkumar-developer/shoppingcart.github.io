import React from "react";
import "./App.css";
import Home from "./components/Home";
import Cart from "./components/cart";
import Header from "./components/header";
import Showcattegories from "./components/showcattegories";
import SliderAndOffer from "./components/sliderAndOffer";
import Main from "./components/main";
import Footer from "./components/footer";
import { CartProvider } from "react-use-cart";
export default function App() {
  return (
    <>
      <Header />
      <Showcattegories />
      <SliderAndOffer />
      <CartProvider>
        <Home />
        <Cart />
      </CartProvider>
      <Main />
      <Footer />
    </>
  );
}
