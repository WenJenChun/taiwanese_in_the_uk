import React, { useState } from 'react';
import "./styles/style.css";
import { RxCross2 } from "react-icons/rx";

const Banner = ({ src }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 開啟 modal 的函數
  const openModal = () => {
    setIsModalOpen(true);
  };

  // 關閉 modal 的函數
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/${src})`,
        minHeight: '400px',
        position: 'relative',
      }}
      className="bg-cover bg-center flex items-center justify-center font-bold"
    >
      {/* 黑色遮罩 */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
        style={{ minHeight: '400px' }}
      >
        <div className="text-center">
          <h1 className="mb-4 text-3xl md:text-5xl tracking-wider font-extrabold text-white">All Needs Have Solutions</h1>
          <p className="mb-4 text-lg md:text-2xl font-bold tracking-wider text-white">Solving the Puzzles of Your Life in the UK</p>
          <div className='flex flex-wrap justify-center gap-2 mx-1'>
            <a href="" className='text-white border-solid border rounded-sm border-white text-base font-normal px-3.5 py-0.5 hover:bg-rose-500'>London</a>
            <a href="" className='text-white border-solid border rounded-sm border-white text-base font-normal px-3.5 py-0.5 hover:bg-rose-500'>Manchester</a>
            <a href="" className='text-white border-solid border rounded-sm border-white text-base font-normal px-3.5 py-0.5 hover:bg-rose-500'>Glasgow</a>
            <a href="" className='text-white border-solid border rounded-sm border-white text-base font-normal px-3.5 py-0.5 hover:bg-rose-500'>Liverpool</a>
            <a href="" className='text-white border-solid border rounded-sm border-white text-base font-normal px-3.5 py-0.5 hover:bg-rose-500'>Bristol</a>
            <a href="" className='text-white border-solid border rounded-sm border-white text-base font-normal px-3.5 py-0.5 hover:bg-rose-500'>Birmingham</a>
          </div>
          {/* 點擊按鈕開啟 modal */}
          <button onClick={openModal}
            className="mt-12 py-2 px-20 text-base font-medium uppercase text-white bg-black hover:text-yellow-300">
            other city
          </button>
         
          {isModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="absolute inset-0 bg-black opacity-75"></div>
            <div className="relative bg-white rounded-lg p-4">
              <div className="flex justify-end">
                <button onClick={closeModal} className="text-sm text-gray-500"><RxCross2 /></button>
              </div>
              <p className="mb-4 text-black text-2xl">Other Cities</p>
    
              <div className='flex justify-between p-3 space-x-4'>
                <a href="" className='border-solid border rounded-sm border-grey  text-base font-normal px-3.5 py-0.5 hover:bg-rose-500'>Sheffield</a>
                <a href="" className='border-solid border rounded-sm border-grey text-base font-normal px-3.5 py-0.5 hover:bg-rose-500'>Leeds</a>
                <a href="" className='border-solid border rounded-sm border-grey text-base font-normal px-3.5 py-0.5 hover:bg-rose-500'>Edinburgh</a>
                <a href="" className='border-solid border rounded-sm border-grey text-base font-normal px-3.5 py-0.5 hover:bg-rose-500'>Belfast</a>
              </div>
            </div>
          </div>
          
          
          )}
        </div>
      </div>
    </div>
  )
}

export default Banner;
