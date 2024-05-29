import React from 'react';


const TextBox = ({ text, textUrl }) => {
  return (
    <div className='content-center mx-1 w-5/12 md:w-2/12 mb-4 py-4 bg-teal-500 hover:bg-yellow-300 hover:text-black'>
      <a href={textUrl}>
        <p className='text-center text-white font-bold py-1'>{text}</p>
      </a>
  </div>
    
  );
};

export default TextBox;
