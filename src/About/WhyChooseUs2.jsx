import React from 'react'
import { GiCommercialAirplane } from "react-icons/gi";
import { FaStarHalfAlt } from "react-icons/fa";
import { RiSpaceShipFill } from "react-icons/ri";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";


const WhyChooseUs2 = () => {
  return (
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-4 p-4 py-[30px]">
    
          <div className="bg-pink-300 p-4 py-[40px] text-center rounded-lg shadow-sm shadow-pink-300 hover:scale-105 duration-700 group transition-transform">
            <GiCommercialAirplane className="mx-auto text-6xl transform transition-transform duration-700 group-hover:scale-105 pb-5" />
            <h1 className="text-2xl font-bold">Fast Delivery</h1>
            <h2 className="text-gray-700">Same-day delivery within 2 hours</h2>
          </div>
    
       <div className="bg-orange-300 p-4 py-[40px] text-center rounded-lg shadow-sm shadow-pink-300 hover:scale-105 duration-700 group transition-transform">
            <RiMoneyRupeeCircleFill className="mx-auto text-6xl transform transition-transform duration-700 group-hover:scale-105 pb-5" />
            <h1 className="text-2xl font-bold">Best Prices</h1>
            <h2 className="text-gray-700">Competitive pricing guaranteed</h2>
          </div>
    

     <div className="bg-yellow-300 p-4 py-[40px] text-center rounded-lg shadow-sm shadow-pink-300 hover:scale-105 duration-700 group transition-transform">
            <FaStarHalfAlt className="mx-auto text-6xl transform transition-transform duration-700 group-hover:scale-105 pb-5" />
            <h1 className="text-2xl font-bold">Premium Qualityy</h1>
            <h2 className="text-gray-700">Fresh products daily from local farms</h2>
          </div>

 <div className="bg-blue-300 p-4 py-[40px] text-center rounded-lg shadow-sm shadow-pink-300 hover:scale-105 duration-700 group transition-transform">
            <RiSpaceShipFill className="mx-auto text-6xl transform transition-transform duration-700 group-hover:scale-105 pb-5" />
            <h1 className="text-2xl font-bold">Innovation</h1>
            <h2 className="text-gray-700">Latest technology for better service</h2>
          </div>
      
        </div>
  )
}

export default WhyChooseUs2;
