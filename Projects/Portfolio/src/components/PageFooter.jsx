import React from "react";

function PageFooter() {
  return (
    <div>
      <footer className="bg-gray-100 rounded-lg shadow m-4">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <div className="text-sm text-gray-600 sm:text-center">
             Built with <span className="text-black"> React js </span> & <span className="text-black">Tailwind CSS,</span> deployed with Netlify.
          </div>
          <div className="flex flex-wrap items-center mt-3 text-sm font-mediu sm:mt-0">
              <a href="#" className="mr-4 hover:underline md:mr-6 text-sky-500 ">
                Go to Top
              </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default PageFooter;
