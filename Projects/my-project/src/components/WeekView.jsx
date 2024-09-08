import React, { useEffect, useState, useRef } from "react";
import MeetingCard from "./MeetingCard";
import calendarFromToEndDateJSON from "../utils/calendarFromToEndDateJSON";
import generateCalendarForMonth from "../utils/generateCalendarForMonth";
import MeetingDetails from "./MeetingDetails";
import ListOfMeetingCards from "./ListOfMeetingCards";

function WeekView({ selectedMonth, currentWeekIndex, selectedYear }) {
  const [weeks, setWeeks] = useState([]);
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

  // Generate calendar for the selected month
  useEffect(() => {
    const monthIndex =
      new Date(Date.parse(`${selectedMonth} 1, ${selectedYear}`)).getMonth() +
      1;
    const generatedWeeks = generateCalendarForMonth(monthIndex, selectedYear);
    setWeeks(generatedWeeks);
  }, [selectedMonth, selectedYear]);

  // Parse calendar data (assuming events in JSON format)
  const calendarData = JSON.parse(calendarFromToEndDateJSON);

  // Helper function to format date to "day month weekday"
  const formatDateString = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "short" });
    const weekday = date.toLocaleString("default", { weekday: "long" });
    return `${day} ${month} ${weekday}`;
  };

  // Find events for a given date
  const getEventsForDate = (currentDate) => {
    return calendarData.filter((event) => {
      const eventDate = formatDateString(event.start);
      return eventDate === currentDate;
    });
  };

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

  return (
    <>
      <div className="mt-6 flex relative">
        <div className=" overflow-y-auto max-h-[80vh] ">
          <table
            className={`min-w-full table-auto border-collapse ${
              showComponent ? "opacity-20" : ""
            } `}
          >
            <thead className="sticky top-0 z-50 bg-slate-100">
              <tr>
                <th className="min-w-14 h-24 font-medium text-base sticky left-0 z-50 bg-slate-100"></th>
                {weeks[currentWeekIndex]?.map((item, index) => (
                  <th
                    key={index}
                    className={`min-w-48 h-24 pt-4 px-14 pb-2 border-t ${
                      index === 6 ? "" : "border-r"
                    } font-medium text-base border-gray-300 ${
                      item === "End Of Month" ? "text-slate-400" : ""
                    }`}
                  >
                    {item}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[...Array(24)].map((_, rowIndex) => {
                const hour = rowIndex;
                const period = hour < 12 ? "A.M" : "P.M";
                const displayHour =
                  hour === 0 ? 12 : hour <= 12 ? hour : hour - 12;
                const formattedHour = displayHour.toString().padStart(2, "0");

                return (
                  <tr key={rowIndex} className="h-24">
                    <td className="w-12 h-24 overflow-hidden text-center align-top text-sky-700 bg-slate-100 font-medium text-base sticky left-0 z-30">
                      {`${formattedHour} ${period}`}
                    </td>

                    {weeks[currentWeekIndex]?.map((date, colIndex) => {
                      const eventsForTheDay =
                        date !== "End Of Month" ? getEventsForDate(date) : [];

                      const eventsAtThisHour = eventsForTheDay.filter(
                        (event) => {
                          const eventDate = new Date(event.start);
                          return eventDate.getHours() === hour;
                        }
                      );

                      const eventCount = eventsAtThisHour.length;

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
                        const count = eventCount;
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
                          count,
                        };
                      });

                      return (
                        <td
                          key={colIndex}
                          className={`w-60 h-24 py-1 border-t border-b border-gray-300 overflow-hidden ${
                            colIndex === 6 ? "" : "border-r"
                          }`}
                        >
                          {formattedEvents.map((event, idx) => (
                            <div
                              key={idx}
                              onClick={(e) =>
                                handleEventClick(event, e.currentTarget)
                              }
                            >
                              {eventCount > 1 ? (
                                 idx === 0 && ( // Render only the first event
                                  <MeetingCard
                                    summary={event.summary}
                                    firstName={event.firstName}
                                    lastName={event.lastName}
                                    startTime={event.startTime}
                                    endTime={event.endTime}
                                    eventCount={eventCount}
                                  />)
                              ) : (
                                <MeetingCard
                                  summary={event.summary}
                                  firstName={event.firstName}
                                  lastName={event.lastName}
                                  startTime={event.startTime}
                                  endTime={event.endTime}
                                />
                              )}
                            </div>
                          ))}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
          {showComponent &&
            (selectedEvent.count > 1 ? (
              <div
                ref={modalRef}
                style={{ top: position.top-70 , left: position.left - 245 }}
                className="absolute z-70"
              >
                <ListOfMeetingCards event={selectedEvent} />
              </div>
            ) : (
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
            ))}
        </div>
      </div>
    </>
  );
}

export default WeekView;
