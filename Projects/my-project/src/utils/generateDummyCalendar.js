const generateDummyCalendar = () => {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const august2024 = [];
  const daysInAugust = 31;

  for (let day = 1; day <= daysInAugust; day++) {
    const date = new Date(2024, 7, day); 
    const dayName = days[date.getDay()];
    const formattedDay = `${String(day).padStart(2, '0')} ${months[date.getMonth()]} ${dayName}`;
    august2024.push(formattedDay);
  }

  return august2024;
};

  export default generateDummyCalendar;