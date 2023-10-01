import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-slate-800 p-4 ">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="text-white text-xl font-semibold">
          SHOPPING CART
        </a>

        {/* Navigation Links */}
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-white">
              Home
            </Link>
          </li>
          <li>
            <Link to="about" className="text-white">
              About
            </Link>
          </li>
          <li>
            <Link to="products" className="text-white">
              Products
            </Link>
          </li>
          <li>
            <Link to="contact" className="text-white">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
