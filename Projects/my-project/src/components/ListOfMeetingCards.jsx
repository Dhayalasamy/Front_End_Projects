import React from "react";
import MeetingCard from "./MeetingCard";

function ListOfMeetingCards({ event }) {
  return (
    <div className="grid grid-cols-1 h-full gap-y-4">
      {Array.from({ length: event.count }, (_, index) => (
        <MeetingCard key={index} 
        summary={event.summary}
        firstName={event.firstName}
        lastName={event.lastName}
        startTime={event.startTime}
        endTime={event.endTime} />
      ))}
    </div>
  );
}

export default ListOfMeetingCards;
