import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import ContactUs from "./Components/ContactUs/ContactUs";
import Home from "./Components/Home/Home";
import Main from "./Components/Layouts/Main";
import ProductDetail from "./Components/ProductDetail/ProductDetail";
import ProductCart from "./Components/Products";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        { path: "/", element: <Home></Home> },
        { path: "/products", element: <ProductCart></ProductCart> },
        { path: "/about", element: <About></About> },
        { path: "/contact", element: <ContactUs></ContactUs> },
        {
          path: "/product/:productId",
          loader: async ({ params }) => {
            return params.productId;
          },
          element: <ProductDetail></ProductDetail>,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
