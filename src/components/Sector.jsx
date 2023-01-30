import React from "react";
import Rectangle from "../assets/Rectangle 17.png";

function Sector(props) {
  return (
    <div className="w-11/12 md:w-4/5 m-auto h-auto py-14 md:flex justify-between">
      <div className="w-full md:w-4/12">
        <h2 className="bg-gradient-to-r from-startFirstText to-endFirstText inline-block text-transparent bg-clip-text text-4xl font-extrabold mb-10 md:mb-5">
          The Future is Now and You Just Need To Realize It. Step into Future
          Today & Make it Happen.
        </h2>
        <p className="text-SecondPTag">Request Early Access to Get Started</p>
      </div>

      <div className="w-11/12 md:w-2/12 font-bold text-lg">
        <div className="py-6 md:py-4">
          <img src={Rectangle} alt={Rectangle} />
          <p>Improving end distrusts instantly </p>
        </div>

        <div className="py-6 md:py-4">
          <img src={Rectangle} alt={Rectangle} />
          <p>Become the tended active</p>
        </div>

        <div className="py-6 md:py-4">
          <img src={Rectangle} alt={Rectangle} />
          <p>Message or am nothing</p>
        </div>

        <div className="py-6 md:py-4">
          <img src={Rectangle} alt={Rectangle} />
          <p>Really boy law county</p>
        </div>
      </div>

      <div className="w-full md:w-4/12 text-anotherPTag">
        <p className="py-4">
          From they fine john he give of rich he. They age and draw mrs like.
          Improving end distrusts may instantly was household applauded.
        </p>

        <p className="py-4">
          Considered sympathize ten uncommonly occasional assistance sufficient
          not. Letter of on become he tended active enable to.
        </p>

        <p className="py-4">
          Led ask possible mistress relation elegance eat likewise debating. By
          message or am nothing amongst chiefly address.
        </p>

        <p className="py-4">
          Really boy law county she unable her sister. Feet you off its like
          like six. Among sex are leave law built now. In built table in an
          rapid blush.
        </p>
      </div>
    </div>
  );
}

export default Sector;
