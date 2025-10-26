import React, { useState, useEffect } from 'react'
import { FaMobileRetro } from "react-icons/fa6";
import { IoLocation } from "react-icons/io5";
import { FaGifts } from "react-icons/fa";
import { BsFillPatchQuestionFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Navbar1 = () => {
  const messages = ["Hello Rampratap 👋", "Kaise ho?","Nice"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % messages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='w-full fixed top-0 z-50 bg-gradient-to-r from-blue-900 via-teal-900 to-indigo-900 text-white py-2 px-4'>
      <div className='max-w-[1170px] mx-auto flex flex-wrap items-center justify-between gap-4'>
        
        <div className='whitespace-nowrap text-xl sm:text-2xl font-bold text-yellow-400' style={{fontFamily:"-moz-initial"}}>
          {messages[index]}
        </div>

        <div className='flex flex-wrap items-center justify-center gap-4 sm:gap-6'>
          
          <div className='flex items-center gap-1 hover:text-green-500 transition'>
            <FaMobileRetro className='text-base sm:text-lg' />
            <Link className='text-xs sm:text-sm md:text-base font-semibold' to="/">Get App</Link>
          </div>

          <div className='flex items-center gap-1 hover:text-yellow-200 transition'>
            <IoLocation className='text-base sm:text-lg' />
            <Link className='text-xs sm:text-sm md:text-base font-semibold' to="/">Store & Events</Link>
          </div>

          <div className='flex items-center gap-1 hover:text-yellow-200 transition'>
            <FaGifts className='text-base sm:text-lg' />
            <Link className='text-xs sm:text-sm md:text-base font-semibold' to="/">Gifts</Link>
          </div>

          <div className='flex items-center gap-1 hover:text-yellow-200 transition'>
            <BsFillPatchQuestionFill className='text-base sm:text-lg' />
            <Link className='text-xs sm:text-sm md:text-base font-semibold' to="/">Help</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar1;
