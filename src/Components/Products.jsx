import React, { useEffect, useState } from "react";
import Product from "./Product/Product";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isProductsLoaded, setisProductsLoaded] = useState(false);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    setisProductsLoaded(false);
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      setProducts(res.data);
      setisProductsLoaded(true);
      console.log(res);
    } catch (error) {
      console.log(error);
      setisProductsLoaded(true);
    }
  };
  return (
    <div className="container mx-auto">
      {isProductsLoaded ? (
        <>
          {products.length ? (
            <div className=" grid grid-cols-1 md:grid-cols-4 gap-4">
              {products.map((product) => (
                <Product product={product}></Product>
              ))}
            </div>
          ) : (
            <p>No products found</p>
          )}
        </>
      ) : (
        <div className="flex justify-center items-center min-h-screen">
          <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
};

export default Products;
