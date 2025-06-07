import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Checkout page: collects user info and completes purchase
const Checkout = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });

  const navigate = useNavigate();

  // Handle input changes for the form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission, show alert, and redirect to home
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your purchase!");
    navigate("/");
  };

  return (
    <div className="max-w-xl mx-auto my-8 p-6 bg-white border border-gray-300 rounded-lg text-center">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="text-left">
          <label htmlFor="name" className="block font-semibold mb-2">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full max-w-lg px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="text-left">
          <label htmlFor="email" className="block font-semibold mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full max-w-lg px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="text-left">
          <label htmlFor="address" className="block font-semibold mb-2">
            Address:
          </label>
          <textarea
            id="address"
            name="address"
            className="w-full max-w-lg px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 resize-none h-24"
            value={formData.address}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-green-700 hover:bg-green-600 text-white px-6 py-2 rounded font-semibold transition"
        >
          Complete Purchase
        </button>
      </form>
    </div>
  );
};

export default Checkout;
