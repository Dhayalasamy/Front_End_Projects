import React, { useState } from "react";
import Header from "./components/Header";
import Calender from "./components/Calender";
import './App.css';

function App() {
  const [selectedYear, setSelectedYear] = useState(2024);
  const [selectedMonth, setSelectedMonth] = useState("August");

  const handleYearChange = (year) => {
    setSelectedYear(year);
  };
  const handleMonthChange = (month) => {
    setSelectedMonth(month);
  };

  return (
    <>
      <Header onYearChange={handleYearChange} onMonthChange={handleMonthChange}/>
      <Calender selectedYear={selectedYear} selectedMonth={selectedMonth} />
    </>
  );
}

export default App;
