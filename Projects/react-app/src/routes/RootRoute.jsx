import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function RootRoute() {
  const [show, setShow] = useState(true);
  return (
    <div>
      {show && (
        <Header>
          <div className="flex items-center">
            <button
              onClick={() => setShow(!show)}
              type="button"
              className="flex-shrink-0 inline-flex justify-center  w-7 h-7 items-center text-neutral-50 hover:bg-gray-700  rounded-lg text-sm p-1.5"
            >
              {/*----------------svg for close icon-----------------*/}
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              {/*----------------svg for close icon-----------------*/}
            </button>
          </div>
        </Header>
      )}

      <Navbar display={show}/>
      <main>
        <Outlet /> {/* Nested routes render here */}
      </main>
      <Footer/>
    </div>
  );
}

export default RootRoute;
