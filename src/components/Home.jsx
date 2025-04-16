import { useEffect, useState } from "react";
import useCart from "./UseCart";

const Home = () => {
  const [products, setProducts] = useState([]);
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

  return (
    <div className="product-grid">
      {Array.isArray(products) && products.map((product) => (
  <div key={product.id} className="product-card">
    <img src={product.thumbnail} alt={product.title} />
    <h2>{product.title}</h2>
    <p>${product.price}</p>
    <button onClick={() => addToCart(product)}>Add to Cart</button>
  </div>
))}
    </div>
  );
};

export default Home;
