import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ProductCategory = ({ category }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products", error));
    console.log();
  }, [category]);

  return (
    <div className="mb-6">
      <h2 className="text-2xl font-semibold mb-4 text-center hover:text-amber-500">
        {category}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-md rounded-lg p-4">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-40  mb-2"
            />
            <h3 className="text-lg font-semibold">{product.title}</h3>
            <p className="text-gray-500">Price: {product.price}$</p>
            <Link
              to={`/product/${product.id}`}
              className="border-x-5 rounded-md bg-slate-800 text-white hover:text-amber-500 "
            >
              Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCategory;
