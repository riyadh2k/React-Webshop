import React from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";

const Navbar = ({ numOfItemsInCart }) => {
  console.log(numOfItemsInCart);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h3>Web-Shop</h3>

        <ul className="navbar-links">
          <li>
            <Link to="/product">Products</Link>
          </li>
          <li>
            <Link to="/cart">
              Shopping Cart {numOfItemsInCart ? numOfItemsInCart : 0}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
