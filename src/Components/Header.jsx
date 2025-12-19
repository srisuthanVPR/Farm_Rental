import React from 'react'
import { NavLink } from 'react-router-dom'


const Header = () => {
  return (
    <>
    <div className='border border-red-300 bg-green-100 p-6'>
      <h1 className="text-2xl flex justify-center items-center font-bold mb-4">
        Agriculture Rental Management System
      </h1>
      <nav className="flex space-x-6 bg-gray-100 p-4"> 
        <NavLink to="/home" className={({ isActive }) => isActive ? "text-blue-600 font-bold" : "text-gray-700 hover:text-blue-500" } > Home </NavLink> 
        <NavLink to="/admin" className={({ isActive }) => isActive ? "text-blue-600 font-bold" : "text-gray-700 hover:text-blue-500" } > Admin </NavLink>
         <NavLink to="/about" className={({ isActive }) => isActive ? "text-blue-600 font-bold" : "text-gray-700 hover:text-blue-500" } > About </NavLink>
         <NavLink to="/contact" className={({ isActive }) => isActive ? "text-blue-600 font-bold" : "text-gray-700 hover:text-blue-500" } > Contact </NavLink>
      </nav>
    </div>
    </>
  )
}

export default Header