import React from "react";
import "../Product/Product.css";
import { Link } from "react-router-dom";

const Product = (props) => {
  console.log(props);
  const { id, image, title, price, rating } = props.product;
  return (
    <div className="product ">
      <div className="flex items-center justify-center">
        <img src={image} alt="" />
      </div>
      <div className="product-info text-center">
        <h2 className="text-sm">Products: {title}</h2>
        <h4>Price: {price}</h4>
        <p>Rating: {rating.rate}</p>
        <Link to={`/product/${id}`} className="border-x-2 border-y-4">
          Details
        </Link>
      </div>
    </div>
  );
};

export default Product;
