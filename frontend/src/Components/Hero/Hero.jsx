import React from "react";
import "./Hero.css";
import hero_image from "../Assets/hero_image5.png";
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">

        <div>
          <div className="hero-hand-icon">
            <p>Unlock</p>

          </div>
          <p>Your Style</p>

        </div>
        <h2>Designed for You, Inspired by You – The Fashion You Love!</h2>
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
