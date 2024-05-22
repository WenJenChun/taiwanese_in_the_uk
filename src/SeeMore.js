import React from 'react';
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const SeeMore = ({ pageLink, pageTitle }) => {
  return (
    <div className=''>
      <a href={pageLink}><p className='font-bold py-1 inline'>看更多{pageTitle}</p></a>
      <MdOutlineKeyboardDoubleArrowRight className='inline font-bold' size={20}/>
    </div>
  );
};

export default SeeMore;
