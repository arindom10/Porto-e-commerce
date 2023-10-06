import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-slate-800 p-4 mb-7">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-white text-xl font-semibold hover:text-amber-600"
        >
          SHOPPING CART
        </Link>

        {/* Navigation Links */}
        {/* Show burger button on mobile screens */}
        <button className="text-white md:hidden" onClick={toggleMobileMenu}>
          &#9776; {/* Burger icon */}
        </button>

        {/* Full menu on larger screens */}
        <ul
          className={`md:flex space-x-4 ${
            isMobileMenuOpen ? "hidden" : "block"
          }`}
        >
          <li>
            <Link to="/" className="text-white hover:text-amber-400">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-white hover:text-amber-400">
              About
            </Link>
          </li>
          <li>
            <Link to="/products" className="text-white hover:text-amber-400">
              Products
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-white hover:text-amber-400">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
