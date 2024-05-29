import React, {useEffect} from 'react'
import "./styles/style.css"
import { BsCupHot } from 'react-icons/bs';
import { PiHamburgerThin } from "react-icons/pi";
// import { query } from 'express';


const Nav = () => {
  useEffect(() => {
    const hamburgerIcon = document.querySelector("#hamburger");
    const menuChoice = document.querySelector("#menuChoice");

    if (hamburgerIcon) {
      hamburgerIcon.addEventListener("click", (e) => {
        e.preventDefault();
        console.log("click");
        menuChoice.classList.add("text-green");

        // 這裡可以添加更多處理邏輯
      });
    }
    // 清除事件監聽器
    return () => {
      if (hamburgerIcon) {
        hamburgerIcon.removeEventListener("click", () => {
          console.log("click");
        });
      }
    };
  }, []);

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

              {/* choices */}
              <div class="hidden sm:flex sm:items-center">
                <a href="#" class="text-gray-800 text-sm font-semibold hover:text-teal-500 mr-4">找房源</a>
                <a href="#" class="text-gray-800 text-sm font-semibold hover:text-teal-500 mr-4">找二手物品</a>
                <a href="#" class="text-gray-800 text-sm font-semibold hover:text-teal-500 mr-4">找旅伴</a>
                <a href="#" class="text-gray-800 text-sm font-semibold hover:text-teal-500">聊聊天</a>
              </div>

              {/* sign in */}
              <div class="hidden sm:flex sm:items-center">
                <a href="#" class="text-gray-800 text-sm font-semibold hover:text-teal-500 mr-4">Sign in</a>
                <a href="#" class="text-gray-800 text-sm font-semibold border px-4 py-2 rounded-lg text-teal-500 border-teal-500 hover:bg-teal-500 hover:text-white">Sign up</a>
              </div>

              {/* hamburger icon */}
              <div class="sm:hidden cursor-pointer" id="hamburger">
                <a href=""><PiHamburgerThin class="inline pr-2 pb-0.5" size={25} color="black" /></a>
              </div>

            </div>
            
            <div class="block sm:hidden bg-pink text-blue border-t-2 py-2" id="menuChoice">
              <p>test</p>
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