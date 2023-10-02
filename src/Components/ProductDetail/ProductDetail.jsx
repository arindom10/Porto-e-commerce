import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const ProductDetail = () => {
  const productId = useLoaderData();
  const [productDetails, setProductDetails] = useState({});
  const [isProductDetailsloaded, setisProductDetailsloaded] = useState(false);
  useEffect(() => {
    setisProductDetailsloaded(false);
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        setProductDetails(data);
        setisProductDetailsloaded(true);
      });
  }, [productId]);

  return (
    <div className="product max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl ">
      {isProductDetailsloaded ? (
        <>
          <div className="flex items-center justify-center ">
            <img src={productDetails?.image} alt="" />
          </div>
          <div className="product-info text-center">
            <h2 className="text-sm">Products: {productDetails?.title}</h2>
            <h4>Price: {productDetails?.price}</h4>
            <p>Rating: {productDetails?.rating.rate}</p>
          </div>
        </>
      ) : (
        "Loading"
      )}
    </div>
  );
};

export default ProductDetail;
