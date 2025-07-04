import React from 'react'
import { useState } from 'react';

const Navbar = () => {
const [menuOpen, setMenuOpen] = useState(false); // State to manage mobile menu visibility

  return (
    <div>
        <nav className="w-full bg-black shadow-md fixed top-1 left-0 z-50">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            {/* <img src={logo} alt="Logo" className="h-10 w-auto mr-2" />  logo apan replace kar denge eoh jo dengewoh */} 
            <span className="font-bold text-2xl text-red-600 ">Hacko<span className='text-white'>Squad</span></span>
          </div>
          <div className="hidden md:flex space-x-10 text-lg font-sans">
            <a href="#features" className="text-gray-200 hover:text-red-500 font-medium">Features</a>
            <a href="#pricing" className="text-gray-200 hover:text-red-500 font-medium">Pricing</a>
            <a href="#tactics" className="text-gray-200 hover:text-red-500 font-medium">Tactics</a>
            <a href="#blog" className="text-gray-200 hover:text-red-500 font-medium">Blog</a>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a href="#login" className="px-1 py-2 text-white font-semibold rounded hover:text-red-600 transition">Login</a>
            <a href="#signup" className="px-4 py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition">Get Started</a>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-white focus:outline-none">
              {/* menu svg imported form the hugeiconns */}
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
  {/* mobile menu  */}
      {menuOpen && (
        <div className="md:hidden bg-black shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 flex flex-col">
            <a href="#features" className="block px-3 py-2 rounded text-white hover:bg-red-600">Features</a>
            <a href="#pricing" className="block px-3 py-2 rounded text-white hover:bg-red-600">Pricing</a>
            <a href="#tactics" className="block px-3 py-2 rounded text-white hover:bg-red-600">Tactics</a>
            <a href="#blog" className="block px-3 py-2 rounded text-white hover:bg-red-600">Blog</a>
            <a href="#login" className="block px-3 py-2 rounded text-red-600 font-semibold hover:bg-red-50 hover:text-black">Login</a>
            <a href="#signup" className="block px-3 py-2 rounded bg-red-600 text-white font-semibold hover:bg-red-700">Get Started</a>
          </div>
        </div>
      )}
    </nav>
    </div>
  )
}

export default Navbar
