import React from "react";
import { Link } from "react-router-dom";

const stats = [
  { id: 1, name: "International Brands", value: "200+" },
  { id: 2, name: "High-Quality Products", value: "2,000+" },
  { id: 3, name: "Happy Customers", value: "30,000+" },
];

function HeroSection() {
  return (
    <div className="flex-1 flex justify-center items-center  h-screen py-5 px-5 md:py-7 md:px-7">
      <div className="text-center animate-zoomIn">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Find <span className="text-violet-700">clothes</span> that matches your style
        </h1>
        <p className="mt-4 text-sm text-gray-600 md:text-lg">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
        <div className="flex justify-center items-center gap-2 mt-6">
          <Link
            to="/"
            className="inline-block text-white bg-violet-700 border border-violet-700 hover:bg-violet-800 font-medium rounded-full text-base md:text-lg px-4 py-1 text-center "
          >
            Shop Now
          </Link>
          <Link
            to="/"
            className="inline-block text-violet-700 border border-violet-700 hover:text-white hover:bg-violet-700 font-medium rounded-full text-base md:text-lg px-4 py-1 text-center "
          >
            Know more <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
        {/* Grid for displaying stats */}
        <div className="grid grid-cols-1 gap-2 mt-4 animate-slideUp">
          {stats.map((stat) => (
            <div key={stat.id} className="p-4">
              <p className="text-2xl md:text-3xl font-bold text-gray-900">{stat.value}</p>
              <p className="text-lg md:text-xl font-semibold text-gray-600">{stat.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
