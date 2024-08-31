import React from "react";
import heroImage from "../assets/pic.jpg";

function Slider() {
  return (
    <div className="flex-1 h-screen">
      <img
        src={heroImage}
        alt="Hero"
        className="w-full h-full object-cover"
      />
    </div>
  );
}

export default Slider;

