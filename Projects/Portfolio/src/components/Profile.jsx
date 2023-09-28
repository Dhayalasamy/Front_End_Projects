import profileImg from "../assets/hero.svg";
import {
  FaDownload,
  FaGithubSquare,
  FaLinkedin,
  FaTwitterSquare,
} from "react-icons/fa";
import React from "react";
import resume from "../assets/Resume.pdf";

function Profile() {
  return (
    // Profile Section:

    <section
      id="home"
      className=" mt-[73px] md:mt-[65px] bg-cover bg-no-repeat bg-[url('https://uploads.prod01.london.platform-os.com/instances/831/assets/images/What%20Makes%20a%20Building%20a%20Skyscraper%20by%20Fred%20Mills%20via%20The%20B1M.jpg?updated=1605539718')] bg-gray-600 bg-blend-multiply"
    >
      <div className=" px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-40">
        <p className="text-emerald-500 mb-8 text-lg font-normal  lg:text-2xl sm:px-16 lg:px-48">
          Hey, there
        </p>
        <h1 className="mb-4 text-4xl font-extrabold tracking-normal leading-normal text-white  md:text-5xl lg:text-6xl ">
          I'm Dhayalasamy Mani
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-300 lg:text-3xl sm:px-16 lg:px-48">
          Front-end developer
        </p>
        <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
          A Diligent individual with ability to turn ideas into interactive
          reality.
        </p>

        <div className="inline-flex gap-x-4 mt-4 ">
          <a href="https://github.com/Dhayalasamy">
            <FaGithubSquare className="h-8 w-8  text-gray-300  hover:text-black duration-300" />
          </a>
          <a href="https://www.linkedin.com/in/dhayalasamy-mani-314147177/">
            <FaLinkedin className="h-8 w-8 text-gray-300   hover:text-black duration-300" />
          </a>
          <a href="https://twitter.com/220e106a94ff466">
            <FaTwitterSquare className="h-8 w-8  text-gray-300  hover:text-black duration-300" />
          </a>
          <a href={resume} download>
            <button>
              {" "}
              <FaDownload className="h-7 w-8 text-gray-300 hover:text-black duration-300" />
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Profile;
