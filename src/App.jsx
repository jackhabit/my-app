import React from "react";
import Navbar from "./components/Navbar";
import './App.css';
import Router from "./components/Router";
import useCart from "./components/UseCart";

function App() {
  const { cart } = useCart();

  return (
    <>
      <header className="header">
        <h1>🛍 My Shop</h1>
        <div className="header-right">
          <Navbar />
          <div>🛒 {cart.length}</div>
        </div>
      </header>
      <main className="main">
        <Router /> {/* Use Router to handle routes */}
      </main>
    </>
  );
}

export default App;
