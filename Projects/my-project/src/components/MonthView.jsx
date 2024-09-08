import React from "react";
import calendarFromToEndDateJSON from "../utils/calendarFromToEndDateJSON";

function MonthView({ selectedMonth }) {
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Sunday"];

  const daysInMonth = {
    January: 31,
    February: 28,
    March: 31,
    April: 30,
    May: 31,
    June: 30,
    July: 31,
    August: 31,
    September: 30,
    October: 31,
    November: 30,
    December: 31,
  };

  const numberOfDays = daysInMonth[selectedMonth] || 0;

  const generateDays = () => {
    return Array.from({ length: numberOfDays }, (_, i) => i + 1);
  };

  const getFirstDayOfMonth = () => {
    const monthIndex = Object.keys(daysInMonth).indexOf(selectedMonth);
    return new Date(2024, monthIndex, 1).getDay();
  };

  const firstDayOfMonth = getFirstDayOfMonth();
  const daysArray = generateDays();
  const totalCells = 42;

  const paddedDaysArray = [
    ...Array(firstDayOfMonth).fill(null),
    ...daysArray,
    ...Array(totalCells - (firstDayOfMonth + numberOfDays)).fill(null),
  ];

  const monthAbbreviation = selectedMonth.slice(0, 3);

  const eventColors = ["bg-red-500", "bg-green-500", "bg-blue-500", "bg-yellow-500", "bg-purple-500", "bg-pink-500", "bg-orange-500"];
  const calendarData = JSON.parse(calendarFromToEndDateJSON);

  // Filter events for the selected month
  const eventsInSelectedMonth = calendarData.filter((event) => {
    const eventDate = new Date(event.start);
    const eventMonth = eventDate.toLocaleString("default", { month: "long" });
    return eventMonth === selectedMonth;
  });

  // Group events by day
  const eventsByDay = {};
  eventsInSelectedMonth.forEach((event) => {
    const eventDate = new Date(event.start);
    const dayOfEvent = eventDate.getDate();

    if (!eventsByDay[dayOfEvent]) {
      eventsByDay[dayOfEvent] = [];
    }
    eventsByDay[dayOfEvent].push({
      summary: event.summary,
      color: eventColors[eventsByDay[dayOfEvent].length % eventColors.length],
    });
  });

  return (
    <div className="mt-6 flex">
      <div className="overflow-x-auto w-full">
        <div className="relative">
          <table className="w-full min-w-[1024px] h-screen table-fixed border-collapse">
            <thead>
              <tr>
                {daysOfWeek.map((day, index) => (
                  <th
                    key={index}
                    className="border p-2 h-16 w-1/7 text-center font-medium text-base text-black bg-gray-200"
                  >
                    {day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: totalCells / 7 }, (_, rowIndex) => (
                <tr key={rowIndex}>
                  {paddedDaysArray.slice(rowIndex * 7, rowIndex * 7 + 7).map((day, colIndex) => {
                    const eventsForTheDay = eventsByDay[day] || [];
                    return (
                      <td
                        key={colIndex}
                        className={`border h-24 w-24 relative ${day === null ? 'bg-gray-100' : 'bg-white'}`}
                      >
                        {day && (
                          <div className="absolute top-1 left-1 text-base font-medium text-sky-700">
                            {day} <span className="text-sm">{monthAbbreviation}</span>
                          </div>
                        )}
                        {eventsForTheDay.length > 0 && (
                          <div className="text-xs mt-5 space-y-1 flex items-center flex-col h-14 justify-center">
                            {eventsForTheDay.map((event, idx) => (
                              <div
                                key={idx}
                                className={`truncate hover:opacity-75 text-white flex items-center justify-center p-0.5 w-16 lg:w-24 rounded ${event.color}`}
                              >
                                {event.summary}
                              </div>
                            ))}
                          </div>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default MonthView;
