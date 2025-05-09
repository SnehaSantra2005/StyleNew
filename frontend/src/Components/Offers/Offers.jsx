import React from "react";
import "./Offers.css";
import hero from "../Assets/hero.png";
import trendy5 from "../Assets/trendy5.png";
import trendy4 from "../Assets/trendy4.png";
import trendy3 from "../Assets/trendy3.png";
import trendy2 from "../Assets/trendy2.png";
const Offers = () => {
  return (
    <>
      <div className="offers">
        <div className="offers-left">
          <h1>Exclusive</h1>
          <h1>Offers For You</h1>
          <p>ONLY ON BEST SELLERS PRODUCTS</p>
          <button>Check now</button>
        </div>
        <div className="offers-right">
          <img src={hero} alt="" />
        </div>
        <div></div>
      </div>



    </>
  );
};

export default Offers;

