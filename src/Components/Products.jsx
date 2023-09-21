import React, { useEffect, useState } from "react";
import Product from "./Product/Product";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <h1>Products Cart {products.length}</h1>
      {products.map((product) => (
        <Product
          title={product.title}
          price={product.price}
          image={product.image}
          rating={product.rating.rate}
        ></Product>
      ))}
    </div>
  );
};

export default Products;
