import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Cart from "./Cart";
import ProductDetails from "./ProductDetails";
import About from "./About";
import Checkout from "./Checkout";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/about" element={<About />} />
      <Route path="/product/:productId" element={<ProductDetails />} />
      <Route path="/checkout" element={<Checkout />} /> {}
    </Routes>
  );
};

export default Router;
