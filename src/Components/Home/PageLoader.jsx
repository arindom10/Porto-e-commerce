import React from "react";

const PageLoader = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-screen flex items-center justify-center z-50 bg-white opacity-75">
      <div className="animate-spin  rounded-full border-4 border-t-4 border-gray-200 h-12 w-12"></div>
    </div>
  );
};

export default PageLoader;
