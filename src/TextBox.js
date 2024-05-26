import React from 'react';
import { LuBedDouble } from "react-icons/lu";
import { LuPoundSterling } from "react-icons/lu";


const TextBox = ({ text }) => {
  return (
    <div className='mx-1 w-5/12 md:w-2/12 mb-4 bg-red-500'>
      <p className='text-center text-white font-bold py-1'>{text}</p>
    </div>
  );
};

export default TextBox;
