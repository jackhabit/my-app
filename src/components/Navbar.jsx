import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="flex gap-4">
      <Link
        to="/"
        className={`text-white hover:underline ${
          location.pathname === "/" ? "font-bold underline" : ""
        }`}
      >
        Home
      </Link>
      <Link
        to="/cart"
        className={`text-white hover:underline ${
          location.pathname === "/cart" ? "font-bold underline" : ""
        }`}
      >
        Cart
      </Link>
      <Link
        to="/about"
        className={`text-white hover:underline ${
          location.pathname === "/about" ? "font-bold underline" : ""
        }`}
      >
        About
      </Link>
    </nav>
  );
};

export default Navbar;
