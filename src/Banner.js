import React from 'react'
import "./styles/style.css"

const Banner = ({src}) => {
  return (
    <div style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/${src})` }} className="bg-cover bg-center h-64 flex items-center justify-center text-white text-4xl font-bold" >
      <div className="text-center">
          <h1 className="mb-4">All Needs Have Solutions</h1>
          <p>解決你英國生活的疑難雜症</p>
      </div>
    </div>
  )
}

export default Banner