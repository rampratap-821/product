// 
import React from 'react'
import { Cosmetic } from '../JsonData/Home_Json'
import { Link } from 'react-router-dom'

const This_Season = () => {
  return (
    <div className='w-full mx-auto py-5'>
      <div className='w-[95%] mx-auto mt-5'>
        <h1 className='text-center text-6xl py-4'>👁️</h1>
        <h1 className='text-3xl text-black font-bold text-center pb-10 bg-gradient-to-r from-red-400 via-green-700 to-yellow-400 bg-clip-text text-transparent'>
          FEATURED CATEGORY
        </h1>

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-5'>
          {Cosmetic.map((item) => (
            <div
              key={item.id}
              className='relative text-center shadow-lg bg-white overflow-hidden  transition-all duration-300 hover:shadow-2xl group'
            >
              {/* 🖼️ Image Section */}
              <div className='w-full h-[300px]'>
                <img
                  src={item.url}
                  alt={item.category}
                  className='w-full h-full object-cover transform group-hover:scale-110 duration-700'
                />
              </div>

              {/* 🏷️ Overlay Text (Category Name) */}
              <div className='absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-100'>
                <Link className=' text-lg font-semibold mb-5 drop-shadow-lg bg-white py-1 px-4 text-green-600 hover:bg-pink-200 rounded'>
                  {item.category}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default This_Season
