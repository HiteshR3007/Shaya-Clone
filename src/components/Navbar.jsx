import React from "react";
import "./Navbar.css";
import { FaUser, FaSearch, FaHeart, FaShoppingBag } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";
import { Link } from "react-router-dom";

const Navbar = () => {

  const { cartItems } = useContext(CartContext);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="navbar">

      {/* navbar left part */}
      
      <div className="nav-left">
        <div className="logo">SHAYA</div>
        <div className="nav-links">
          <span>EARRINGS</span>
          <span>NECKLACES</span>
          <span>RINGS</span>
          <span>BRACELETS</span>
          <span>MORE STYLES</span>
          <span>GIFTS</span>
        </div>
      </div>


      {/* navbar Right part where all the users are there */}

      <div className="nav-right">
        <FaUser size={27} />
        <div className="divider" />
        <img src="/caratlane.png" alt="shaya" className="brand-icon" />
        <FaSearch size={27} />
        <div className="icon-wrap">
          <FaHeart size={27} />
          <span className="badge red">0</span>
        </div>
        <Link to="/cart" className="icon-wrap">
          <FaShoppingBag size={27} />
          <span className="badge">{totalItems}</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
