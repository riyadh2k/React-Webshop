import React from "react";
import "../css/Navbar.css";


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          Web Shop
        </a>
        <ul className="navbar-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/product">Products</a>
          </li>
          <li>
            <a href="/cart">Cart</a>
          </li>
          
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
