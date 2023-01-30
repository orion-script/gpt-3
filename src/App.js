import React from "react";
import NavBar from "./components/NavBar";
import GetStarted from "./components/GetStarted";
import Sponsor from "./components/Sponsor";
import Section from "./components/Section";
import Sector from "./components/Sector";
import Feature from "./components/Feature";
import Gradients from "./components/Gradients";
import Alot from "./components/Alot";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import ScrollArrow from "./components/SrollArrow";
import "./App.css";

function App() {
  return (
    <div className="bg-backgroundColor w-full h-auto text-white font-manrope">
      <NavBar />
      <GetStarted />
      <Sponsor />
      <Section />
      <Sector />
      <Feature />
      <Gradients />
      <Alot />
      <Gallery />
      <Footer />
      <ScrollArrow />
    </div>
  );
}

export default App;
