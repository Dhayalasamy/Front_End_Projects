import React from "react";
import Navbar from "./components/NavBar";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";

export default function App() {
  return (
    <>
      <Navbar/>
      <Profile/>
      <Skills/>
      <Experience/>
      <Projects/>   {/* download cv*/}
      <About/>
    </>
  )
}