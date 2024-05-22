import React from 'react';
import { LuBedDouble } from "react-icons/lu";
import { LuPoundSterling } from "react-icons/lu";


const Room = ({ imgSrc }) => {
  return (
    
    <div className='text-center w-80 sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4'>
      <img className="rounded-xl h-56 object-cover" src={imgSrc} alt="Modern building architecture" />
      <p className='font-bold py-1'>市中心乾淨明亮通風雙人房，...</p>
      <div className="flex justify-between text-sm">
        <p>長租</p>
        <div ><LuBedDouble className=' inline' size={20}/><span>Single</span></div>
        <div><LuPoundSterling className=' inline' size={18}/><p className='pt-1 inline'>675 pcm</p></div>
      </div>
    </div>
  
  );
};

export default Room;
