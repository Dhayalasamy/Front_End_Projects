import GoogleMeet from "../assets/GoogleMeet.png";
import Button from "./Button";
import React from "react";

// Function to capitalize the first letter of each word
function capitalizeWords(str) {
  return str
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

function MeetingDetails({ firstName, lastName, CanfirstName, CanlastName, CanJobtile, startTime, endTime , date }) {
  return (
    <>
      <div className="h-auto md:p-3 p-2 w-auto md:h-[500px] md:w-[600px] border border-gray-300 rounded-lg shadow-xl bg-white">
        <div className="grid grid-cols-1 h-full md:grid-cols-2 border border-gray-300 rounded-lg">
          <div className="flex flex-col justify-between">
            <table className="w-full h-auto md:h-[70%] mb-3">
              <tbody>
                <tr>
                  <td className="h-6 p-1 font-medium text-xs md:text-base">
                    Interview With: {capitalizeWords(CanfirstName)} {capitalizeWords(CanlastName)}
                  </td>
                </tr>
                <tr>
                  <td className="h-6 p-1 font-medium text-xs md:text-base">
                    Position: {capitalizeWords(CanJobtile)} 
                  </td>
                </tr>
                <tr>
                  <td className="h-6 p-1 font-medium text-xs md:text-base">
                    Created By:  {capitalizeWords(firstName)} {capitalizeWords(lastName)}
                  </td>
                </tr>
                <tr>
                  <td className="h-6 p-1 font-medium text-xs md:text-base">
                    Interview Date: {date}
                  </td>
                </tr>
                <tr>
                  <td className="h-6 p-1 font-medium text-xs md:text-base">
                    Interview Time: {startTime} - {endTime}
                  </td>
                </tr>
                <tr>
                  <td className="h-6 p-1 font-medium text-xs md:text-base">
                    Interview Via: Google Meet
                  </td>
                </tr>
              </tbody>
            </table>
            <Button label="Resume.docx" />
            <Button label="Aadharcard" />
          </div>
          <div className="flex items-center justify-center border-t md:border-t-0 md:border-l border-gray-300">
            <div className="my-5 md:my-28">
              <div className="flex h-32 w-32 md:h-48 md:w-48 border rounded-lg p-2 md:p-4">
                <img
                  src={GoogleMeet}
                  alt="Google meet image"
                  className="h-full w-full object-contain"
                />
              </div>
              <button
                type="button"
                className="mx-6 mt-6 md:mt-6 md:mx-12 px-6 md:px-8 py-1.5 md:py-2 text-xs md:text-base font-medium 
                text-center text-white bg-sky-700 hover:bg-sky-800"
              >
                JOIN
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MeetingDetails;
