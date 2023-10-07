import React, { useEffect, useState } from "react";
import HomePage from "../HomePage/HomePage";
import Feature from "../Feature/Feature";
import ProductCategory from "../ProductCategory/ProductCategory";

const Home = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error fetching categories", error));
  }, []);
  return (
    <div>
      <HomePage />
      <Feature />
      {/* <Products /> */}
      <div className="container mx-auto px-4 py-8">
        {categories.map((category) => (
          <ProductCategory key={category} category={category} />
        ))}
      </div>
    </div>
  );
};

export default Home;
