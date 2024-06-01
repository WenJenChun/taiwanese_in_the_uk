import React, { useState } from 'react';
import "./styles/style.css";
import { BsCupHot } from 'react-icons/bs';
import { PiHamburgerThin } from "react-icons/pi";
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';



const Nav = () => {
  const [isPhoneMenuVisible, setPhoneMenuVisible] = useState(false);
  const togglePhoneMenu = () => {
    setPhoneMenuVisible(!isPhoneMenuVisible);
  };

//   gsap.registerPlugin(useGSAP);

// const container = useRef();

// useGSAP(
//     () => {
//         // gsap code here...
//         gsap.to('.box', { x: 360 }); // <-- automatically reverted
//     },
//     { scope: container }
// );

  return (
    <nav className='nav'>
      <div className="bg-gray-100 font-sans w-full m-0">
        <div className="bg-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between py-4">
              {/* logo & title */}
              <div>
                <BsCupHot className="inline pr-2 pb-0.5" size={25} color="black" />
                <h2 className="inline">Taiwanese in the UK</h2>
                
              </div>

              {/* choices */}
              <div className="hidden sm:flex sm:items-center">
                <a href="#" className="text-gray-800 text-sm font-semibold hover:text-teal-500 mr-4">找房源</a>
                <a href="#" className="text-gray-800 text-sm font-semibold hover:text-teal-500 mr-4">找二手物品</a>
                <a href="#" className="text-gray-800 text-sm font-semibold hover:text-teal-500 mr-4">找旅伴</a>
                <a href="#" className="text-gray-800 text-sm font-semibold hover:text-teal-500">聊聊天</a>
              </div>

              {/* sign in */}
              <div className="hidden sm:flex sm:items-center">
                <a href="#" className="text-gray-800 text-sm font-semibold hover:text-teal-500 mr-4">Sign in</a>
                <a href="#" className="text-gray-800 text-sm font-semibold border px-4 py-2 rounded-lg text-teal-500 border-teal-500 hover:bg-teal-500 hover:text-white">Sign up</a>
              </div>

              {/* hamburger icon */}
              <div className="sm:hidden cursor-pointer" id="hamburger">
                <button onClick={togglePhoneMenu}>
                  <PiHamburgerThin className="inline pr-2 pb-0.5" size={25} color="black" />
                </button>
              </div>
            </div>

            {/* phone menu */}
            {isPhoneMenuVisible && (
              <div className="block sm:hidden bg-pink text-blue border-t-2 py-2" id="phoneMenuChoice">
                <div className="flex flex-col">
                  <a href="#" className="text-gray-800 text-sm font-semibold hover:text-teal-500 mb-1">Products</a>
                  <a href="#" className="text-gray-800 text-sm font-semibold hover:text-teal-500 mb-1">Marketplace</a>
                  <a href="#" className="text-gray-800 text-sm font-semibold hover:text-teal-500 mb-1">Partners</a>
                  <a href="#" className="text-gray-800 text-sm font-semibold hover:text-teal-500 mb-1">Pricing</a>
                  <div className="flex justify-between items-center border-t-2 pt-2">
                    <a href="#" className="text-gray-800 text-sm font-semibold hover:text-teal-500 mr-4">Sign in</a>
                    <a href="#" className="text-gray-800 text-sm font-semibold border px-4 py-1 rounded-lg hover:text-teal-600 hover:border-teal-600">Sign up</a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
