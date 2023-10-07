import React, { useEffect, useState } from "react";
import HomePage from "../HomePage/HomePage";
import Feature from "../Feature/Feature";
import ProductCategory from "../ProductCategory/ProductCategory";
import PageLoader from "./PageLoader"; // Import the PageLoader component

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Initialize loading state as true

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
        setIsLoading(false); // Set loading to false when data is fetched
      })
      .catch((error) => {
        console.error("Error fetching categories", error);
        setIsLoading(false); // Set loading to false in case of an error
      });
  }, []);

  return (
    <div>
      {isLoading ? (
        // Display the loader while isLoading is true
        <PageLoader />
      ) : (
        // Display your page content when isLoading is false
        <div>
          <HomePage />
          <Feature />
          <div className="container mx-auto px-4 py-8">
            {categories.map((category) => (
              <ProductCategory key={category} category={category} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
