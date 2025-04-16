import { useEffect, useState } from "react";
import useCart from "./UseCart";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [notification, setNotification] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched data:", data);
        setProducts(data.products || []);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
    setNotification(`${product.title} added to cart!`); 
    setTimeout(() => setNotification(null), 3000); 
  };

  return (
    <div className="home">
      {notification && <div className="notification">{notification}</div>} {}
      <div className="product-grid">
        {Array.isArray(products) &&
          products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.thumbnail} alt={product.title} />
              <h2>{product.title}</h2>
              <p>${product.price}</p>
              <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
