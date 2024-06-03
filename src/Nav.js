import React, { useState, useRef, useEffect } from 'react';
import { BsCupHot } from 'react-icons/bs';
import { PiHamburgerThin } from "react-icons/pi";
import gsap from 'gsap';

const Nav = () => {
  const [isPhoneMenuVisible, setPhoneMenuVisible] = useState(false);
  const phoneMenuRef = useRef(null);

  const togglePhoneMenu = () => {
    //點擊 hamburgerIcon 後，判斷如果 isPhoneMenuVisible 為 true 時
    if (!isPhoneMenuVisible) {
      gsap.set(phoneMenuRef.current, { height: 'auto' }); //height: 'auto'以獲取實際高度
      const fullHeight = phoneMenuRef.current.scrollHeight + 'px';
      //ease in
      gsap.fromTo(
        phoneMenuRef.current,
        { height: 0, opacity: 0 },
        {
          duration: 0.5,
          height: fullHeight,
          opacity: 1,
          ease: 'power2.inOut',
          onComplete: () => {
            phoneMenuRef.current.style.height = 'auto'; // 確保展開後高度為正常所以設 auto
          },
        }
      );
    } else {
      // 收合
      gsap.fromTo(
        phoneMenuRef.current,
        { height: phoneMenuRef.current.scrollHeight + 'px', opacity: 1 },
        {
          duration: 0.5,
          height: 0,
          opacity: 0,
          ease: 'power2.inOut',
          onComplete: () => {
            phoneMenuRef.current.style.height = 0; // 確保完成後高度為0
          },
        }
      );
    }
    setPhoneMenuVisible(!isPhoneMenuVisible); // 更改狀態
  };
  

  useEffect(() => {
    if (!isPhoneMenuVisible) {
      gsap.set(phoneMenuRef.current, { height: 0, opacity: 0 });
    }
  }, [isPhoneMenuVisible]);

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
            <div
              ref={phoneMenuRef}
              className="overflow-hidden sm:hidden border-t-2"
              id="phoneMenuChoice"
              style={{ height: 0, opacity: 0 }}
            >
              <div className="flex flex-col">
                <a href="#" className="mt-1 text-gray-800 text-sm font-semibold hover:text-teal-500 mb-1">Products</a>
                <a href="#" className="text-gray-800 text-sm font-semibold hover:text-teal-500 mb-1">Marketplace</a>
                <a href="#" className="text-gray-800 text-sm font-semibold hover:text-teal-500 mb-1">Partners</a>
                <a href="#" className="text-gray-800 text-sm font-semibold hover:text-teal-500 mb-1">Pricing</a>
                <div className="flex justify-between items-center border-t-2 pt-2">
                  <a href="#" className="text-gray-800 text-sm font-semibold mb-2 hover:text-teal-500 mr-4">Sign in</a>
                  <a href="#" className="text-gray-800 text-sm font-semibold border px-4 py-1 mb-2 rounded-lg hover:text-teal-600 hover:border-teal-600">Sign up</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
