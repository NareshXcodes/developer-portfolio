import React from 'react'
import { NavLink } from 'react-router-dom'
import nameLogo from './../assets/logo1.png';

const Navbar = () => {
  return (
    <div className="w-full h-18 flex items-center border-white bg-[#222222] relative fixed ">
        <h1 className="PrimaryGradient PrimaryFont text-3xl font-bold ml-5 mr-2 ">Naresh.</h1>
        <img className="h-15 w-15 rounded-full m-0 p-0" src={nameLogo}/>
        <div className="flex justify-end w-full">
          <NavLink to="/" className="text-white SecondaryFont text-xl font-semibold p-5 m-5 hover:scale-110 hover:underline underline-offset-8 decoration-2 decoration-blue-500 transition-all duration-300 ease-in-out">Home</NavLink>
          <NavLink to="/About" className="text-white SecondaryFont text-xl font-semibold p-5 m-5 hover:scale-110 hover:underline underline-offset-8 decoration-2 decoration-blue-500 transition-all duration-300 ease-in-out">About</NavLink>
          <NavLink to="/Skills" className="text-white SecondaryFont text-xl font-semibold p-5 m-5 hover:scale-110 hover:underline underline-offset-8 decoration-2 decoration-blue-500 transition-all duration-300 ease-in-out">Skills</NavLink>
          <NavLink to="/Projects" className="text-white SecondaryFont text-xl font-semibold p-5 m-5 hover:scale-110 hover:underline underline-offset-8 decoration-2 decoration-blue-500 transition-all duration-300 ease-in-out">Projects</NavLink>
          <NavLink to="/Contact" className="text-white SecondaryFont text-xl font-semibold p-5 m-5 hover:scale-110 hover:underline underline-offset-8 decoration-2 decoration-blue-500 transition-all duration-300 ease-in-out">Contact</NavLink>
        </div>
        
    </div>
  )
}

export default Navbar