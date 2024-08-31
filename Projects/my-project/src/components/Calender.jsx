import React, { useEffect, useState, useRef } from "react";
import RightArrow from "./RightArrow";
import LeftArrow from "./LeftArrow";
import Time from "./Time";
import MeetingCard from "./MeetingCard";
import CalenderTitles from "./CalenderTitles";
import MeetingDetails from "./MeetingDetails";
import ListOfMeetingCards from "./ListOfMeetingCards";
import generateDummyCalendar from "../utils/generateDummyCalendar";
import calendarFromToEndDateJSON from "../utils/calendarFromToEndDateJSON";
import calendarMeetingJSON from "../utils/calendarMeetingJSON";
import positions from "../utils/positions";

function Calender() {
  const [showComponent, setShowComponent] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [selectedCount, setSelectedCount] = useState(0);
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

  const handleMeetingCardClick = (event, count) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setPosition({
      top: rect.top + window.scrollY,
      left: rect.left + window.scrollX,
    });
    setSelectedCount(count);
    setShowComponent(true);
  };

  const AugustMonth = generateDummyCalendar();
  const predefinedPositions = positions;
  const calendarData = JSON.parse(calendarFromToEndDateJSON);
  const calendarMeeting = JSON.parse(calendarMeetingJSON);

  return (
    <>
      <div className="bg-slate-100 m-2 md:m-4 md:py-10 py-7 px-2 md:px-6 rounded-lg relative">
        <div className="flex justify-between items-center">
          <div>
            <LeftArrow />
            <RightArrow />
          </div>
          <CalenderTitles />
        </div>
        <div className={`mt-6 flex`}>
          <Time view={showComponent} />
          <div className="overflow-x-auto ml-2">
            <table
              className={`min-w-full table-auto border-collapse ${
                showComponent ? "opacity-20" : ""
              } `}
            >
              <thead>
                <tr className="h-24">
                  {AugustMonth.map((item, rowIndex) => {
                    const isFirstCell = rowIndex === 0;
                    const isLastCell = rowIndex === AugustMonth.length - 1;
                    return (
                      <th
                        key={rowIndex}
                        className={`min-w-52 h-24 pt-4 px-14 pb-2 font-normal border-gray-300 ${
                          isFirstCell || isLastCell
                            ? "border-t border-b"
                            : "border"
                        }`}
                      >
                        {item}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {[...Array(10)].map((_, rowIndex) => (
                  <tr key={rowIndex} className="h-24">
                    {[...Array(31)].map((_, colIndex) => {
                      const isFirstCol = colIndex === 0;
                      const isLastCol = colIndex === 31;

                      if (rowIndex === 0) {
                        return (
                          <td
                            key={colIndex}
                            className={`w-64 h-24 p-1 border-t border-b ${
                              isFirstCol ? "border-l-0" : "border-l"
                            } ${
                              isLastCol ? "border-r-0" : ""
                            } border-gray-300 overflow-hidden`}
                          ></td>
                        );
                      }

                      const position = predefinedPositions.find(
                        (pos) =>
                          pos.row === rowIndex + 1 && pos.col === colIndex + 1
                      );

                      return (
                        <td
                          key={colIndex}
                          className={`w-64 h-24 p-1 border-t border-b ${
                            isFirstCol ? "border-l-0" : "border-l"
                          } ${
                            isLastCol ? "border-r-0" : ""
                          } border-gray-300 overflow-hidden`}
                        >
                          {position && (
                            <MeetingCard
                              invite={calendarData}
                              onClick={(event) =>
                                handleMeetingCardClick(event, position.count)
                              }
                              count={position.count}
                            />
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
            {showComponent &&
              (selectedCount === 0 ? (
                <div
                  ref={modalRef}
                  style={{ top: position.top + 20, left: position.left + 20 }}
                  className="absolute z-20"
                >
                  <MeetingDetails invite={calendarMeeting} />
                </div>
              ) : (
                <div
                  ref={modalRef}
                  style={{ top: position.top + 35, left: position.left - 15 }}
                  className="absolute z-20 bg-slate-50"
                >
                  <ListOfMeetingCards
                    invite={calendarData}
                    count={selectedCount}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Calender;
