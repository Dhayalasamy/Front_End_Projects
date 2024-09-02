import React from "react";
import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import Slider from "../components/Slider";


function HomeRoute() {
  return (
    <div className="flex flex-col md:flex-row">
      <HeroSection />
      <Slider />
    </div>
  );
}

export default HomeRoute;


//lg:flex-row