import React from 'react'
import "./styles/style.css"
import { BeakerIcon } from '@heroicons/react/24/solid'

const Nav = () => {
  return (
    <nav className='nav'>
        <ul>
            <li><a className ="text-sm font-medium text-gray-900" href="#">台灣人在英國資訊情報</a></li>
            <li><a href="#">註冊/登入</a></li>
        </ul>
        <div className="bg-red-500 text-white p-4">
          Hello, Tailwind CSS!
          <BeakerIcon className="h-6 w-6 text-blue-500" />
        </div>

    </nav>
  )
}

export default Nav