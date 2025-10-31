import React from 'react'
import { FaLock } from "react-icons/fa";
import { MdEmojiEmotions } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";

const ProductAvaileble = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-4 p-4 py-10">

      <div className="bg-pink-200 p-4 py-8 text-center rounded-lg shadow-sm shadow-pink-300 hover:scale-105 duration-700 group transition-transform">
        <FaLock className="mx-auto text-4xl transform transition-transform duration-700 group-hover:scale-105" />
        <h1 className="text-6xl font-bold">10K</h1>
        <h2 className="text-2xl font-bold">Product available</h2>
      </div>

      <div className="bg-green-200 p-4 py-8 text-center rounded-lg shadow-sm shadow-pink-300 hover:scale-105 duration-700 group transition-transform">
        <MdEmojiEmotions className="mx-auto text-4xl transform transition-transform duration-700 group-hover:scale-105" />
        <h1 className="text-6xl font-bold">20K</h1>
        <h2 className="text-2xl font-bold">Happy Customers</h2>
      </div>

      <div className="bg-pink-200 p-4 py-8 text-center rounded-lg shadow-sm shadow-pink-300 hover:scale-105 duration-700 group transition-transform">
        <FaLocationDot className="mx-auto text-4xl transform transition-transform duration-700 group-hover:scale-105" />
        <h1 className="text-6xl font-bold">50+</h1>
        <h2 className="text-2xl font-bold">Store Locations</h2>
      </div>

      <div className="bg-green-200 p-4 py-8 text-center rounded-lg shadow-sm shadow-pink-300 hover:scale-105 duration-700 group transition-transform">
        <TbTruckDelivery className="mx-auto text-4xl transform transition-transform duration-700 group-hover:scale-105" />
        <h1 className="text-6xl font-bold">10M</h1>
        <h2 className="text-2xl font-bold">Home Delivery</h2>
      </div>

    </div>
  )
}

export default ProductAvaileble
