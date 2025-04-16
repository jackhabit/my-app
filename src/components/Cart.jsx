import useCart from "./UseCart";

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  const handleOrder = () => {
    alert("Thank you for your order!");
  };

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cart.map((item, index) => (
              <li key={index} className="cart-item">
                <span>{item.title} - ${item.price.toFixed(2)}</span>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <h3>Total: ${totalPrice.toFixed(2)}</h3>
          </div>
          <button className="order-button" onClick={handleOrder}>
            Place Order
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
