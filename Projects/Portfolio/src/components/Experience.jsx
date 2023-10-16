import React from "react";
import SectionTitle from "./UI/SectionTitle";

function Experience() {
  return (
    <section
      className="py-10 align-element bg-[url(https://wallpaperaccess.com/full/521099.jpg)] bg-cover bg-center"
      id="experience"
    >
      <SectionTitle text="Experience" />
      <div className="  rounded-lg  bg-center  ">
        <div className=" py-6 shadow border rounded-lg bg-brightness-50 bg-gray-100  mt-8 hover:shadow-xl duration-300  ">
          <div className="align-element grid md:grid-cols-2 items-center gap-10 text-black ">
            <div>
              <h2 className="py-2">
                Aug 2021 - Mar 2023{" "}
                <span className="text-xs">(1 year 8 months )</span>
              </h2>
              <p>
                <b className=" text-emerald-400">Front-End Developer</b>
                <br />
                Worked in financial services at an investment bank, Built
                mutiple dynamic and cross-browser compatible pages using reactJs
                & used redux / redux toolkit for complex state management.
                Utilised react hooks and created costum hooks to maintain
                complex logics in one place and avoid code redundancy. Used
                react-router package to handle routing and achieve single page
                application. Worked with axios API and react query library to
                simplify the process of fetching, managing of data and make
                HTTPS requests. Developed sound knowledge on
                stripe API and protocols for authorization. Styled creative and
                eye-catching webpages using Tailwind / material css and css
                modules. Familiar with both vite and webpack to build and
                develop react application and Performed code analysis to
                elimate bug in the webpages.
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
                Worked in a DataSOA environment of ETL project for security
                brokerage services company. Created ETL scripts to extract data
                from various sources in different formats and transformed it
                then load into cliens dasboard. Worked with business analyics /
                recon report to enable clients to monitor the business entities
                day-to-day basis using XML to fetch data and automated the file
                transfer process using AutoSys. Having hands full of knowledge
                on DDL, DML scripts and worked with them to manage the database
                up to date. Apart from above, created business logic workflows
                and configured queues and schemas using Tibco business works.
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
