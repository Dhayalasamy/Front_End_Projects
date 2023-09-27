import React from "react";
import Navbar from "./components/NavBar";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
//import Projects from "./components/Projects";
import Experience from "./components/Experience";
import About from "./components/About";
import Footer from "./components/PageFooter";

export default function App() {
  return (
    <>
      <Navbar />
      <Profile />
      <Skills />
      <Experience />
      <About />
      <Footer/>
    </>
  );
}
