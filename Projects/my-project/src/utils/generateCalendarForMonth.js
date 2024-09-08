const generateCalendarForMonth = (month, year) => {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const weeks = [];

  // Create a Date object for the first day of the month
  const firstDate = new Date(year, month - 1, 1);
  const lastDate = new Date(year, month, 0); // Last day of the month
  let currentDate = new Date(year, month - 1, 1);

  // Initialize variables for weeks
  let currentWeek = [];
  const daysInWeek = 7;

  // Generate weeks
  while (currentDate.getMonth() === month - 1) {
    const dayName = days[currentDate.getDay()];
    const formattedDay = `${String(currentDate.getDate()).padStart(2, "0")} ${months[currentDate.getMonth()]} ${dayName}`;
    currentWeek.push(formattedDay);

    // Check if the week is complete
    if (currentWeek.length === daysInWeek) {
      weeks.push(currentWeek);
      currentWeek = [];
    }

    // Move to the next day
    currentDate.setDate(currentDate.getDate() + 1);
  }

  // Handle the last week if it's not complete
  if (currentWeek.length > 0) {
    // Fill the remaining days with "End Of Month"
    while (currentWeek.length < daysInWeek) {
      currentWeek.push("End Of Month");
    }
    weeks.push(currentWeek);
  }

  return weeks;
};

export default generateCalendarForMonth;
