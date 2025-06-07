import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useCart from "./UseCart";

// Shows products, categories, and handles add to cart
const Home = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [notification, setNotification] = useState(null);
  const { addToCart } = useCart();

  // Fetch products and categories on mount
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products || []);
        setFilteredProducts(data.products || []);
        const uniqueCategories = [
          ...new Set(data.products.map((p) => p.category)),
        ];
        setCategories(uniqueCategories);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  // Add product to cart and show notification
  const handleAddToCart = (product) => {
    addToCart(product);
    setNotification(`${product.title} added to cart!`);
    setTimeout(() => setNotification(null), 3000);
  };

  // Filter products by category
  const filterByCategory = (category) => {
    if (category === "all") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter((product) => product.category === category)
      );
    }
  };

  return (
    <div className="home">
      {notification && (
        <div className="fixed top-20 right-6 bg-green-600 text-white px-4 py-2 rounded shadow z-10 animate-fade">
          {notification}
        </div>
      )}
      <div className="flex justify-center gap-4 mb-4 flex-wrap">
        <button
          className="bg-green-900 text-white px-4 py-2 rounded hover:bg-green-600"
          onClick={() => filterByCategory("all")}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            className="bg-green-900 text-white px-4 py-2 rounded hover:bg-green-600"
            onClick={() => filterByCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-7xl mx-auto">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-blue-50 p-4 border border-gray-300 rounded-lg text-center transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg hover:border-blue-500 flex flex-col items-center"
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              className="h-24 object-contain mb-2"
            />
            <h2 className="text-lg font-semibold mb-1">{product.title}</h2>
            <p className="font-bold mb-2">${product.price}</p>
            <div className="flex gap-2">
              <button
                className="bg-green-900 text-white px-3 py-1 rounded hover:bg-green-600"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
              <Link to={`/product/${product.id}`}>
                <button className="bg-blue-700 text-white px-3 py-1 rounded hover:bg-blue-500">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
