import React from "react";
import amazon from "./Image/amazon.png";
import flipkart from "./Image/flipkart.png";
import hero from "./Image/hero-image.png";

const Hero = () => {
  return (
    <main className="hero ">
      <div className="text-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WERE HERE TO HELP YOU WITH OUR
          SHOSE.YOUR FEET DESERVE THE BEST AND WERE TO HELP YOU WITH OUR SHOES.
        </p>
        <div className="hero-btn">
          <button>Shop now </button>
          <button className="second-btn">Category </button>
        </div>
        <div className="Shopping">
          <p>Also Avaliable On</p>
          <div className="brand_icon">
            <img src={amazon} alt="" />
            <img src={flipkart} alt="" />
          </div>
        </div>
      </div>
      <div className="img">
        <img src={hero} alt="" />
      </div>
    </main>
  );
};

export default Hero;
