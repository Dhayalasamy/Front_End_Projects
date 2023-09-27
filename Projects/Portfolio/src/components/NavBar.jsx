import React, { useState, useEffect } from "react";
import { links } from "../data";
import logo from "../assets/logo.svg";


const NavBar = () => {
  const [navTogglebtn, setnavTogglebtn] = useState(false);
  // const [aboutMebtn, setAboutMebtn] = useState(false);
 
  // Dectecting screen size to turn off togglebtn, Note: If btn is on when screen size changes to md(768px), it will set to off:
  const handleNavBtn = () => {
    if (window.innerWidth >= 768) {
      setnavTogglebtn(false)
    }
  }
  useEffect(() => {
    window.addEventListener("resize", handleNavBtn)
  })

  return (
    // Glassmorphic sticky Navbar:
    <nav className="fixed w-full z-20 top-0 left-0 border-b border-gray-200 Navbar-bg-color "> {/*h-[64px]*/}
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/*Logo*/}
        <a href="#home" className="flex items-center">
          <img src={logo} className="h-8 mr-3" alt="Developer Logo" />
          <span className="self-center text-2xl font-semibold bg-gradient-to-r from-slate-400 to-emerald-500 bg-clip-text text-transparent whitespace-nowrap">
            Developer
          </span>
        </a>
        {/*Navbar buttons*/}
        <div className="flex md:order-2">
          {/*button 1: About Me*/}
          {/* <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0"
            onClick={() => setAboutMebtn(!aboutMebtn)}
          >
            About Me
          </button> */}
          {/*button 2: Toggle navbar*/}
          <button
            type="button"
            data-collapse-toggle="navbar-sticky" 
            className="duration-300 inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            onClick={() => setnavTogglebtn(!navTogglebtn)}
          >
            {/*Generating SVG buttons, Note: can be replaced with React Icons */}
            {navTogglebtn ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
        {/*Nav-Links, using conditional-rendering to display Nav links when screen is small*/}
        <div className={ `items-center justify-between w-full md:flex md:w-auto md:order-1 
         ${navTogglebtn ? "block" : "hidden"}` } id="navbar-sticky"  >
          
          <ul className={`flex flex-col items-center p-4 md:p-0 mt-4 font-medium border ${navTogglebtn ? "bg-white" : ""} border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 `}>
            {" "}
            {links.map((link) => {
              const { id, href, text } = link;
              return (
                <li key={id}>
                  <a
                    href={href}
                    className={`block py-2 pl-3 pr-4 ${navTogglebtn ? "hover:bg-gray-100" : ""} text-black text-lg hover:text-emerald-600 duration-300 rounded md:bg-transparent md:p-0`}
                  >
                    {text}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
