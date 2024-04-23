import React from 'react'
import "./styles/style.css"
import { BsCupHot } from 'react-icons/bs';
import { PiHamburgerThin } from "react-icons/pi";


const Nav = () => {
  return (
    <nav className='nav'>
      <div class="bg-gray-100 font-sans w-full m-0">
        <div class="bg-white">
          <div class="container mx-auto px-4">
            <div class="flex  items-center justify-between py-4">
              {/* logo & title */}
              <div>
                <BsCupHot class="inline pr-2 pb-0.5" size={25} color="black" />
                <h2 class="inline">Taiwanese in the UK</h2>
              </div>


              {/* 在這裡要加一個 div 讓 hamburger 控制 toggle */}
              {/* <div></div> */}
              {/* choices */}
              <div class="hidden sm:flex sm:items-center">
                <a href="#" class="text-gray-800 text-sm font-semibold hover:text-teal-500 mr-4">Products</a>
                <a href="#" class="text-gray-800 text-sm font-semibold hover:text-teal-500 mr-4">Marketplace</a>
                <a href="#" class="text-gray-800 text-sm font-semibold hover:text-teal-500 mr-4">Partners</a>
                <a href="#" class="text-gray-800 text-sm font-semibold hover:text-teal-500">Pricing</a>
              </div>

              {/* sign in */}
              <div class="hidden sm:flex sm:items-center">
                <a href="#" class="text-gray-800 text-sm font-semibold hover:text-teal-500 mr-4">Sign in</a>
                <a href="#" class="text-gray-800 text-sm font-semibold border px-4 py-2 rounded-lg hover:text-teal-500 hover:border-teal-500">Sign up</a>
              </div>

              {/* hamburger icon */}
              <div class="sm:hidden cursor-pointer">
                <a href=""><PiHamburgerThin class="inline pr-2 pb-0.5" size={25} color="black" /></a>
              </div>

            </div>
            
            <div class="block sm:hidden bg-white border-t-2 py-2">
              <div class="flex flex-col">
                <a href="#" class="text-gray-800 text-sm font-semibold hover:text-teal-500 mb-1">Products</a>
                <a href="#" class="text-gray-800 text-sm font-semibold hover:text-teal-500 mb-1">Marketplace</a>
                <a href="#" class="text-gray-800 text-sm font-semibold hover:text-teal-500 mb-1">Partners</a>
                <a href="#" class="text-gray-800 text-sm font-semibold hover:text-teal-500 mb-1">Pricing</a>
                <div class="flex justify-between items-center border-t-2 pt-2">
                  <a href="#" class="text-gray-800 text-sm font-semibold hover:text-teal-500 mr-4">Sign in</a>
                  <a href="#" class="text-gray-800 text-sm font-semibold border px-4 py-1 rounded-lg hover:text-teal-600 hover:border-teal-600">Sign up</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav