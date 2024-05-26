import React from 'react';
import { LuBedDouble } from "react-icons/lu";
import { LuPoundSterling } from "react-icons/lu";


const Thing = ({ imgSrc }) => {
  return (
    <div className='w-10/12 sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4'>
      <img className="rounded-xl object-cover sm:h-56" src={imgSrc} alt="Modern building architecture" />
      <p className='font-bold py-1'>全新大同電鍋，可煮十人份的..</p>
      <div className="flex justify-between text-sm">
        <p>全新</p>
        <div><LuPoundSterling className=' inline' size={18}/><p className='pt-1 inline'>105</p></div>
      </div>
    </div>
  );
};

export default Thing;
