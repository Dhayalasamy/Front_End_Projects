import React from "react";
import heroImage from "../assets/pic.jpg";
import { Link } from "react-router-dom";

const stats = [
  { id: 1, name: "International Brands", value: "200+" },
  { id: 2, name: "High-Quality Products", value: "2,000+" },
  { id: 3, name: "Happy Customers", value: "30,000+" },
];

function HomeRoute() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* First Flex Div */}
      <div className="flex-1 flex justify-start items-center lg:justify-center box-border">
        <div className="px-5 lg:text-center w-full">
          <h1 className="text-3xl lg:text-5xl font-bold text-gray-900">Find clothes that matches your style</h1>
          <p className="mt-4 text-lg lg:text-xl text-gray-600">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            to="/"
            className="text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-full text-lg px-5 py-2.5 text-center me-2 mb-2"
          >{/*focus:outline-none focus:ring-4 focus:ring-blue-300*/}
           Shop Now
          </Link>
          <Link
            to="/"
            className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-lg px-5 py-2.5 me-2 mb-2"
          >
            Learn more  <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
          <div className="bg-white py-14 sm:py-16">
            <div className="mx-auto max-w-2xl">
              <dl className="grid grid-cols-1 gap-x-10 gap-y-16 text-left lg:grid-cols-3 ">
                {stats.map((stat) => (
                  <div key={stat.id} className="flex flex-col gap-y-4">
                    <dt className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                      {stat.value}
                    </dt>
                    <dd className="text-base leading-7 text-gray-600">
                      {stat.name}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>


      
      {/* Second Flex Div */}
      <div className="flex-1 flex">
        <img
          src={heroImage}
          alt="University of Southern California"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default HomeRoute;
