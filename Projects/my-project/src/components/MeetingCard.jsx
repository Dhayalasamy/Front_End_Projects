import React from "react";

function MeetingCard({ onClick, invite, count }) {
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
        <h3>{capitalizeWords(invite[0].job_id.jobRequest_Title)}</h3>
        <p>
          Interviewer: {invite[0].user_det.handled_by.firstName}{" "}
          {invite[0].user_det.handled_by.lastName}
        </p>
        <p>Time: 10-11 A.M</p>
      </div>
      {count > 0 && (
        <div className="z-10 absolute -top-2 -right-3 w-6 h-6 bg-yellow-500 text-black text-sm font-medium flex items-center justify-center rounded-full">
          {count}
        </div>
      )}
    </div>
  );
}

export default MeetingCard;
