import calendarFromToEndDateJSON from "../utils/calendarFromToEndDateJSON";

function YearView({ selectedMonth }) {
  const calendarData = JSON.parse(calendarFromToEndDateJSON);

  const months = [
    { name: "January", days: 31 },
    { name: "February", days: 29 },
    { name: "March", days: 31 },
    { name: "April", days: 30 },
    { name: "May", days: 31 },
    { name: "June", days: 30 },
    { name: "July", days: 31 },
    { name: "August", days: 31 },
    { name: "September", days: 30 },
    { name: "October", days: 31 },
    { name: "November", days: 30 },
    { name: "December", days: 31 },
  ];

  const daysOfWeek = ["M", "T", "W", "T", "F", "S", "S"];
  const eventColors = [
    "bg-red-500",
    "bg-green-500",
    "bg-blue-500",
    "bg-yellow-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-orange-500",
  ];

  const getStartDay = (monthIndex) => {
    const startDay = new Date(2024, monthIndex, 1).getDay();
    return startDay === 0 ? 6 : startDay - 1;
  };

  const formatDate = (year, month, day) => {
    const mm = String(month + 1).padStart(2, "0");
    const dd = String(day).padStart(2, "0");
    return `${year}-${mm}-${dd}`;
  };

  return (
    <div className="mt-6 flex">
  <div className="overflow-x-auto overflow-y-auto max-h-[80vh] w-full">
    <div className="relative">
      <table className="min-w-full table-auto border-collapse">
        <thead className="sticky top-0 z-30 bg-gray-200">
          <tr>
            <th className="sticky left-0 z-40 bg-gray-200 border h-16 p-1 text-center font-medium text-base min-w-[80px] w-10" />
            {Array.from({ length: 6 }, (_, i) =>
              daysOfWeek.map((day, index) => (
                <th
                  key={i * 8 + index}
                  className="sticky top-0 z-30 bg-gray-200 border h-16 p-1 text-center font-medium text-base min-w-20 w-16"
                >
                  {day}
                </th>
              ))
            )}
          </tr>
        </thead>
        <tbody>
          {months.map((month, monthIndex) => {
            const { name, days } = month;
            const startDay = getStartDay(monthIndex);

            const cells = Array(42).fill("");
            for (let i = 0; i < days; i++) {
              cells[startDay + i] = i + 1;
            }

            const isSelected = selectedMonth === name;

            return (
              <tr key={monthIndex}>
                <td className="sticky left-0 z-20 bg-gray-200 border h-28 p-1 text-center font-medium text-base min-w-[80px]">
                  {name}
                </td>
                {cells.map((day, cellIndex) => {
                  const formattedDate =
                    day !== "" ? formatDate(2024, monthIndex, day) : null;

                  const eventsForTheDay = calendarData.filter(
                    (event) => event.start.split("T")[0] === formattedDate
                  );

                  return (
                    <td
                      key={cellIndex}
                      className={`relative border h-28 p-1 text-center font-medium text-base min-w-20 w-16 ${
                        day === ""
                          ? "bg-gray-100"
                          : isSelected
                          ? "bg-sky-200 text-black"
                          : "bg-white text-sky-700"
                      }`}
                    >
                      {day && (
                        <span className="absolute top-1 right-2 text-sm">
                          {day}
                        </span>
                      )}

                      {eventsForTheDay.length > 0 && (
                        <div className="text-xs mt-2 space-y-1 flex items-center flex-col">
                          {eventsForTheDay.map((event, idx) => (
                            <div
                              key={idx}
                              className={`truncate text-white p-0.5 w-16 rounded  hover:opacity-75 ${
                                eventColors[idx % eventColors.length]
                              }`}
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
            );
          })}
        </tbody>
      </table>
    </div>
  </div>
</div>

  );
}

export default YearView;
