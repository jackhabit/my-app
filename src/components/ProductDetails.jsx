import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useCart from "./UseCart";

// Shows product info, reviews, and add to cart
const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notification, setNotification] = useState(null);
  const { addToCart } = useCart();

  // Fetch product details
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((error) =>
        console.error("Error fetching product details:", error)
      );
  }, [productId]);

  if (loading) {
    return <p className="text-center py-8">Loading...</p>;
  }

  if (!product) {
    return <p className="text-center py-8">Product not found.</p>;
  }

  // Add product to cart and show notification
  const handleAddToCart = () => {
    addToCart(product);
    setNotification(`${product.title} has been added to your cart!`);
    setTimeout(() => setNotification(null), 3000);
  };

  return (
    <div className="max-w-2xl mx-auto my-8 p-6 bg-white border border-gray-300 rounded-lg text-center">
      {notification && (
        <div className="fixed top-20 right-6 bg-green-600 text-white px-4 py-2 rounded shadow z-10 animate-fade">
          {notification}
        </div>
      )}
      <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
      <img
        src={product.thumbnail}
        alt={product.title}
        className="max-w-full h-64 object-contain mx-auto mb-4"
      />
      <p className="mb-2">
        <span className="font-semibold">Price:</span> ${product.price}
      </p>
      <p className="mb-2">
        <span className="font-semibold">Description:</span>{" "}
        {product.description}
      </p>
      <p className="mb-4">
        <span className="font-semibold">Category:</span> {product.category}
      </p>
      <button
        className="bg-green-700 hover:bg-green-600 text-white px-6 py-2 rounded mb-6"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
      <h3 className="text-lg font-semibold mt-6 mb-2">Reviews</h3>
      <ul className="list-none p-0">
        {product.reviews && product.reviews.length > 0 ? (
          product.reviews.map((review, index) => (
            <li key={index} className="bg-gray-100 p-3 my-2 rounded text-left">
              <p>
                <span className="font-semibold">Rating:</span> {review.rating}/5
              </p>
              <p>
                <span className="font-semibold">Comment:</span> {review.comment}
              </p>
              <p>
                <span className="font-semibold">Reviewer:</span>{" "}
                {review.reviewerName} ({review.reviewerEmail})
              </p>
            </li>
          ))
        ) : (
          <p className="text-gray-500">No reviews available.</p>
        )}
      </ul>
    </div>
  );
};

export default ProductDetails;
