import { Link } from "react-router-dom";
import React from "react";

const ErrorRoute = () => {
  return (
    <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8 animate-fadeIn">
      <div className="text-center">
        <p className="mb-4 text-3xl tracking-tight font-extrabold lg:text-5xl text-violet-700">
          404
        </p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600">
          Sorry, we couldn’t find the page you’re looking for. You'll find lots
          to explore on the home page.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            to="/"
            className="text-white bg-violet-700 hover:bg-violet-800 md:font-medium font-normal rounded-full text-sm px-4 md:px-5 py-2.5 text-center me-2 mb-2"
          >
            Shop Now
          </Link>
          <Link
            to="/"
            className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium  rounded-full text-sm px-4 md:px-5 py-2.5 me-2 mb-2"
          >
            Learn more <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default ErrorRoute;
