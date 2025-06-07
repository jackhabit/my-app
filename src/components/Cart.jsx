import useCart from "./UseCart";
import { useNavigate } from "react-router-dom";

// Cart page component: shows cart items, total, and place order button
const Cart = () => {
  const { cart, removeFromCart } = useCart();
  const navigate = useNavigate();

  // Calculate total price of items in cart
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  // Go to checkout page
  const handleOrder = () => {
    navigate("/checkout");
  };

  return (
    <div className="bg-gray-50 p-6 rounded-lg max-w-2xl mx-auto my-8 shadow">
      <h2 className="text-2xl font-bold mb-4">Cart</h2>
      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cart.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0 gap-x-8"
              >
                <span>
                  {item.title} - ${item.price.toFixed(2)}
                </span>
                <button
                  className="text-red-600 hover:underline"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-6 text-lg font-semibold flex justify-between items-center">
            <span>Total:</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <button
            className="bg-green-700 hover:bg-green-600 text-white px-6 py-2 rounded mt-6 font-semibold transition"
            onClick={handleOrder}
          >
            Place Order
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
