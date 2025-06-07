import React, { useState, useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Router from "./components/Router";
import useCart from "./components/UseCart";
import Footer from "./components/Footer";
import { useNavigate } from "react-router-dom";

function App() {
  // Get cart state and removeFromCart function from context
  const { cart, removeFromCart } = useCart();
  // State to control cart dropdown visibility
  const [showCartDropdown, setShowCartDropdown] = useState(false);
  // Ref for dropdown to detect outside clicks
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  // Toggle the cart dropdown open/close
  const toggleCartDropdown = () => setShowCartDropdown((prev) => !prev);

  // Close dropdown if clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowCartDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Go to the cart page and close dropdown
  const handleCheckout = () => {
    setShowCartDropdown(false);
    navigate("/cart");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 font-sans">
      <header className="bg-gray-900 text-white px-8 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">🛍 Food and Things</h1>
        <div className="flex items-center gap-4">
          <Navbar />
          <div
            className="relative cursor-pointer"
            onClick={toggleCartDropdown}
            ref={dropdownRef}
          >
            <span>🛒 {cart.length}</span>
            {showCartDropdown && (
              <div className="absolute top-10 right-0 bg-white border border-gray-300 rounded-lg shadow-lg w-64 p-2 z-50">
                {cart.length > 0 ? (
                  <>
                    <ul className="list-none p-0 m-0">
                      {cart.map((item, index) => (
                        <li
                          key={index}
                          className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0 text-black gap-x-2"
                        >
                          <span className="truncate">
                            {item.title} - ${item.price.toFixed(2)}
                          </span>
                          <button
                            className="text-red-600 text-xs hover:underline ml-2"
                            onClick={(e) => {
                              e.stopPropagation();
                              removeFromCart(item.id);
                            }}
                          >
                            Remove
                          </button>
                        </li>
                      ))}
                    </ul>
                    <button
                      className="w-full mt-2 bg-green-700 hover:bg-green-600 text-white py-2 rounded text-sm font-semibold transition"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCheckout();
                      }}
                    >
                      Go to Cart
                    </button>
                  </>
                ) : (
                  <p className="text-center text-gray-500 my-2">
                    Your cart is empty.
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </header>
      <main className="flex-1 flex flex-col p-4">
        <Router />
      </main>
      <Footer />
    </div>
  );
}

export default App;
