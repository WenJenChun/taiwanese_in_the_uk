import React from 'react';


const TextImageBox = ({ text, textUrl }) => {
  return (
    <div className='mx-1 w-5/12 md:w-2/12 mb-4 py-4 bg-teal-500 hover:bg-whiteOrange'>
      <a href={textUrl}>
        <p className='text-center text-white font-bold py-1'>{text}</p>
      </a>
  </div>
    
  );
};

export default TextImageBox;
