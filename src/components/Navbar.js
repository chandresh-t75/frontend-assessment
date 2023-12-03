import React from 'react'

import { useSelector } from 'react-redux'
import { IoListCircle } from "react-icons/io5";
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  const {favourite}=useSelector((state)=>state);


  return (
    <nav className='w-full t-0 flex  justify-around py-2 bg-orange-300 items-center shadow-lg'>
        <div>
            <NavLink to="/"><img src="https://tejasbattery.com/wp-content/uploads/2022/06/TEJAS-LOGO.png" alt="" width={110} /></NavLink>
        </div>
        <div className='flex justify-center items-center gap-5'>
        <NavLink to="/"><p className='font-bold '>Home</p></NavLink>
        <NavLink to="/favourite" className="flex relative  items-center gap-1"><p className='font-bold'>Favourite</p><IoListCircle  fontSize="1.5em"/>
        <div className='absolute -top-1  -right-5 text-white bg-blue-600 rounded-full px-2 text-[12px] animate-bounce'>{favourite.length}</div></NavLink>
        </div>
        

    </nav>
  )
}

export default Navbar