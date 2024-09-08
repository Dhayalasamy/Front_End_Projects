import React from "react";

function MeetingCard({ onClick, summary, firstName, lastName ,startTime, endTime,eventCount=1 }) {
  function capitalizeWords(str) {
    return str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  }

  return (
    <div
      onClick={onClick ? onClick : null}
      className={`flex h-20 w-48 border-1 rounded-lg shadow-lg relative ${
        onClick ? "cursor-pointer" : ""
      }`}
    >
      <div className="bg-sky-600 w-[10%] h-full rounded-tl-lg rounded-bl-lg"></div>
      <div className="bg-white w-[90%] h-full hover:bg-sky-600 hover:text-white p-2 text-sm rounded-br-lg rounded-tr-lg">
        <h3>{capitalizeWords(summary)}</h3>
        <p>
          Interviewer: {firstName}{" "}
          {lastName}
        </p>
        <p>{startTime} - {endTime}</p>
      </div>
      {eventCount>1 &&
      <div className="z-20 absolute -top-2 -right-0.5  w-6 h-6 bg-yellow-500 text-black 
        text-sm font-medium flex items-center justify-center rounded-full">
         {eventCount}
        </div>
   
      }
        
        
    </div>
  );
}

export default MeetingCard;
