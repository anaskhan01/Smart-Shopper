import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Product from "./Pages/Product/Product";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Mobile from "./Pages/Product/ProductPages/Mobile";
import AddCart from "./Pages/AddCart";
import Laptops from "./Pages/Product/Laptops";
import Fashion from "./Pages/Product/ProductPages/Fashion";
import TV from "./Pages/Product/ProductPages/TV";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product/" element={<Product />} />
        <Route path="mobile" element={<Mobile />} />
        <Route path="laptops" element={<Laptops />} />
        <Route path="fashion" element={<Fashion />} />
        <Route path="tv" element={<TV />} />
        <Route path="addcart" element={<AddCart />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
