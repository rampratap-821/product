import React, { useState, useEffect } from 'react'
import { FaMobileRetro } from "react-icons/fa6";
import { IoLocation } from "react-icons/io5";
import { FaGifts } from "react-icons/fa";
import { BsFillPatchQuestionFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Navbar1 = () => {
  const messages = ["Hello Rampratap", "Kharido Ek, Pao Ek FREE", "Diwali Gift Hamara, Khushiyan Aapki", "Har Purchase par Free Gift", "Lucky Draw ke Sath!"]
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % messages.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className=' text-white p-2 text-sm md:text-xl flex flex-col md:flex-row gap-4 md:gap-10 justify-between items-center px-4 md:px-20 gradient-card bg-gradient-to-r from-pink-200  to-pink-500'>
      <div className='w-full md:w-auto text-center'>
        <h1 className='text-lg md:text-xl font-medium truncate'>{messages[index]}</h1>
      </div>
      
      <div className='grid grid-cols-2 md:flex gap-3 md:gap-4 w-full md:w-auto justify-center'>
        <div className='flex gap-2 hover:text-green-500 justify-center md:justify-start'>
          <div className='pt-1'> <FaMobileRetro /></div>
          <div> <Link className='font-bold text-sm md:text-base'>Get App</Link></div>
        </div>

        <div className='flex gap-2 hover:text-green-500 justify-center md:justify-start'>
          <div className='pt-1'> <IoLocation /></div>
          <div> <Link className='font-bold text-sm md:text-base'>Store & Events</Link></div>
        </div>

        <div className='flex gap-2 hover:text-green-500 justify-center md:justify-start'>
          <div className='pt-1'> <FaGifts /></div>
          <div> <Link className='font-bold text-sm md:text-base'> Gifts...</Link></div>
        </div>

        <div className='flex gap-2 hover:text-green-500 justify-center md:justify-start'>
          <div className='pt-1'> <BsFillPatchQuestionFill /></div>
          <div> <Link className='font-bold text-sm md:text-base'>Help</Link></div>
        </div>
      </div>
    </div>
  )
}

export default Navbar1