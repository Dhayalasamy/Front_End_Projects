import profileImg from "../assets/hero.svg";
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import React from "react";

function Profile() {
  return (
    // Profile Section:
    <section className="mt-16 bg-gray-100 w-full" id="home">
      <div className=" flex flex-col py-16 md:flex-row align-element md:gap-x-16 md:items-center ">
        {/* Profile Flex box 1*/}
        <article>
          <p className=" tracking-wide mb-4 text-2xl md:text-3xl text-emerald-600">Hey, there</p>
          <h1 className="text-5xl md:text-6xl font-bold tracking-wider">
            I'm Dhayalasamy Mani
          </h1>
          <p className="mt-4 text-2xl md:text-3xl text-slate-700 capitalize tracking-wide">
            Front-end developer
          </p>
          <p className="mt-2 text-lg text-slate-700 capitalize tracking-wide">
            A Diligent individual with ability to turn ideas into interactive reality.
          </p>
          <div className="flex gap-x-4 mt-4">
            <a href="https://github.com/Dhayalasamy">
              <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
            <a href="https://www.linkedin.com/in/dhayalasamy-mani-314147177/">
              <FaLinkedin className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
            <a href="#">
              <FaTwitterSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
          </div>
        </article>
        {/* Profile Flex box 2 : Image*/}
        <article className="hidden md:block">
          <img src={profileImg} className="h-80 lg:h-96" />
        </article>
      </div>
    </section>
  );
}

export default Profile;
