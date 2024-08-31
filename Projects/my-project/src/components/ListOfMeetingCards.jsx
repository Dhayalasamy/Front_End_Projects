import React from "react";
import MeetingCard from "./MeetingCard";

function ListOfMeetingCards({ invite, count }) {
  return (
    <div className="grid grid-cols-1 h-full gap-y-4">
      {Array.from({ length: count }, (_, index) => (
        <MeetingCard key={index} invite={invite} count={0} />
      ))}
    </div>
  );
}

export default ListOfMeetingCards;
