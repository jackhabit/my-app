import { useContext } from "react";
import { CartContext } from "./CartContext";

// Custom hook to access cart context
const useCart = () => useContext(CartContext);

export default useCart;
