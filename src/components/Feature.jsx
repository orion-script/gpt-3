import React from "react";
import Features from "../assets/Feature Image.png";

function Feature() {
  return (
    <div className="w-11/12 md:w-10/12 m-auto md:flex justify-between py-10">
      <img src={Features} alt={Features} className="w-full md:w-2/5" />
      <div className="w-full md:w-2/4 pt-20">
        <p className="text-SecondPTag">Request Early Access to Get Started</p>
          <h2 className="w-full bg-gradient-to-r from-startFirstText to-endFirstText inline-block text-transparent bg-clip-text text-5xl font-extrabold py-5">
          The possibilities are beyond your imagination
        </h2>
        <p className="text-anotherPTag font-bold text-xl py-10">
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <p className="text-SecondPTag">Request Early Access to Get Started</p>
      </div>
    </div>
  );
}

export default Feature;
