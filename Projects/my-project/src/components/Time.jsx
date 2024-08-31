function Time({view}) {
  return (
    <>
      <div className={`flex flex-col justify-start my-28 ${view ? "opacity-20" : ""}`}>
        {Array.from({ length: 10 }, (_, index) => {
          const hour = 10 + index;
          const period = hour < 12 ? "A.M" : "P.M";
          const displayHour = hour <= 12 ? hour : hour - 12;
          const formattedHour = displayHour.toString().padStart(2, "0");
          return (
            <div
              key={index}
              className="h-8 w-20 flex items-center mt-16 text-sky-600 font-medium"
            >
              {`${formattedHour} ${period}`}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Time;
