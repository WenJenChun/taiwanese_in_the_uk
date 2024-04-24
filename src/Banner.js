import React from 'react'
import "./styles/style.css"

const Banner = ({src}) => {
  return (
    <div
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/${src})`,
        minHeight: '400px', 
        position: 'relative', 
      }}
      className="bg-cover bg-center flex items-center justify-center text-white text-4xl font-bold"
    >
    {/* 黑色遮罩 */}
    <div
      className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      style={{ minHeight: '400px' }} 
    >
      <div className="text-center">
        <h1 className="mb-4 text-5xl tracking-wider">All Needs Have Solutions</h1>
        <p className="mb-4 text-4xl font-normal tracking-widest">解 決 你 英 國 生 活 的 疑 難 雜 症</p>
        <div className='flex justify-between'>
          <a href="" className='border-solid border rounded-sm border-white text-base font-thin px-3.5 py-0.5 hover:bg-rose-500'>London</a>
          <a href="" className='border-solid border rounded-sm border-white text-base font-thin px-3.5 py-0.5 hover:bg-rose-500'>Manchester</a>
          <a href="" className='border-solid border rounded-sm border-white text-base font-thin px-3.5 py-0.5 hover:bg-rose-500'>Glasgow</a>
          <a href="" className='border-solid border rounded-sm border-white text-base font-thin px-3.5 py-0.5 hover:bg-rose-500'>Liverpool</a>
          <a href="" className='border-solid border rounded-sm border-white text-base font-thin px-3.5 py-0.5 hover:bg-rose-500'>Bristol</a>
          <a href="" className='border-solid border rounded-sm border-white text-base font-thin px-3.5 py-0.5 hover:bg-rose-500'>Leeds</a>
        </div>
        <button
          class="mt-12 py-2 px-20 text-base font-medium uppercase text-white bg-black hover:text-yellow-300 ">
          other city
        </button>
        
      </div>
    </div>
  </div>

  )
}

export default Banner