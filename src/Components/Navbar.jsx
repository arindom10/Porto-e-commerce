import React from "react";

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
            <a href="#home" className="text-white">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="text-white">
              About
            </a>
          </li>
          <li>
            <a href="#products" className="text-white">
              Products
            </a>
          </li>
          <li>
            <a href="#contact" className="text-white">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
