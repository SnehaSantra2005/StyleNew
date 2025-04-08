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

      <div className="trendy">

        <h1>TRENDIEST CATEGORIES</h1>
        <hr />
        <div className='section'>
          <div className="section1">
            <div className='box'><img src={trendy5} className='lipstick' /></div>
            <div className='box'><img src={trendy4} className='lipsticshade' /></div>

            <div className='box'><img src={trendy3} className='lipstickgirl' /></div>
            <div className='box'><img src={trendy2} className='lipsticvit' /></div>

          </div>

        </div>
      </div>

    </>
  );
};

export default Offers;

