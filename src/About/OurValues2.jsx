import React from 'react'
import { FaLeaf } from "react-icons/fa";
import { FaHandHoldingHeart } from "react-icons/fa";
import { BiAdjust } from "react-icons/bi";
import { GiRapidshareArrow } from "react-icons/gi";


const OurValues2 = () => {
  return (
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-4 p-4 py-[30px]">
    
          <div className="bg-pink-300 p-4 py-[100px] text-center rounded-lg shadow-sm shadow-pink-300 hover:scale-105 duration-700 group transition-transform">
            <FaLeaf className="mx-auto text-6xl transform transition-transform duration-700 group-hover:scale-105 pb-5" />
            <h1 className="text-2xl font-bold">Sustainability</h1>
            <h2 className="text-gray-700">Eco-friendly packaging and supporting local farmers</h2>
          </div>
    
      <div className="bg-pink-300 p-4 py-[100px] text-center rounded-lg shadow-sm shadow-pink-300 hover:scale-105 duration-700 group transition-transform">
            <FaHandHoldingHeart className="mx-auto text-6xl transform transition-transform duration-700 group-hover:scale-105 pb-5" />
            <h1 className="text-2xl font-bold">Community First</h1>
            <h2 className="text-gray-700">Building strong relationships with our customers</h2>
          </div>
    

      <div className="bg-pink-300 p-4 py-[100px] text-center rounded-lg shadow-sm shadow-pink-300 hover:scale-105 duration-700 group transition-transform">
            < BiAdjust  className="mx-auto text-6xl transform transition-transform duration-700 group-hover:scale-105 pb-5" />
            <h1 className="text-2xl font-bold">Quality Promise</h1>
            <h2 className="text-gray-700">100% quality assurance on all products</h2>
          </div>
    

      <div className="bg-pink-300 p-4 py-[100px] text-center rounded-lg shadow-sm shadow-pink-300 hover:scale-105 duration-700 group transition-transform">
            <GiRapidshareArrow className="mx-auto text-6xl transform transition-transform duration-700 group-hover:scale-105 pb-5" />
            <h1 className="text-2xl font-bold">Innovation</h1>
            <h2 className="text-gray-700">Constantly improving our servicesConstantly improving our services</h2>
          </div>
    

    
        </div>
  )
}

export default OurValues2
