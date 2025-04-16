import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation()

  return (
    <nav className="navbar">
      <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
      <Link to="/cart" className={location.pathname === '/cart' ? 'active' : ''}>Cart</Link>
    </nav>
  )
}

export default Navbar
