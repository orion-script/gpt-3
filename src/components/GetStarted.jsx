import React from "react";
import Group from "../assets/Group 81.png";
import Header from "../assets/Header Illustration.png";

const GetStarted = () => {
  return (
    <div className="md:flex justify-between w-10/12 m-auto my-10">
      <div className="w-full md:w-2/4">
        <h2 className="bg-gradient-to-r from-startFirstText to-endFirstText inline-block text-transparent bg-clip-text text-5xl py-10 font-extrabold">
          Let’s Build Something amazing with GPT-3 OpenAI
        </h2>
        <p className="text-pTag py-7 text-xl font-normal">
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <div className="flex flex-row w-full h-auto">
          <input
            text=""
            className="text-black w-3/5 md:w-8/12 rounded-l h-16"
          />
          <button className="bg-buttonBackground w-2/5 md:w-3/12 rounded-r h-16 text-lg">
            Get Started
          </button>
        </div>
        <div className="md:flex justify-between w-full md:w-10/12 items-center py-5">
          <img src={Group} alt={Group} className="w-11/12 md:w-2/5 h-8" />
          <p className="text-xs my-5 md:my-0">
            1,600 people requested access a visit in last 24 hours
          </p>
        </div>
      </div>

      <img src={Header} alt={Header} className="w-11/12 md:w-2/5 h-auto " />
    </div>
  );
};

export default GetStarted;
