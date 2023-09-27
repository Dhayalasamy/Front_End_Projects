import React from "react";

const SectionTitle = ({ text}) => {

  // let textColor="text-black";
  // if (text === "My skills" || text === "Experience"){
  //   textColor= "text-white"
  // }
  
  return (
    <div className='border-b border-gray-400 pb-5'>
      <h2 className={`text-3xl font-medium tracking-wider text-white capitalize`}>{text}</h2>
    </div>
  );
};
export default SectionTitle;

