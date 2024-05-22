import React from 'react'
import { FaLocationDot } from "react-icons/fa6";


const Search = () => {
  return ( 
    <div className='text-center'>
        <div className='bg-teal-500  py-10'>
            <div className="text-center text-white text-xl font-semibold">I'm looking for...</div>
            <form className="flex justify-center mt-2">    
                <input type="text" className="w-4/12 bg-white text-gray-900 text-sm pl-2 py-3 focus:outline-none focus:ring-0" placeholder="rice cooker, house sharing, travel mates..."/>
                <button type="submit" className="rounded-sm bg-yellow-300 text-base font-thin px-3.5 hover:bg-rose-500">Search
                </button>
            </form>
        </div>
        <div className="bg-yellow-400 py-2.5 font-light flex text-center justify-center"><FaLocationDot className="pt-1" size={20}/>London
        </div>
        <div className="bg-whiteOrange py-5 text-sm text-white space-x-7">
            <a href="" className='hover:text-black'>All Kinda Questions</a>
            <a href="" className='hover:text-black'>2nd Hand Stuff</a>
            <a href="" className='hover:text-black'>House Sharing</a>
            <a href="" className='hover:text-black'>Clear Out</a>
            <a href="" className='hover:text-black'>揪團</a>
            <a href="" className='hover:text-black'>Travel Mates</a>
            <a href="" className='hover:text-black'>Coupon Sharing</a>
            <a href="" className='hover:text-black'>NTD-Sterling</a>
            <a href="" className='hover:text-black'>Purchasing Agent</a>
            <a href="" className='hover:text-black'>Luggage room</a>
            <a href="" className='hover:text-black'>Ticket Exchange</a></div>
    </div>
   
  )
}

export default Search