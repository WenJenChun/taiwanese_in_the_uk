import React from 'react';
import { LuBedDouble } from "react-icons/lu";
import { LuPoundSterling } from "react-icons/lu";


const Thing = ({ imgSrc }) => {
  return (
    <div className='w-56 m-3'>
      <img className="rounded-xl h-56 object-cover" src={imgSrc} alt="Modern building architecture" />
      <p className='font-bold py-1'>全新大同電鍋，可煮十人份的..</p>
      <div className="flex justify-between text-sm">
        <p>全新</p>
        {/* <div ><LuBedDouble className=' inline' size={20}/><span>Single</span></div> */}
        <div><LuPoundSterling className=' inline' size={18}/><p className='pt-1 inline'>105</p></div>
      </div>
    </div>
      
    
  );
};

export default Thing;
