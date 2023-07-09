import React from "react";
import FilterBar from "./filterBar";
import Products from "./products";

const Home = () => {
  
  return (
    <div className="pt-5">
      <FilterBar />
      <Products />
    </div>
  );
};

export default Home;
