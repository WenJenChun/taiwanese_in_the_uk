import React from 'react';
import { IoIosMale } from "react-icons/io";
import { AiOutlineLine } from "react-icons/ai";
import { PiLineVerticalLight } from "react-icons/pi";

const TravelMate = ({ imgSrc }) => {
  return (
    <div className='w-10/12 sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4'>
      <img className="rounded-xl object-cover sm:h-56" src={imgSrc} alt="Modern building architecture" />
      <p className='font-bold py-1'>12/1~12/10 德國耶誕市集...</p>
      <div className="flex justify-between text-sm">
        <p>Jerry</p>
        <PiLineVerticalLight className='my-0.5' size={18}/>
        <p>24y</p>
        <PiLineVerticalLight className='my-0.5' size={18}/>
        <p>學生</p>
        <PiLineVerticalLight className='my-0.5' size={18}/>
        <IoIosMale className=' inline' size={20}/>
      </div>
    </div>
      
    
  );
};

export default TravelMate;
