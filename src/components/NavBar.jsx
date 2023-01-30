import React from "react";
import Logo from "../assets/GPT-3.svg";
import Menu from "../assets/menu.svg";

const NavBar = () => {
  return (
    <nav className="flex justify-between w-10/12 m-auto py-10">
      <img src={Logo} alt="" />
      <img
        src={Menu}
        alt="Menu"
        className="md:hidden animate-pulse"
      />
      <div className="hidden md:flex justify-between w-10/12">
        <ul className="flex justify-between w-2/4">
          <li>Home</li>
          <li>What is GPT?</li>
          <li>Open AI</li>
          <li>Case Studies</li>
          <li>Library</li>
        </ul>
        <div className="flex justify-between w-1/5">
          <button className="">Sign In</button>
          <button className="bg-buttonBackground w-6/12 h-10 rounded">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
