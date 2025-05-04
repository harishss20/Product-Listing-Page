import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
function page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <hr />
      <Products />
    </div>
  );
}

export default page;
