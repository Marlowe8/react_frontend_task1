import React from "react";
import { Link, useLocation } from "react-router-dom";
const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/users" className={location.pathname === "/users" ? "active" : ""}>
            Users
          </Link>
        </li>
        <li>
          <Link to="/products" className={location.pathname === "/products" ? "active" : ""}>
            Products
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
