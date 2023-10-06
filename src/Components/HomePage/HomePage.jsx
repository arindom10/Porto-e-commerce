import React, { useState, useEffect } from "react";

const HomePage = () => {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2101&q=80",
      caption: "Image 1 Caption",
    },
    {
      src: "https://images.unsplash.com/3/www.madebyvadim.com.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2082&q=80",
      caption: "Image 2 Caption",
    },
    {
      src: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      caption: "Image 3 Caption",
    },
  ];

  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage(
      (prevImage) => (prevImage - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [currentImage]);

  return (
    <div className="container mx-auto ">
      <div className="w-full ">
        <div className="relative ">
          <img
            className="w-full h-[80vh]"
            src={images[currentImage].src}
            alt={`Image ${currentImage + 1}`}
          />
          {/* <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-white text-2xl">
              {images[currentImage].caption}
            </p> 
          </div> */}
          <div className="absolute inset-y-0 left-0 flex items-center ml-4">
            <button
              onClick={prevImage}
              className="text-white bg-gray-800 bg-opacity-50 p-2 rounded-full hover:bg-opacity-75"
            >
              &lt;
            </button>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center mr-4">
            <button
              onClick={nextImage}
              className="text-white bg-gray-800 bg-opacity-50 p-2 rounded-full hover:bg-opacity-75"
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
