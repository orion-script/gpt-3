import React from "react";
import Rectangle1 from "../assets/Rectangle 22-4.png";
import Rectangle2 from "../assets/Rectangle 22.png";
import Rectangle3 from "../assets/Rectangle 22-2.png";
import Rectangle4 from "../assets/Rectangle 22-1.png";
import Rectangle5 from "../assets/Rectangle 22-3.png";

const Gallery = () => {
  return (
    <div className="w-10/12 h-auto m-auto flex flex-col md:flex-row justify-between py-10">
      <div className="flex flex-col w-full md:w-4/12 h-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
        <img
          src={Rectangle1}
          alt={Rectangle1}
          className="w-full h-40 md:h-60 rounded-t-lg"
        />
        <div className="w-full h-48 md:h-[21rem] bg-galleryBack flex flex-col justify-between rounded-b-lg shadow-xl">
          <div className="w-full">
            <p className="px-5 py-4 md:py-5 text-sm">
              {new Date().toDateString()}
            </p>
            <h3 className="px-5 font-bold text-lg md:text-2xl">
              GPT-3 and Open AI is the future. Let us exlore how it is?
            </h3>
          </div>
          <p className="px-5 h-5 mb-4">Read Full Article</p>
        </div>
      </div>

      <div className="flex flex-col w-full md:w-3/12 justify-between">
        <div className="py-10 md:py-0 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 shadow-xl">
          <img src={Rectangle2} alt={Rectangle2} className="rounded-t-lg" />
          <div className="w-full h-48 md:h-40 bg-galleryBack rounded-b-lg">
            <p className="px-5 pt-4 text-sm">{new Date().toDateString()}</p>
            <h3 className="px-5 font-bold text-lg py-5">
              GPT-3 and Open AI is the future. Let us exlore how it is?
            </h3>
            <p className="px-5 h-5 mb-3">Read Full Article</p>
          </div>
        </div>

        <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 shadow-xl">
          <img src={Rectangle3} alt={Rectangle3} className="rounded-t-lg" />
          <div className="w-full h-48 md:h-40 bg-galleryBack rounded-b-lg">
            <p className="px-5 pt-4 text-sm">{new Date().toDateString()}</p>
            <h3 className="px-5 font-bold text-lg py-5">
              GPT-3 and Open AI is the future. Let us exlore how it is?
            </h3>
            <p className="px-5 h-5 mb-3">Read Full Article</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full md:w-3/12 justify-between">
        <div className="py-10 md:py-0 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 shadow-xl">
          <img src={Rectangle4} alt={Rectangle4} className="rounded-t-lg" />
          <div className="w-full h-48 md:h-40 bg-galleryBack rounded-b-lg">
            <p className="px-5 pt-4 text-sm">{new Date().toDateString()}</p>
            <h3 className="px-5 font-bold text-lg py-5">
              GPT-3 and Open AI is the future. Let us exlore how it is?
            </h3>
            <p className="px-5 h-5 mb-3">Read Full Article</p>
          </div>
        </div>

        <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 shadow-xl">
          <img src={Rectangle5} alt={Rectangle5} className="rounded-t-lg" />
          <div className="w-full h-48 md:h-40 bg-galleryBack rounded-b-lg">
            <p className="px-5 pt-4 text-sm">{new Date().toDateString()}</p>
            <h3 className="px-5 font-bold text-lg py-5">
              GPT-3 and Open AI is the future. Let us exlore how it is?
            </h3>
            <p className="px-5 h-5 mb-3">Read Full Article</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
