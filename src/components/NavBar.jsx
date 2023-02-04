import React from "react";
import Logo from "../assets/GPT-3.svg";
import Menu from "../assets/menu.svg";
import Close from "../assets/close.svg";
import { useState } from "react";
import { useRef } from "react";

const NavBar = () => {
  const openRef = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const toggleSideBar = () => {
    isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true);
    isMenuOpen
      ? document.querySelector(".toggleOpen").classList.remove("hidden")
      : document.querySelector(".toggleOpen").classList.add("hidden");
  };

  return (
    <nav className="flex justify-between w-10/12 m-auto items-center h-24">
      <img src={Logo} alt="" />
      <img
        src={Menu}
        alt="Menu"
        className="md:hidden"
        onClick={toggleSideBar}
      />
      <div className="hidden md:flex justify-between w-10/12 items-center">
        <div className="flex justify-between w-2/4">
          <a href="#home">Home</a>
          <a href="#whatisgpt">What is GPT?</a>
          <a href="#openai">Open AI</a>
          <a href="#casestudie">Case Studies</a>
          <a href="#library">Library</a>
        </div>
        <div className="flex justify-between w-1/5">
          <button className="">Sign In</button>
          <button className="bg-buttonBackground w-6/12 rounded h-10">
            Sign Up
          </button>
        </div>
      </div>

      <div
        ref={openRef}
        className="hidden toggleOpen absolute bg-gray-800 w-3/4 h-screen py-10 md:hidden right-0 top-0 font-bold text-xl flex flex-col rounded-l-lg"
      >
        <img
          src={Close}
          alt="Menu"
          className="w-1/12 absolute right-5"
          onClick={toggleSideBar}
        />
        <div className="w-3/4 pl-10 pt-10 flex flex-col">
          <a href="#home" className="py-5">
            Home
          </a>
          <a href="#whatisgpt" className="py-5">
            What is GPT?
          </a>
          <a href="#openai" className="py-5">
            Open AI
          </a>
          <a href="#casestudie" className="py-5">
            Case Studies
          </a>
          <a href="#library" className="py-5">
            Library
          </a>
        </div>
        <div className="flex flex-col w-2/4 m-auto">
          <button className="pb-10">Sign In</button>
          <button className="bg-buttonBackground rounded">Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
