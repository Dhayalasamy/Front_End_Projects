function CalenderTitles(){
  const List = ["Today", "Week", "Month", "Year"];

    return(
        <>
         <div className="flex justify-center space-x-3 md:space-x-12 font-medium md:text-lg">
            {List.map((item, index) => (
              <a
                key={index}
                value={item}
                href="#"
                className="text-black md:border-b-4  border-b-2 border-transparent hover:border-blue-500"
              >
                {item}
              </a>
            ))}
          </div>
        </>
    )
}

export default CalenderTitles;