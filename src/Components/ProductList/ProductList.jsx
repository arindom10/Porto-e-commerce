import React from "react";
import Product from "../Product/Product";

const ProductList = ({ isProductsLoaded, products }) => {
  return (
    <div className="container mx-auto">
      <h1 className="text-center text-3xl hover:text-amber-500 mt-6">
        !!Feature Products!!
      </h1>
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

export default ProductList;
