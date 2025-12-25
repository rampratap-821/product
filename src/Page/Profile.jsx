import React, { useState } from 'react'
import { FaBell, FaCamera, FaEdit, FaEye, FaLockOpen, FaPlus, FaSave, FaShoppingBasket, FaShoppingCart, FaTractor } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { SiShopify } from "react-icons/si";
import { FaHeart } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaCcAmazonPay, FaMoneyBill1, FaPersonRifle, } from "react-icons/fa6";
import { AiFillSecurityScan } from "react-icons/ai";
import { IoSettings } from "react-icons/io5";
import { IoLogOutSharp } from "react-icons/io5";
import { FaLock } from "react-icons/fa";
import { MdCancel, MdEmojiEmotions } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";
import { CiShop } from "react-icons/ci";
import { MdShoppingCart } from "react-icons/md";
import { IoMdShareAlt } from "react-icons/io";
import { FcCloseUpMode } from "react-icons/fc";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { IoSettingsSharp } from "react-icons/io5";
import { Textarea } from 'flowbite-react';
import { GiRotaryPhone } from "react-icons/gi";
import { RiMailAddFill } from "react-icons/ri";
import { SlCalender } from "react-icons/sl";


const Profile = () => {
    const [show, setShow] = useState(1)
    const [data, setData] = useState("")
    const [data2, setData2] = useState("")
    const [isEditing, setIsEditing] = useState(false);
    const [tempName, setTempName] = useState("Ramptatap")
    const [email, setEmail] = useState("")
    const [email2, setEmail2] = useState("")

    const handleEditSave = () => {
        if (isEditing) {
            setEmail(email2)
            setData(tempName);
        } else {

            setTempName(data);
            setEmail2(email)
        }
        setIsEditing(!isEditing);
    };


    return (
        <div className='py-20 px-1 bg-black text-white min-h-screen'>

            <div className='text-center'>
                <h1 className='text-6xl text-pink-400 font-bold py-5'>My Profile</h1>
                <h1 className='text-2xl text-gray-300 font-bold pb-5'>
                    Manage your account and shopping preferences
                </h1>
            </div>




            <div className='grid grid-cols-1  sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 mt-10 px-2 h-full items-center '>




                <div className='bg-gray-900 shadow-lg rounded-2xl p-8 border border-gray-700'>
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

                        <h2 className='text-2xl font-bold text-pink-300 mt-2'>{data || "Rampratap "}</h2>
                        <p className='text-gray-300  py-1'>{email || "ramgmail.com"}</p>
                        <p className='text-yellow-400'>⭐⭐⭐⭐⭐(4.4)</p>
                    </div>

                    <div className='flex items-center gap-2  hover:bg-pink-800 bg-gray-800 rounded-2xl p-2 group transition  opacity-0.1 mb-2 '>
                        < CgProfile className=' font-bold text-gray-300 group-hover:text-white '></CgProfile>
                        <h1 className=' font-bold text-gray-300 group-hover:text-white '><button onClick={() => setShow(1)}> Profile info </button></h1>
                    </div>

                    <div className='flex items-center gap-2  hover:bg-pink-800 bg-gray-800 rounded-2xl p-2 group transition  opacity-0.1 mb-2'>
                        <  SiShopify className=' font-bold text-gray-300 group-hover:text-white '></ SiShopify>
                        <h1 className=' font-bold text-gray-300 group-hover:text-white '><button onClick={() => setShow(2)}> My Order </button></h1>
                    </div>

                    <div className='flex items-center gap-2  hover:bg-pink-800 bg-gray-800 rounded-2xl p-2 group transition  opacity-0.1 mb-2'>
                        <  FaHeart className=' font-bold text-gray-300 group-hover:text-white '></ FaHeart>
                        <h1 className=' font-bold text-gray-300 group-hover:text-white '><button onClick={() => setShow(3)}> Whislist </button></h1>
                    </div>

                    <div className='flex items-center gap-2  hover:bg-pink-800 bg-gray-800 rounded-2xl p-2 group transition opacity-0.1 mb-2'>
                        <  FaHome className=' font-bold text-gray-300 group-hover:text-white '></ FaHome>
                        <h1 className=' font-bold text-gray-300 group-hover:text-white '><button onClick={() => setShow(4)}>Address </button></h1>
                    </div>


                    <div className='flex items-center gap-2  hover:bg-pink-800 bg-gray-800 rounded-2xl p-2 group transition opacity-0.1 mb-2'>
                        < FaCcAmazonPay className=' font-bold text-gray-300 group-hover:text-white '></ FaCcAmazonPay>
                        <h1 className=' font-bold text-gray-300 group-hover:text-white '><button onClick={() => setShow(5)}>Payment Method </button></h1>
                    </div>


                    <div className='flex items-center gap-2  hover:bg-pink-800 bg-gray-800 rounded-2xl p-2 group transition  opacity-0.1 mb-2'>
                        < AiFillSecurityScan className=' font-bold text-gray-300 group-hover:text-white '></ AiFillSecurityScan>
                        <h1 className=' font-bold text-gray-300 group-hover:text-white '><button onClick={() => setShow(6)}> Security </button></h1>
                    </div>

                    <div className='flex items-center gap-2  hover:bg-pink-800 bg-gray-800 rounded-2xl p-2 group transition  opacity-0.1 mb-2'>
                        < IoSettings className=' font-bold text-gray-300 group-hover:text-white '></IoSettings>
                        <h1 className=' font-bold text-gray-300 group-hover:text-white '><button onClick={() => setShow(7)}>Setting </button></h1>
                    </div>

                    <div className='flex items-center gap-2  hover:bg-pink-800 bg-gray-800 rounded-2xl p-2 group transition  opacity-0.1 mb-2'>
                        < IoLogOutSharp className=' font-bold text-red-400 group-hover:text-white '></IoLogOutSharp>
                        <h1 className=' font-bold text-red-400 group-hover:text-white '><button>Logout </button></h1>
                    </div>
                </div>







                <div className='lg:col-span-2  rounded-2xl  '>
                    {
                        show === 1 ?
                            <div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 w-full gap-5  pb-5">

                                    <div className="bg-gray-900 p-4 py-6 text-center rounded-2xl shadow-sm shadow-gray-800 hover:scale-105 duration-700 group transition-transform border border-gray-700">
                                        <FaLock className="mx-auto text-2xl text-white transform transition-transform duration-700 group-hover:scale-105" />
                                        <h1 className="text-4xl font-bold text-white">24</h1>
                                        <h2 className="text-2xl font-bold text-gray-300">Total order</h2>
                                    </div>

                                    <div className="bg-gray-900 p-4 py-6 text-center rounded-2xl shadow-sm shadow-gray-800 hover:scale-105 duration-700 group transition-transform border border-gray-700">
                                        <MdEmojiEmotions className="mx-auto text-2xl text-white transform transition-transform duration-700 group-hover:scale-105" />
                                        <h1 className="text-4xl font-bold text-white">12</h1>
                                        <h2 className="text-2xl font-bold text-gray-300">Whislist</h2>
                                    </div>

                                    <div className="bg-gray-900 p-4 py-6 text-center rounded-2xl shadow-sm shadow-gray-800 hover:scale-105 duration-700 group transition-transform border border-gray-700">
                                        <FaLocationDot className="mx-auto text-2xl text-white transform transition-transform duration-700 group-hover:scale-105" />
                                        <h1 className="text-4xl font-bold text-white">1250</h1>
                                        <h2 className="text-2xl font-bold text-gray-300">Loyalty points</h2>
                                    </div>

                                    <div className="bg-gray-900 p-4 py-6 text-center rounded-2xl shadow-sm shadow-gray-800 hover:scale-105 duration-700 group transition-transform border border-gray-700">
                                        <TbTruckDelivery className="mx-auto text-2xl text-white transform transition-transform duration-700 group-hover:scale-105" />
                                        <h1 className="text-4xl font-bold text-white"> 100</h1>
                                        <h2 className="text-2xl font-bold text-gray-300">Money saved</h2>
                                    </div>
                                </div>






                                <div className='py-10 bg-gray-900 rounded-2xl shadow-lg border border-gray-700'>

                                    <div className='flex justify-between px-5'>
                                        <h1 className='font-bold text-2xl text-pink-300'>Profile Information</h1>
                                        <div>
                                            {
                                                isEditing !== true ?
                                                    <div className='flex items-center gap-2 text-xl bg-green-700 py-1 px-8 rounded-2xl font-bold hover:text-white hover:bg-pink-800'
                                                        onClick={handleEditSave}
                                                    >
                                                        <FaEdit className='text-white'></FaEdit>
                                                        <button >Edit</button>
                                                    </div>
                                                    :
                                                    <div className='flex gap-2 text-xl'>


                                                        <div className='flex items-center gap-2 text-xl bg-green-700 py-1 px-2 sm:px-4 md:px-6 lg:px-8 rounded-2xl font-bold hover:text-white hover:bg-pink-800'
                                                            onClick={handleEditSave}
                                                        >
                                                            <FaSave className='text-white'></FaSave>
                                                            <button >Save</button>
                                                        </div>


                                                        <div className='flex items-center gap-2 text-xl bg-green-700 py-1  px-2 sm:px-4 md:px-6 lg:px-8 rounded-2xl font-bold hover:text-white hover:bg-pink-800'
                                                            onClick={handleEditSave}
                                                        >
                                                            <MdCancel className='text-white'></MdCancel>
                                                            <button >Cancel</button>
                                                        </div>

                                                    </div>
                                            }
                                        </div>
                                    </div>


                                    <div className='px-5 py-5'>

                                        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5'>
                                            <div className='w-full '>
                                                <h1 className='py-2 text-gray-300'>Full Name</h1>
                                                <div className='flex items-center gap-5 bg-gray-800 text-xl rounded-2xl w-full shadow-lg border border-gray-700'>
                                                    < CgProfile className=' ml-5 text-gray-400'></ CgProfile >
                                                    <input
                                                        type='text'
                                                        placeholder='Enter the full name'
                                                        value={tempName}
                                                        onChange={(e) => setTempName(e.target.value)}
                                                        disabled={!isEditing}

                                                        className='py-2 outline-none w-[90%] rounded-2xl bg-gray-800 text-white' />
                                                </div>
                                            </div>

                                            <div className='w-full'>
                                                <h1 className='py-2 text-gray-300'>Phone Number</h1>
                                                <div className='flex items-center gap-5 bg-gray-800 text-xl rounded-2xl w-full shadow-lg border border-gray-700'>
                                                    < GiRotaryPhone className=' ml-5 text-gray-400'></ GiRotaryPhone>
                                                    <input
                                                        type='text'
                                                        placeholder='Enter the phone number'
                                                        value={email2}
                                                        onChange={(e) => setEmail2(e.target.value)}
                                                        disabled={!isEditing}
                                                        className='py-2 outline-none w-[90%] rounded-2xl bg-gray-800 text-white' />
                                                </div>
                                            </div>

                                            <div className='w-full '>
                                                <h1 className='py-2 text-gray-300'>Email Address</h1>
                                                <div className='flex items-center gap-5 bg-gray-800 text-xl rounded-2xl w-full shadow-lg border border-gray-700'>
                                                    < RiMailAddFill className=' ml-5 text-gray-400'></ RiMailAddFill>
                                                    <input
                                                        type='text'
                                                        placeholder='Enter the email address'
                                                        disabled={!isEditing}
                                                        className='py-2 outline-none w-[90%] rounded-2xl bg-gray-800 text-white' />
                                                </div>
                                            </div>

                                            <div className='w-full'>
                                                <h1 className='py-2 text-gray-300'>Member Since</h1>
                                                <div className='flex items-center gap-5 bg-gray-800 text-xl rounded-2xl w-full shadow-lg border border-gray-700'>
                                                    < SlCalender className=' ml-5 text-gray-400'></ SlCalender>
                                                    <input
                                                        type='text'
                                                        placeholder='Enter the month'
                                                        disabled={!isEditing}
                                                        className='py-2 outline-none w-[90%] rounded-2xl bg-gray-800 text-white' />
                                                </div>
                                            </div>

                                        </div>



                                        <div className='w-full '>
                                            <h1 className='py-2 text-gray-300'>Delivery Address</h1>
                                            <div className='bg-gray-800 text-xl rounded-2xl w-full shadow-lg focus:border-blue-500 border border-gray-700 py-4'>

                                                <Textarea
                                                    type='text'
                                                    placeholder=' Text'
                                                    disabled={!isEditing}
                                                    className='outline-none w-[90%] rounded-2xl border-none text-xl px-4 bg-gray-800 text-white' />
                                            </div>
                                        </div>




                                    </div>


                                </div>



                            </div>

                            :
                            null
                    }





                    {
                        show === 2 ?
                            <div className='bg-gray-900 h-full   shadow-lg rounded-2xl py-5 border border-gray-700'>
                                <div className='flex justify-between pb-2 px-5 items-center '>
                                    <h1 className=' font-bold text-white' style={{ fontSize: 18 }}>My Order</h1>
                                    <h1 className=' text-green-400 ' style={{ fontSize: 14 }}>Total order 3</h1>
                                </div>

                                <div className='grid grid:cols-1 gap-5 px-5'>
                                    <div className=' py-5 px-5  rounded-2xl hover:shadow-lg  border border-pink-400 bg-gray-800 '>
                                        <div className='flex justify-between '>
                                            <h1 className='text-white' style={{ fontSize: 17 }}>Order #1</h1>
                                            <h1 className='bg-green-900 text-white px-2 rounded-2xl border border-green-400'>Delivered</h1>
                                        </div>

                                        <div className='flex items-center text-green-400'>
                                            <CiShop className='text-white'></CiShop>
                                            <h1 style={{ fontSize: 12 }}> Place on 3/11/2025</h1>
                                        </div>
                                        <h1 className='text-green-400 font-bold pt-2' style={{ fontSize: 15 }}>Products :</h1>

                                        <div className='flex space-x-5 pt-2 flex-wrap'>

                                            <div className='flex items-center gap-2  border border-pink-400 rounded px-5 bg-gray-700'>
                                                <h1 className='text-xl'>💄</h1>
                                                <div>
                                                    <h1 style={{ fontSize: 14 }} className='text-white'> Lipistic</h1>
                                                    <h1 style={{ fontSize: 10 }} className='text-gray-300'>  ₹899</h1>
                                                </div>
                                            </div>
                                            <div className='flex items-center space-x-2  border border-pink-400 rounded px-4 bg-gray-700'>
                                                <h1 className='text-2xl'>⛸️</h1>
                                                <div>
                                                    <h1 style={{ fontSize: 14 }} className='text-white'>jhoota</h1>
                                                    <h1 style={{ fontSize: 10 }} className='text-gray-300'>  ₹899</h1>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 pt-2 '>
                                            <div className='flex items-center text-gray-300'>
                                                <CiShop className='text-white'></CiShop>
                                                <h1>Items 3</h1>
                                            </div>
                                            <div className='flex items-center text-gray-300'>
                                                <FaMoneyBill1 className='text-white'></FaMoneyBill1>
                                                <h1>Total: ₹1,450</h1>
                                            </div>
                                            <div className='flex items-center text-gray-300'>
                                                <FaTractor className='text-white' />
                                                <h1>Tracking</h1>
                                            </div>
                                            <div className='flex items-center text-gray-300'>
                                                <FaEye className='text-white'></FaEye>
                                                <h1>Details</h1>
                                            </div>
                                            <div className='flex items-center text-gray-300'>
                                                <CiShop className='text-white'></CiShop>
                                                <h1>Reorder</h1>
                                            </div>
                                        </div>
                                    </div>

                                    <div className=' py-5 px-5  rounded-2xl hover:shadow-lg  border border-pink-400 bg-gray-800  '>
                                        <div className='flex justify-between '>
                                            <h1 className='text-white' style={{ fontSize: 17 }}>Order #1</h1>
                                            <h1 className='bg-green-900 text-white px-2 rounded-2xl border border-green-400'>Delivered</h1>
                                        </div>

                                        <div className='flex items-center text-green-400'>
                                            <CiShop className='text-white'></CiShop>
                                            <h1 style={{ fontSize: 12 }}> Place on 3/11/2025</h1>
                                        </div>
                                        <h1 className='text-green-400 font-bold pt-2' style={{ fontSize: 15 }}>Products :</h1>

                                        <div className='flex space-x-4 flex-wrap pt-1'>

                                            <div className='flex items-center gap-2  border border-pink-400 rounded px-5 bg-gray-700'>
                                                <h1 className='text-xl'>💄</h1>
                                                <div>
                                                    <h1 style={{ fontSize: 14 }} className='text-white'> Lipistic</h1>
                                                    <h1 style={{ fontSize: 10 }} className='text-gray-300'>  ₹899</h1>
                                                </div>
                                            </div>
                                            <div className='flex items-center space-x-2  border border-pink-400 rounded px-4 bg-gray-700'>
                                                <h1 className='text-2xl'>⛸️</h1>
                                                <div>
                                                    <h1 style={{ fontSize: 14 }} className='text-white'>jhoota</h1>
                                                    <h1 style={{ fontSize: 10 }} className='text-gray-300'>  ₹899</h1>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 pt-2 '>
                                            <div className='flex items-center text-gray-300'>
                                                <CiShop className='text-white'></CiShop>
                                                <h1>Items 3</h1>
                                            </div>
                                            <div className='flex items-center text-gray-300'>
                                                <FaMoneyBill1 className='text-white'></FaMoneyBill1>
                                                <h1>Total: ₹1,450</h1>
                                            </div>
                                            <div className='flex items-center text-gray-300'>
                                                <FaTractor className='text-white' />
                                                <h1>Tracking</h1>
                                            </div>
                                            <div className='flex items-center text-gray-300'>
                                                <FaEye className='text-white'></FaEye>
                                                <h1>Details</h1>
                                            </div>
                                            <div className='flex items-center text-gray-300'>
                                                <CiShop className='text-white'></CiShop>
                                                <h1>Reorder</h1>
                                            </div>
                                        </div>
                                    </div>

                                    <div className=' py-5  px-5  rounded-2xl hover:shadow-lg  border border-pink-400 bg-gray-800 '>
                                        <div className='flex justify-between '>
                                            <h1 className='text-white' style={{ fontSize: 17 }}>Order #1</h1>
                                            <h1 className='bg-green-900 text-white px-2 rounded-2xl border border-green-400'>Delivered</h1>
                                        </div>

                                        <div className='flex items-center text-green-400'>
                                            <CiShop className='text-white'></CiShop>
                                            <h1 style={{ fontSize: 12 }}> Place on 3/11/2025</h1>
                                        </div>
                                        <h1 className='text-green-400 font-bold pt-2' style={{ fontSize: 15 }}>Products :</h1>

                                        <div className='flex space-x-5 pt-1'>

                                            <div className='flex items-center gap-2  border border-pink-400 rounded px-5 bg-gray-700'>
                                                <h1 className='text-xl'>💄</h1>
                                                <div>
                                                    <h1 style={{ fontSize: 14 }} className='text-white'> Lipistic</h1>
                                                    <h1 style={{ fontSize: 10 }} className='text-gray-300'>  ₹899</h1>
                                                </div>
                                            </div>
                                            <div className='flex items-center space-x-2  border border-pink-400 rounded px-4 bg-gray-700'>
                                                <h1 className='text-2xl'>⛸️</h1>
                                                <div>
                                                    <h1 style={{ fontSize: 14 }} className='text-white'>jhoota</h1>
                                                    <h1 style={{ fontSize: 10 }} className='text-gray-300'>  ₹899</h1>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 pt-2 '>
                                            <div className='flex items-center text-gray-300'>
                                                <CiShop className='text-white'></CiShop>
                                                <h1>Items 3</h1>
                                            </div>
                                            <div className='flex items-center text-gray-300'>
                                                <FaMoneyBill1 className='text-white'></FaMoneyBill1>
                                                <h1>Total: ₹1,450</h1>
                                            </div>
                                            <div className='flex items-center text-gray-300'>
                                                <FaTractor className='text-white' />
                                                <h1>Tracking</h1>
                                            </div>
                                            <div className='flex items-center text-gray-300'>
                                                <FaEye className='text-white'></FaEye>
                                                <h1>Details</h1>
                                            </div>
                                            <div className='flex items-center text-gray-300'>
                                                <CiShop className='text-white'></CiShop>
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
                            <div className='py-7 bg-gray-900 px-4 rounded-2xl border border-gray-700'>
                                <div className='flex justify-between pb-2 px-5 items-center  '>
                                    <h1 className=' font-bold text-2xl font-bold text-white' >My Order</h1>
                                    <h1 className=' text-green-400 text-xl ' >Total order 3</h1>
                                </div>


                                <div className='grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-3 gap-4 px-4'>

                                    <div className='py-5 bg-gray-800 px-4  shadow-sm hover:shadow-lg   hover:shadow-gray-700 shadow-gray-700 rounded-2xl border border-gray-700'>
                                        <div className='text-center [&>*]:py-1'>
                                            <h1 className='text-2xl'>💄</h1>
                                            <h1 className='text-pink-400 text-bold '>Radiant Glow Serum</h1>
                                            <h1 className='text-green-400 '>🌿 Face & Skin Care</h1>
                                        </div>
                                        <div className='flex justify-between py-2 px-4 text-white'>
                                            <h1>₹89</h1>
                                            <h1>⭐(45)</h1>
                                        </div>
                                        <div className='flex  justify-between py-2 px-4 text-white'>
                                            <h1>❤️</h1>
                                            <div className='flex items-center gap-2 border border-pink-500 hover:bg-pink-900 py-1 px-3 rounded-2xl hover:text-white '>
                                                <MdShoppingCart className='text-white'></MdShoppingCart>
                                                <h1 className='font-bold'>Add cart</h1>
                                            </div>
                                            <h1>< IoMdShareAlt className='text-white'></IoMdShareAlt></h1>
                                        </div>
                                    </div>

                                    <div className='py-5 bg-gray-800 px-4  shadow-sm hover:shadow-lg   hover:shadow-gray-700 shadow-gray-700 rounded-2xl border border-gray-700'>
                                        <div className='text-center [&>*]:py-1'>
                                            <h1 className='text-2xl flex justify-center' >< FcCloseUpMode></FcCloseUpMode></h1>
                                            <h1 className='text-pink-400 text-bold '>Radiant Glow Serum</h1>
                                            <h1 className='text-green-400 '>🌿 Face & Skin Care</h1>
                                        </div>
                                        <div className='flex justify-between py-2 px-4 text-white'>
                                            <h1>₹89</h1>
                                            <h1>⭐(45)</h1>
                                        </div>
                                        <div className='flex  justify-between py-2 px-4 text-white'>
                                            <h1>❤️</h1>
                                            <div className='flex items-center gap-2 border border-pink-500 hover:bg-pink-900 py-1 px-3 rounded-2xl hover:text-white '>
                                                <MdShoppingCart className='text-white'></MdShoppingCart>
                                                <h1 className='font-bold'>Add cart</h1>
                                            </div>
                                            <h1>< IoMdShareAlt className='text-white'></IoMdShareAlt></h1>
                                        </div>
                                    </div>

                                    <div className='py-5 bg-gray-800 px-4  shadow-sm hover:shadow-lg   hover:shadow-gray-700 shadow-gray-700 rounded-2xl border border-gray-700'>
                                        <div className='text-center [&>*]:py-1'>
                                            <h1 className='text-2xl'>💄</h1>
                                            <h1 className='text-pink-400 text-bold '>Radiant Glow Serum</h1>
                                            <h1 className='text-green-400 '>🌿 Face & Skin Care</h1>
                                        </div>
                                        <div className='flex justify-between py-2 px-4 text-white'>
                                            <h1>₹89</h1>
                                            <h1>⭐(45)</h1>
                                        </div>
                                        <div className='flex  justify-between py-2 px-4 text-white'>
                                            <h1>❤️</h1>
                                            <div className='flex items-center gap-2 border border-pink-500 hover:bg-pink-900 py-1 px-3 rounded-2xl hover:text-white '>
                                                <MdShoppingCart className='text-white'></MdShoppingCart>
                                                <h1 className='font-bold'>Add cart</h1>
                                            </div>
                                            <h1>< IoMdShareAlt className='text-white'></IoMdShareAlt></h1>
                                        </div>
                                    </div>


                                    <div className='py-5 bg-gray-800 px-4  shadow-sm hover:shadow-lg   hover:shadow-gray-700 shadow-gray-700 rounded-2xl border border-gray-700'>
                                        <div className='text-center [&>*]:py-1'>
                                            <h1 className='text-2xl'>💄</h1>
                                            <h1 className='text-pink-400 text-bold '>Radiant Glow Serum</h1>
                                            <h1 className='text-green-400 '>🌿 Face & Skin Care</h1>
                                        </div>
                                        <div className='flex justify-between py-2 px-4 text-white'>
                                            <h1>₹89</h1>
                                            <h1>⭐(45)</h1>
                                        </div>
                                        <div className='flex  justify-between py-2 px-4 text-white'>
                                            <h1>❤️</h1>
                                            <div className='flex items-center gap-2 border border-pink-500 hover:bg-pink-900 py-1 px-3 rounded-2xl hover:text-white '>
                                                <MdShoppingCart className='text-white'></MdShoppingCart>
                                                <h1 className='font-bold'>Add cart</h1>
                                            </div>
                                            <h1>< IoMdShareAlt className='text-white'></IoMdShareAlt></h1>
                                        </div>
                                    </div>


                                    <div className='py-5 bg-gray-800 px-4  shadow-sm hover:shadow-lg   hover:shadow-gray-700 shadow-gray-700 rounded-2xl border border-gray-700'>
                                        <div className='text-center [&>*]:py-1'>
                                            <h1 className='text-2xl'>💄</h1>
                                            <h1 className='text-pink-400 text-bold '>Radiant Glow Serum</h1>
                                            <h1 className='text-green-400 '>🌿 Face & Skin Care</h1>
                                        </div>
                                        <div className='flex justify-between py-2 px-4 text-white'>
                                            <h1>₹89</h1>
                                            <h1>⭐(45)</h1>
                                        </div>
                                        <div className='flex  justify-between py-2 px-4 text-white'>
                                            <h1>❤️</h1>
                                            <div className='flex items-center gap-2 border border-pink-500 hover:bg-pink-900 py-1 px-3 rounded-2xl hover:text-white '>
                                                <MdShoppingCart className='text-white'></MdShoppingCart>
                                                <h1 className='font-bold'>Add cart</h1>
                                            </div>
                                            <h1>< IoMdShareAlt className='text-white'></IoMdShareAlt></h1>
                                        </div>
                                    </div>


                                    <div className='py-5 bg-gray-800 px-4  shadow-sm hover:shadow-lg   hover:shadow-gray-700 shadow-gray-700 rounded-2xl border border-gray-700'>
                                        <div className='text-center [&>*]:py-1'>
                                            <h1 className='text-2xl'>💄</h1>
                                            <h1 className='text-pink-400 text-bold '>Radiant Glow Serum</h1>
                                            <h1 className='text-green-400 '>🌿 Face & Skin Care</h1>
                                        </div>
                                        <div className='flex justify-between py-2 px-4 text-white'>
                                            <h1>₹89</h1>
                                            <h1>⭐(45)</h1>
                                        </div>
                                        <div className='flex  justify-between py-2 px-4 text-white'>
                                            <h1>❤️</h1>
                                            <div className='flex items-center gap-2 border border-pink-500 hover:bg-pink-900 py-1 px-3 rounded-2xl hover:text-white '>
                                                <MdShoppingCart className='text-white'></MdShoppingCart>
                                                <h1 className='font-bold'>Add cart</h1>
                                            </div>
                                            <h1> </h1>
                                        </div>
                                    </div>





                                </div>


                            </div>
                            :
                            null
                    }




                    {
                        show === 4 ?
                            <div className='py-5 px-4 bg-gray-900 rounded-2xl border border-gray-700'>

                                <div className='flex justify-between py-7'>
                                    <h1 className="text-2xl font-bold text-pink-400"> My Address</h1>
                                    <div className='flex items-center gap-2 bg-green-700 py-2 px-4 rounded-2xl hover:bg-green-800 hover:text-white'>
                                        <FaPlus className='text-white'></FaPlus>
                                        <h1>Add new address</h1>
                                    </div>
                                </div>

                                <div className='grid grid-cols-2  sm:grid-cols-2 gap-5'>
                                    <div className='py-5 px-4 bg-gray-800 rounded-2xl shadow-lg border border-gray-700'>
                                        <div className='flex justify-between'>
                                            <div className='flex items-center gap-2'>
                                                <FaHome className='text-xl text-white'></FaHome>
                                                <div>
                                                    <h1 className='font-bold text-white'>Home</h1>
                                                    <h1 className='bg-green-900 text-white py-1 px-2 rounded-2xl'>Default</h1>
                                                </div>
                                            </div>
                                            <div className='flex'>
                                                <h1 className='text-xl text-white'> <FaEdit></FaEdit> </h1>
                                                <h1 className='text-xl text-white'>< RiDeleteBin5Fill></RiDeleteBin5Fill></h1>

                                            </div>
                                        </div>
                                        <h1 className='text-center py-5 text-pink-300'>123 Green Valley, Mumbai, Maharashtra 400001</h1>
                                    </div>

                                    <div className='py-5 px-4 bg-gray-800 rounded-2xl shadow-lg border border-gray-700'>
                                        <div className='flex justify-between'>
                                            <div className='flex items-center gap-2'>
                                                <FaHome className='text-xl text-white'></FaHome>
                                                <div>
                                                    <h1 className='font-bold text-white'>Home</h1>
                                                    <h1 className='bg-green-900 text-white py-1 px-2 rounded-2xl'>Default</h1>
                                                </div>
                                            </div>
                                            <div className='flex'>
                                                <h1 className='text-xl text-white'> <FaEdit></FaEdit> </h1>
                                                <h1 className='text-xl text-white'>< RiDeleteBin5Fill></RiDeleteBin5Fill></h1>

                                            </div>
                                        </div>
                                        <h1 className='text-center py-5 text-pink-300'>123 Green Valley, Mumbai, Maharashtra 400001</h1>
                                    </div>


                                </div>

                            </div>
                            :
                            null

                    }



                    {
                        show === 5 ?
                            <div className='py-7 px-4 bg-gray-900 rounded-2xl border border-gray-700' >
                                <div>
                                    <div>< FaCcAmazonPay className='text-6xl text-white'></FaCcAmazonPay></div>
                                </div>

                                <div className='text-center [&>*]:py-2'>
                                    <h1 className='text-4xl text-pink-400 font-bold'>Payment Management</h1>
                                    <h1 className='text-gray-300'>This section is coming soon with exciting features!Notify Me When Ready</h1>

                                    <div className=' flex justify-center'>
                                        <div className='flex items-center gap-2 bg-green-700 py-2 px-4 hover:bg-green-900 rounded-2xl'>
                                            <FaBell className='flex justify-center text-white'></FaBell>
                                            <h1 className='font-bold'>Notification</h1>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            :
                            null
                    }


                    {
                        show === 6 ?
                            <div className='py-7 px-4 bg-gray-900 rounded-2xl border border-gray-700' >
                                <div>
                                    <div>< FaLockOpen className='text-6xl text-white'></FaLockOpen></div>
                                </div>

                                <div className='text-center [&>*]:py-2'>
                                    <h1 className='text-4xl text-pink-400 font-bold'>Security Management</h1>
                                    <h1 className='text-gray-300'>This section is coming soon with exciting features!Notify Me When Ready</h1>

                                    <div className=' flex justify-center'>
                                        <div className='flex items-center gap-2 bg-green-700 py-2 px-4 hover:bg-green-900 rounded-2xl'>
                                            <FaBell className='flex justify-center text-white'></FaBell>
                                            <h1 className='font-bold'>Notification</h1>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            :
                            null
                    }



                    {
                        show === 7 ?
                            <div className='py-7 px-4 bg-gray-900 rounded-2xl border border-gray-700' >
                                <div>
                                    <div>< IoSettingsSharp className='text-6xl text-white'></ IoSettingsSharp></div>
                                </div>

                                <div className='text-center [&>*]:py-2'>
                                    <h1 className='text-4xl text-pink-400 font-bold'>Setting Management</h1>
                                    <h1 className='text-gray-300'>This section is coming soon with exciting features!Notify Me When Ready</h1>

                                    <div className=' flex justify-center'>
                                        <div className='flex items-center gap-2 bg-green-700 py-2 px-4 hover:bg-green-900 rounded-2xl'>
                                            <FaBell className='flex justify-center text-white'></FaBell>
                                            <h1 className='font-bold'>Notification</h1>
                                        </div>
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
