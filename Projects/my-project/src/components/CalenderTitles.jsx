import React from "react";

function CalenderTitles({ onSelectView, selectedView }) {
  const List = ["Today", "Week", "Month", "Year"];

  return (
    <>
      <div className="flex justify-center space-x-3 md:space-x-12 font-medium md:text-lg">
        {List.map((item, index) => (
          <button
            key={index}
            value={item}
            onClick={() => onSelectView(item)}
            className={`text-black md:border-b-4 border-b-2 
              ${selectedView === item ? 'border-sky-700' : 'border-transparent'} 
              hover:border-sky-700 focus:outline-none rounded-b-sm`}
          >
            {item}
          </button>
        ))}
      </div>
    </>
  );
}

export default CalenderTitles;
