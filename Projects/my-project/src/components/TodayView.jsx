import React from "react";
import  { useEffect, useState, useRef } from "react";
import generateCalendarForDates from "../utils/generateCalendarForDates";
import calendarFromToEndDateJSON from "../utils/calendarFromToEndDateJSON";
import MeetingCard from "./MeetingCard";
import MeetingDetails from "./MeetingDetails";


function TodayView({ selectedMonth, selectedYear, currentDateIndex }) {
  const [selectedEvent, setSelectedEvent] = useState(null); // State for the selected event
  const [position, setPosition] = useState({ top: 0, left: 0 }); // Position for MeetingDetails
  const [showComponent, setShowComponent] = useState(false);
  const modalRef = useRef(null);

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setShowComponent(false);
    }
  };

  useEffect(() => {
    if (showComponent) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showComponent]);


  // Handle MeetingCard click and set event details and position
  // Handle MeetingCard click and set event details and position
  const handleEventClick = (event, clickedCard) => {
    const rect = clickedCard.getBoundingClientRect(); // Get position of the clicked card
    setSelectedEvent(event); // Set the selected event details
    setPosition({
      top: rect.top + window.scrollY, // Position relative to the document (account for scroll)
      left: rect.left + window.scrollX + clickedCard.offsetWidth + 10, // Offset to avoid overlap
    });
    setShowComponent(true);
  };


  // Generate dates for the month
  const dates = generateCalendarForDates(selectedMonth, selectedYear);

  // Ensure currentDateIndex defaults to 0 (1st day of the month) if out of range
  const index =
    currentDateIndex >= 0 && currentDateIndex < dates.length
      ? currentDateIndex
      : 0;
  const currentDate = dates[index];

  // Parse the calendar data
  const calendarData = JSON.parse(calendarFromToEndDateJSON);

  // Helper function to format the date string
  const formatDateString = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "long" });
    const weekday = date.toLocaleString("default", { weekday: "long" });
    return `${day} ${month} ${weekday}`;
  };

  // Filter events that match the currentDate
  const eventsForTheDay = calendarData.filter(
    (event) => formatDateString(event.start) === currentDate
  );


  return (
    <>
      <div className="mt-6 flex relative">
        <div className="overflow-x-auto overflow-y-auto max-h-[80vh] w-full">
        <table
            className={`min-w-full table-auto border-collapse ${
              showComponent ? "opacity-20" : ""
            } `}
          >
            <thead className="sticky top-0 z-50 bg-gray-200">
              <tr>
                <th className="min-w-14 h-24 font-medium text-base sticky left-0 z-50 bg-gray-200  border-gray-300"></th>
                <th className="h-24 font-medium sticky left-0 z-50 border-b text-black text-start text-lg border-gray-300 w-full">
                  <span className="lg:text-4xl md:text-3xl text-2xl ml-2 font-bold text-black">
                    {currentDate.split(" ")[0]}
                  </span>
                  <span className="ml-2 lg:text-lg text-sm text-black">
                    {currentDate.substring(3)}
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {[...Array(24)].map((_, rowIndex) => {
                const hour = rowIndex;
                const period = hour < 12 ? "A.M" : "P.M";
                const displayHour =
                  hour === 0 ? 12 : hour <= 12 ? hour : hour - 12;
                const formattedHour = displayHour.toString().padStart(2, "0");

                // Helper function to format time to 12-hour format
                function formatTimeTo12Hour(dateString) {
                  const date = new Date(dateString);
                  let hours = date.getHours();
                  const minutes = date.getMinutes().toString().padStart(2, "0");
                  const period = hours < 12 ? "A.M" : "P.M";
                  hours = hours % 12 || 12; // Convert to 12-hour format, handling midnight (0 hours)
                  return `${hours}:${minutes} ${period}`;
                }

                // Find all events that match the current time slot
                const eventsAtThisHour = eventsForTheDay.filter((event) => {
                  const eventDate = new Date(event.start);
                  return eventDate.getHours() === hour;
                });

                // Format summaries and user details
                const formattedEvents = eventsAtThisHour.map((event) => {
                  const { summary, user_det, start, end } = event;
                  const firstName =
                    user_det?.handled_by?.firstName || "Unknown";
                  const lastName =
                    user_det?.handled_by?.lastName || "Unknown";
                  const CanfirstName =
                    user_det?.candidate.candidate_firstName || "Unknown";
                  const CanlastName =
                    user_det?.candidate.candidate_lastName || "Unknown";
                  const CanJobtile =
                    user_det?.job_id?.jobRequest_Title || "Unknown";
                  const eventDate = new Date(start);
                  const day = eventDate
                    .getDate()
                    .toString()
                    .padStart(2, "0");
                  const month = eventDate.toLocaleString("default", {
                    month: "short",
                  });

                  const year = eventDate.getFullYear();
                  const formattedDate = `${day} ${month} ${year}`;
                  return {
                    summary,
                    firstName,
                    lastName,
                    CanfirstName,
                    CanlastName,
                    CanJobtile,
                    formattedDate,
                    startTime: new Date(start).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    }),
                    endTime: new Date(end).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    }),
                  };
                });

                return (
                  <tr key={rowIndex} className="h-24">
                    <td className="w-12 h-24 overflow-hidden text-center align-top text-sky-700 bg-slate-100 font-medium text-base sticky left-0 z-30">
                      {`${formattedHour} ${period}`}
                    </td>
                    <td
                      className={`w-full h-24 py-1 border-t  border-gray-300 overflow-hidden flex flex-row gap-4`}
                    >
                      {formattedEvents.map((event, idx) => (
                        <MeetingCard
                          key={idx}
                          onClick={(e) =>
                            handleEventClick(event, e.currentTarget)
                          }
                          summary={event.summary}
                          firstName={event.firstName}
                          lastName={event.lastName}
                          startTime={event.startTime}
                          endTime={event.endTime}
                        />
                      ))}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          {showComponent &&
            (
              <div
                className="absolute z-70 bg-white "
                ref={modalRef}
                style={{ top: position.top - 100, left: position.left - 200 }}
              >
                <MeetingDetails
                  summary={selectedEvent.summary}
                  firstName={selectedEvent.firstName}
                  lastName={selectedEvent.lastName}
                  CanfirstName={selectedEvent.CanfirstName}
                  CanlastName={selectedEvent.CanlastName}
                  CanJobtile={selectedEvent.CanJobtile}
                  startTime={selectedEvent.startTime}
                  endTime={selectedEvent.endTime}
                  date={selectedEvent.formattedDate}
                />
              </div>
            )}
        </div>
      </div>
    </>
  );
}

export default TodayView;
