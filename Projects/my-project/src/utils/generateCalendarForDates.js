const generateCalendarForDates = (month, year) => {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
    // Convert month name to number (e.g., "Aug" -> 8)
  const monthIndex = months.indexOf(month);
  if (monthIndex === -1) {
    throw new Error("Invalid month name");
  }

  const dates = [];
  const firstDate = new Date(year, monthIndex, 1);
  const lastDate = new Date(year, monthIndex + 1, 0); // Last day of the month

  let currentDate = new Date(year, monthIndex, 1);

  while (currentDate <= lastDate) {
    const dayName = days[currentDate.getDay()];
    const formattedDay = `${String(currentDate.getDate()).padStart(2, "0")} ${months[currentDate.getMonth()]} ${dayName}`;
    dates.push(formattedDay);
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return dates;
};

export default generateCalendarForDates