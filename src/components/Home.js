import React, { useEffect, useState } from "react";
import Product from "./Product";
import "./Home.css";
import { useStateValue } from "../StateProvider";
function Home() {
  const [{ searchResults }, dispatch] = useStateValue();


  const searchData = searchResults.map((product) => {
    console.log("product: ",product)
    return <Product
    title={product.title}
    price={product.price}
    id={product.id}
    rating={product.rating}
    image={product.thumbnail}
    key={product.id}
    />
  });

  return (
    <div className="home flex justify-center mx-auto">
      <div className="home__container">
        <div className="home__image">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/OHL_HMT/HSS_MAR22/LA_TV_OHL/HK_1500x500-UNREC.jpg"
            alt=""
          ></img>

          <div className="home__row">
            {searchData}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
