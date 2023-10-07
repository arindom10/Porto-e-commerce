import React from "react";

const Feature = () => {
  return (
    <div className="container mx-auto mt-4  grid grid-cols-1 md:grid-cols-4 text-center  gap-12">
      <div className="card py-4 px-8 bg-slate-600 rounded-md  shadow-sm hover:text-amber-500">
        <h1>Fastest Dalivery</h1>
      </div>
      <div className="card py-4 px-8  bg-slate-600 rounded-md shadow-sm hover:text-amber-500">
        <h1>Easy Return</h1>
      </div>
      <div className="card py-4 px-8 bg-slate-600 rounded-md shadow-sm hover:text-amber-500">
        <h1>Secure Payments</h1>
      </div>
      <div className="card py-4 px-8 bg-slate-600 rounded-md shadow-sm hover:text-amber-500">
        <h1>24/7 Support</h1>
      </div>
    </div>
  );
};

export default Feature;
