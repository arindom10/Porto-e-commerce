import React from "react";
import "../Product/Product.css";

const Product = (props) => {
  return (
    <div className="product">
      <img src={props.image} alt="" />
      <div className="product-info">
        <h2 className="text-sm">Products: {props.title}</h2>
        <h4>Price: {props.price}</h4>
        <p>Rating: {props.rating}</p>
      </div>
    </div>
  );
};

export default Product;
