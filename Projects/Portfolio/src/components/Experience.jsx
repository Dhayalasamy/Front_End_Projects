import React from "react";
import SectionTitle from "./UI/SectionTitle";

function Experience() {
  return (
    <section className="py-10 align-element bg-gray-100" id="experience">
      <SectionTitle text="Experience" />
      <div className=" bg-[url(https://wallpaperaccess.com/full/521099.jpg)] rounded-lg bg-cover bg-center backdrop-opacity-75 ">
        <div className=" py-6 shadow border  border-gray-200   mt-8 hover:shadow-xl duration-300 backdrop-brightness-50 ">
          <div className="align-element grid md:grid-cols-2 items-center gap-10 text-white ">
            <div>
              <h2 className="py-2">
                Aug 2021 - Mar 2023{" "}
                <span className="text-xs">(1 year 8 months )</span>
              </h2>
              <p>
                <b className=" text-emerald-400">Front-End Developer</b>
                <br />
                Worked in financial services at an investment bank, built
                multiple dynamic & cross-browser compatible pages using Js
                (React, Redux) Relocated a multi-page user experience into a
                single page application to imporve client engagement. Worked
                with RESTful APIs and Performed code analysis to elimate bug in
                the webpages.
              </p>{" "}
            </div>
            <div>
              <h2 className="py-2">
                Apr 2023 - Present{" "}
                <span className="text-xs">(6 months Approx.)</span>
              </h2>
              <p>
                <b className=" text-emerald-400">Sql Developer</b>
                <br />
                Worked for a securities brokerage services company, created ETL
                scripts to extract data from various sources like Oracle DBs ,
                MSSQL Servers etc., Analyzed large datasets and performed
                queries on them to get insights about customer behaviour.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;

// box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
// <div class="max-w-sm p-6 border border-gray-200 rounded-lg shadow bg-gray-100 md:gap-x-16 md:items-center flex flex-col md:flex-row">
//
