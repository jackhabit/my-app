import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Cart from './Cart';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default Router;
