import { useState } from "react";

function Header({ onYearChange, onMonthChange }) {
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

  const years = Array.from(
    { length: 101 },
    (_, i) => new Date().getFullYear() - 50 + i
  );
  
  const [defaultMonth, setDefaultMonth] = useState("August");
  const [defaultYear, setDefaultYear] = useState(2024);

  const handleChangeMonth = (e) => {
    setDefaultMonth(e.target.value);
    onMonthChange(e.target.value)
  };

  const handleChangeYear = (e) => {
    const selectedYear = parseInt(e.target.value, 10); 
    setDefaultYear(selectedYear);
    onYearChange(selectedYear); 
  };

  return (
    <>
      <div className="flex justify-between items-center mt-3 md:mx-4 mx-2 ">
        <h1 className="md:text-xl lg:text-2xl text-lg font-medium">
          Your Todo's
        </h1>
        <div className="flex font-medium shadow-lg ">
          <select
            className="custom-select border border-r-0 rounded-l py-1"
            value={defaultMonth}
            onChange={handleChangeMonth}
          >
            {months.map((month, index) => (
              <option key={index}>{month}</option>
            ))}
          </select>
          <select
            className="custom-select border border-l-0 rounded-r py-1"
            value={defaultYear}
            onChange={handleChangeYear}
          >
            {years.map((year, index) => (
              <option key={index} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
}

export default Header;