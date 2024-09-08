import React, { useState } from "react";
import RightArrow from "./RightArrow";
import LeftArrow from "./LeftArrow";
import CalenderTitles from "./CalenderTitles";
import YearView from "./YearView";
import MonthView from "./MonthView";
import WeekView from "./WeekView";
import TodayView from "./TodayView";

function Calendar({ selectedYear, selectedMonth }) {
  const [view, setView] = useState("Week");
  const [currentWeekIndex, setCurrentWeekIndex] = useState(0);
  const [currentDateIndex, setCurrentDateIndex] = useState(0);

  const handleViewChange = (selectedView) => {
    setView(selectedView);
  };

  const handleNextDate = () => {
    setCurrentDateIndex((prevIndex) => Math.min(prevIndex + 1, 30)); // Update 30 to actual last day of month
  };

  const handlePreviousDate = () => {
    setCurrentDateIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNextWeek = () => {
    setCurrentWeekIndex((prevIndex) => Math.min(prevIndex + 1, 4));
  };

  const handlePreviousWeek = () => {
    setCurrentWeekIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  return (
    <div className="bg-slate-100 m-2 md:m-4 md:py-10 py-7 px-2 md:px-6 rounded-lg relative">
      <div className="flex justify-between items-center">
        <div>
          <LeftArrow onClick={view === "Today" ? handlePreviousDate : handlePreviousWeek} />
          <RightArrow onClick={view === "Today" ? handleNextDate : handleNextWeek} />
        </div>
        <CalenderTitles onSelectView={handleViewChange} selectedView={view} />
      </div>

      {view === "Year" && selectedYear === 2024 ? (
        <YearView selectedMonth={selectedMonth} />
      ) : view === "Month" && selectedYear === 2024 ? (
        <MonthView selectedMonth={selectedMonth} />
      ) : view === "Week" && selectedYear === 2024 ? (
        <WeekView selectedMonth={selectedMonth} currentWeekIndex={currentWeekIndex} selectedYear={selectedYear}/>
      ) : view === "Today" && selectedYear === 2024 ? (
        <TodayView selectedMonth={selectedMonth} selectedYear={selectedYear} currentDateIndex={currentDateIndex} />
      ) : (
        <div className="mt-6 text-center md:text-lg text-base font-medium text-red-600">
          Data not found for the selected option
        </div>
      )}
    </div>
  );
}

export default Calendar;
