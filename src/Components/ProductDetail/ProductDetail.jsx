import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import StarRatings from "react-star-ratings";

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
    <div className=" container product  mx-auto bg-white rounded-xl shadow-md overflow-hidden  ">
      {isProductDetailsloaded ? (
        <>
          <div className="flex flex-col md:flex-row mx-auto">
            {/* Image Section */}
            <div className="w-full md:w-1/2 p-4 order-2 md:order-1">
              <img src={productDetails?.image} alt="" className="mx-auto" />
            </div>

            {/* Product Information Section */}
            <div className="w-full md:w-1/2 p-4 order-1 md:order-2 text-left">
              <div className="product-info ">
                <h2 className="text-sm font-extrabold ">
                  {productDetails?.title}
                </h2>
                <h4 className="">
                  <small className="font-bold">Price:</small>{" "}
                  {productDetails?.price}
                </h4>
                <h4 className="">
                  <small className="font-bold">Category:</small>
                  {productDetails?.category}
                </h4>
                <p className="">
                  <small className="font-bold">Description:</small>
                  {productDetails?.description}
                </p>
                <div className="mt-4 ">
                  <StarRatings
                    rating={productDetails?.rating.rate}
                    starDimension="30px"
                    starRatedColor="gold"
                    starEmptyColor="gray"
                    numberOfStars={5}
                    name="rating"
                  />
                </div>

                {/* Button Section */}
                <div className="flex  mt-4">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Buy Now
                  </button>
                  <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mx-2">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        "Loading"
      )}
    </div>
  );
};

export default ProductDetail;
