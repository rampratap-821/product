import React, { useState } from 'react'
import { FaCamera, FaEye, FaTractor } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { SiShopify } from "react-icons/si";
import { FaHeart } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaCcAmazonPay, FaMoneyBill1 } from "react-icons/fa6";
import { AiFillSecurityScan } from "react-icons/ai";
import { IoSettings } from "react-icons/io5";
import { IoLogOutSharp } from "react-icons/io5";
import { FaLock } from "react-icons/fa";
import { MdEmojiEmotions } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";
import { CiShop } from "react-icons/ci";


const Profile = () => {
    const [show, setShow] = useState(1)

    return (
        <div className='py-20 px-10'>

            <div className='text-center'>
                <h1 className='text-6xl text-pink-700 font-bold py-5'>My Profile</h1>
                <h1 className='text-2xl text-gray-900 font-bold pb-5'>
                    Manage your account and shopping preferences
                </h1>
            </div>




            <div className='grid grid-cols-1  sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-10 mt-10 px-2 h-full'>




                <div className='bg-white shadow-lg rounded-2xl p-8'>
                    <div className=' flex flex-col items-center py-5'>
                        <div className='relative'>
                            <img
                                src="https://randomuser.me/api/portraits/men/17.jpg"
                                className='w-[120px] h-[120px] rounded-full object-cover border-4 border-pink-500'

                            />
                            <button className='absolute bottom-2 right-2 bg-pink-500 text-white p-2 rounded-full hover:bg-pink-600'>
                                <FaCamera />
                            </button>
                        </div>

                        <h2 className='text-2xl font-bold text-pink-800 mt-2'>Rampratap</h2>
                        <p className='text-gray-900  py-1'>ramgmail.com</p>
                        <p>⭐⭐⭐⭐⭐(4.4)</p>
                    </div>

                    <div className='flex items-center gap-2  hover:bg-pink-800 bg-pink-200 rounded p-2 group transition  opacity-0.1 mb-2 '>
                        < CgProfile className=' font-bold text-gray-600 group-hover:text-white '></CgProfile>
                        <h1 className=' font-bold text-gray-600 group-hover:text-white '><button onClick={() => setShow(1)}> Profile info </button></h1>
                    </div>

                    <div className='flex items-center gap-2  hover:bg-pink-800 bg-pink-200 rounded p-2 group transition  opacity-0.1 mb-2'>
                        <  SiShopify className=' font-bold text-gray-600 group-hover:text-white '></ SiShopify>
                        <h1 className=' font-bold text-gray-600 group-hover:text-white '><button onClick={() => setShow(2)}> My Order </button></h1>
                    </div>

                    <div className='flex items-center gap-2  hover:bg-pink-800 bg-pink-200 rounded p-2 group transition  opacity-0.1 mb-2'>
                        <  FaHeart className=' font-bold text-gray-600 group-hover:text-white '></ FaHeart>
                        <h1 className=' font-bold text-gray-600 group-hover:text-white '><button onClick={() => setShow(3)}> Whislist </button></h1>
                    </div>

                    <div className='flex items-center gap-2  hover:bg-pink-800 bg-pink-200 rounded p-2 group transition opacity-0.1 mb-2'>
                        <  FaHome className=' font-bold text-gray-600 group-hover:text-white '></ FaHome>
                        <h1 className=' font-bold text-gray-600 group-hover:text-white '><button>  </button>Address</h1>
                    </div>


                    <div className='flex items-center gap-2  hover:bg-pink-800 bg-pink-200 rounded p-2 group transition opacity-0.1 mb-2'>
                        < FaCcAmazonPay className=' font-bold text-gray-600 group-hover:text-white '></ FaCcAmazonPay>
                        <h1 className=' font-bold text-gray-600 group-hover:text-white '><button>Payment Method </button></h1>
                    </div>


                    <div className='flex items-center gap-2  hover:bg-pink-800 bg-pink-200 rounded p-2 group transition  opacity-0.1 mb-2'>
                        < AiFillSecurityScan className=' font-bold text-gray-600 group-hover:text-white '></ AiFillSecurityScan>
                        <h1 className=' font-bold text-gray-600 group-hover:text-white '><button> Security </button></h1>
                    </div>

                    <div className='flex items-center gap-2  hover:bg-pink-800 bg-pink-200 rounded p-2 group transition  opacity-0.1 mb-2'>
                        < IoSettings className=' font-bold text-gray-600 group-hover:text-white '></IoSettings>
                        <h1 className=' font-bold text-gray-600 group-hover:text-white '><button>Setting </button></h1>
                    </div>

                    <div className='flex items-center gap-2  hover:bg-pink-800 bg-pink-200 rounded p-2 group transition  opacity-0.1 mb-2'>
                        < IoLogOutSharp className=' font-bold text-red-600 group-hover:text-white '></IoLogOutSharp>
                        <h1 className=' font-bold text-red-600 group-hover:text-white '><button>Logout </button></h1>
                    </div>
                </div>







                <div className='lg:col-span-2 bg-yellow-100 rounded-2xl  shadow-md'>
                    {
                        show === 1 ?
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 w-full gap-2  pb-10">

                                <div className="bg-pink-200 p-4 py-6 text-center rounded-2xl shadow-sm shadow-pink-300 hover:scale-105 duration-700 group transition-transform">
                                    <FaLock className="mx-auto text-2xl transform transition-transform duration-700 group-hover:scale-105" />
                                    <h1 className="text-4xl font-bold">24</h1>
                                    <h2 className="text-2xl font-bold">Total order</h2>
                                </div>

                                <div className="bg-green-200 p-4 py-6 text-center rounded-2xl shadow-sm shadow-pink-300 hover:scale-105 duration-700 group transition-transform">
                                    <MdEmojiEmotions className="mx-auto text-2xl transform transition-transform duration-700 group-hover:scale-105" />
                                    <h1 className="text-4xl font-bold">12</h1>
                                    <h2 className="text-2xl font-bold">Whislist</h2>
                                </div>

                                <div className="bg-pink-200 p-4 py-6 text-center rounded-2xl shadow-sm shadow-pink-300 hover:scale-105 duration-700 group transition-transform">
                                    <FaLocationDot className="mx-auto text-2xl transform transition-transform duration-700 group-hover:scale-105" />
                                    <h1 className="text-4xl font-bold">1250</h1>
                                    <h2 className="text-2xl font-bold">Loyalty points</h2>
                                </div>

                                <div className="bg-green-200 p-4 py-6 text-center rounded-2xl shadow-sm shadow-pink-300 hover:scale-105 duration-700 group transition-transform">
                                    <TbTruckDelivery className="mx-auto text-2xl transform transition-transform duration-700 group-hover:scale-105" />
                                    <h1 className="text-4xl font-bold"> 100</h1>
                                    <h2 className="text-2xl font-bold">Money saved</h2>
                                </div>

                            </div>
                            :
                            null
                    }





                    {
                        show === 2 ?
                            <div className='bg-white h-full   shadow-lg rounded-2xl py-5'>
                                <div className='flex justify-between pb-2 px-5 items-center '>
                                    <h1 className=' font-bold' style={{ fontSize: 18 }}>My Order</h1>
                                    <h1 className=' text-green-900 ' style={{ fontSize: 14 }}>Total order 3</h1>
                                </div>

                                <div className='grid grid:cols-1 gap-5'>
                                    <div className=' py-5 mx-5 px-5  rounded-2xl hover:shadow-lg  border border-pink-400 bg-pink-100 '>
                                        <div className='flex justify-between '>
                                            <h1 className='' style={{ fontSize: 17 }}>Order #1</h1>
                                            <h1 className='bg-green-200 px-2 rounded-2xl border border-green-400'>Delivered</h1>
                                        </div>

                                        <div className='flex items-center text-green-500'>
                                            <CiShop></CiShop>
                                            <h1 style={{ fontSize: 12 }}> Place on 3/11/2025</h1>
                                        </div>
                                        <h1 className='text-green-900 font-bold pt-2' style={{ fontSize: 15 }}>Products :</h1>

                                        <div className='flex space-x-5 pt-1'>

                                            <div className='flex items-center gap-2  border border-pink-400 rounded px-5 '>
                                                <h1 className='text-xl'>💄</h1>
                                                <div>
                                                    <h1 style={{ fontSize: 14 }}> Lipistic</h1>
                                                    <h1 style={{ fontSize: 10 }}>  ₹899</h1>
                                                </div>
                                            </div>
                                            <div className='flex items-center space-x-2  border border-pink-400 rounded px-4 '>
                                                <h1 className='text-2xl'>⛸️</h1>
                                                <div>
                                                    <h1 style={{ fontSize: 14 }}>jhoota</h1>
                                                    <h1 style={{ fontSize: 10 }}>  ₹899</h1>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 pt-2 '>
                                            <div className='flex items-center'>
                                                <CiShop></CiShop>
                                                <h1>Items 3</h1>
                                            </div>
                                            <div className='flex items-center'>
                                                <FaMoneyBill1></FaMoneyBill1>
                                                <h1>Total: ₹1,450</h1>
                                            </div>
                                            <div className='flex items-center'>
                                                <FaTractor />
                                                <h1>Tracking</h1>
                                            </div>
                                            <div className='flex items-center'>
                                                <FaEye></FaEye>
                                                <h1>Details</h1>
                                            </div>
                                            <div className='flex items-center'>
                                                <CiShop></CiShop>
                                                <h1>Reorder</h1>
                                            </div>
                                        </div>
                                    </div>

                                    <div className=' py-5 mx-5 px-5  rounded-2xl hover:shadow-lg  border border-pink-400 bg-pink-100  '>
                                        <div className='flex justify-between '>
                                            <h1 className='' style={{ fontSize: 17 }}>Order #1</h1>
                                            <h1 className='bg-green-200 px-2 rounded-2xl border border-green-400'>Delivered</h1>
                                        </div>

                                        <div className='flex items-center text-green-500'>
                                            <CiShop></CiShop>
                                            <h1 style={{ fontSize: 12 }}> Place on 3/11/2025</h1>
                                        </div>
                                        <h1 className='text-green-900 font-bold pt-2' style={{ fontSize: 15 }}>Products :</h1>

                                        <div className='flex space-x-5 pt-1'>

                                            <div className='flex items-center gap-2  border border-pink-400 rounded px-5 '>
                                                <h1 className='text-xl'>💄</h1>
                                                <div>
                                                    <h1 style={{ fontSize: 14 }}> Lipistic</h1>
                                                    <h1 style={{ fontSize: 10 }}>  ₹899</h1>
                                                </div>
                                            </div>
                                            <div className='flex items-center space-x-2  border border-pink-400 rounded px-4 '>
                                                <h1 className='text-2xl'>⛸️</h1>
                                                <div>
                                                    <h1 style={{ fontSize: 14 }}>jhoota</h1>
                                                    <h1 style={{ fontSize: 10 }}>  ₹899</h1>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 pt-2 '>
                                            <div className='flex items-center'>
                                                <CiShop></CiShop>
                                                <h1>Items 3</h1>
                                            </div>
                                            <div className='flex items-center'>
                                                <FaMoneyBill1></FaMoneyBill1>
                                                <h1>Total: ₹1,450</h1>
                                            </div>
                                            <div className='flex items-center'>
                                                <FaTractor />
                                                <h1>Tracking</h1>
                                            </div>
                                            <div className='flex items-center'>
                                                <FaEye></FaEye>
                                                <h1>Details</h1>
                                            </div>
                                            <div className='flex items-center'>
                                                <CiShop></CiShop>
                                                <h1>Reorder</h1>
                                            </div>
                                        </div>
                                    </div>

                                    <div className=' py-5 mx-5 px-5  rounded-2xl hover:shadow-lg  border border-pink-400 bg-pink-100 '>
                                        <div className='flex justify-between '>
                                            <h1 className='' style={{ fontSize: 17 }}>Order #1</h1>
                                            <h1 className='bg-green-200 px-2 rounded-2xl border border-green-400'>Delivered</h1>
                                        </div>

                                        <div className='flex items-center text-green-500'>
                                            <CiShop></CiShop>
                                            <h1 style={{ fontSize: 12 }}> Place on 3/11/2025</h1>
                                        </div>
                                        <h1 className='text-green-900 font-bold pt-2' style={{ fontSize: 15 }}>Products :</h1>

                                        <div className='flex space-x-5 pt-1'>

                                            <div className='flex items-center gap-2  border border-pink-400 rounded px-5 '>
                                                <h1 className='text-xl'>💄</h1>
                                                <div>
                                                    <h1 style={{ fontSize: 14 }}> Lipistic</h1>
                                                    <h1 style={{ fontSize: 10 }}>  ₹899</h1>
                                                </div>
                                            </div>
                                            <div className='flex items-center space-x-2  border border-pink-400 rounded px-4 '>
                                                <h1 className='text-2xl'>⛸️</h1>
                                                <div>
                                                    <h1 style={{ fontSize: 14 }}>jhoota</h1>
                                                    <h1 style={{ fontSize: 10 }}>  ₹899</h1>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 pt-2 '>
                                            <div className='flex items-center'>
                                                <CiShop></CiShop>
                                                <h1>Items 3</h1>
                                            </div>
                                            <div className='flex items-center'>
                                                <FaMoneyBill1></FaMoneyBill1>
                                                <h1>Total: ₹1,450</h1>
                                            </div>
                                            <div className='flex items-center'>
                                                <FaTractor />
                                                <h1>Tracking</h1>
                                            </div>
                                            <div className='flex items-center'>
                                                <FaEye></FaEye>
                                                <h1>Details</h1>
                                            </div>
                                            <div className='flex items-center'>
                                                <CiShop></CiShop>
                                                <h1>Reorder</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            :
                            null
                    }





                    {
                        show === 3 ?
                            <div className='py-7'>
                                <div className='flex justify-between pb-2 px-5 items-center  '>
                                    <h1 className=' font-bold text-2xl font-bold' >My Order</h1>
                                    <h1 className=' text-green-900 text-xl ' >Total order 3</h1>
                                </div>

                                <div>
                                    <div className='py-5 bg-green-200'>
                                         <h1>💄</h1>
                                         <h1>lipistic</h1>
                                    </div>
                                </div>

                            </div>
                            :
                            null
                    }

                </div>





            </div>
        </div>
    )
}

export default Profile
