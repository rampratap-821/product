import React, { useState } from 'react'

import { Link } from 'react-router-dom'
import { PiListDashesBold } from "react-icons/pi";
import { MdBorderColor } from "react-icons/md";
import { FaEdit, FaEyeSlash, FaHeart, FaHome, FaLock, FaSave } from 'react-icons/fa';
import { ImProfile } from "react-icons/im";
import { IoMdLogOut } from "react-icons/io";
import { FaArrowRotateRight, FaLocationDot, FaRotateRight } from "react-icons/fa6";

const MyAccount = () => {
  const [show, setshow] = useState(1)
  return (
    <div className='py-10 px-5'>

      <div>
        <h1 className='text-4xl font-bold py-5'>My Account</h1>
        <h1>From your account dashboard, you can easily check & view your recent orders,
          manage your shipping and billing addresses and edit your password and account details.</h1>

        <div className='grid grid-cols-1  sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4    py-10 '>

          <div className='  py-5 bg-pink-50 [&>*]:py-4 rounded h-[450px]  md:cols-span-2 '>
            <div className='     px-5   ' onClick={() => setshow(1)}>
              <h1 className='flex items-center gap-4 rounded-xl  px-4   text-xl '>
                <PiListDashesBold ></PiListDashesBold >
                <Link>DashBoard</Link>
              </h1>
            </div>
            <div className='     px-5  ' onClick={() => setshow(2)}>
              <h1 className='flex items-center gap-4 rounded-xl  px-4   text-xl '>
                <MdBorderColor ></MdBorderColor >
                <Link>Order</Link>
              </h1>
            </div>
            <div className='     px-5  ' onClick={() => setshow(3)}>
              <h1 className='flex items-center gap-4 rounded-xl  px-4   text-xl '>
                <FaHome ></FaHome>
                <Link>Address</Link>
              </h1>
            </div>
            <div className='     px-5  ' onClick={() => setshow(4)}>
              <h1 className='flex items-center gap-4 rounded-xl  px-4   text-xl '>
                <ImProfile ></ImProfile >
                <Link>Account Details</Link>
              </h1>
            </div>
            <div className='     px-5  ' onClick={() => setshow(5)}>
              <h1 className='flex items-center gap-4 rounded-xl  px-4   text-xl '>
                <FaLock ></FaLock >
                <Link>Change Password</Link>
              </h1>
            </div>
            <div className='     px-5  '>
              <h1 className='flex items-center gap-4 rounded-xl  px-4   text-xl '>
                <IoMdLogOut ></IoMdLogOut >
                <Link>Logout</Link>
              </h1>
            </div>



          </div>











          <div className='lg:col-span-3 md:col-span-2 '>

            {
              show === 1 ?
                <div className='py-7 px-7 bg-white  rounded  '>
                  <h1 className='text-2xl font-semibold pb-7' >DashBoard</h1>
                  <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-5'>

                    <div className='py-3 text-center bg-pink-300 [&>*]:py-2 font-semibold text-xl rounded'>
                      <h1 className='flex justify-center'><MdBorderColor className='text-orange-600'></MdBorderColor></h1>
                      <h1 >Total Order</h1>
                      <h1>12</h1>
                    </div>
                    <div className='py-3 text-center bg-pink-300 [&>*]:py-2 font-semibold text-xl rounded'>
                      <h1 className='flex justify-center'><FaHeart className='text-red-600'></FaHeart></h1>
                      <h1>Wishlist</h1>
                      <h1>12</h1>
                    </div>
                    <div className='py-3 text-center bg-pink-300 [&>*]:py-2 font-semibold text-xl rounded'>
                      <h1 className='flex justify-center'>< FaLocationDot className='text-yellow-600'></ FaLocationDot></h1>
                      <h1>Saved Address</h1>
                      <h1>12</h1>
                    </div>
                  </div>
                  <h1 className='text-2xl font-semibold py-7'>Recent Order</h1>

                  <div className=' [&>*]:mb-5'>
                    <div className=' py-5  border border-gray-200 rounded hover:shadow-lg px-5'>
                      <div className='  flex justify-between '>
                        <div>
                          <h1 className='font-bold text-xl'>Order #1</h1>
                          <h1>Date: 2024-01-15</h1>
                        </div>
                        <div>
                          <h1 className='font-bold text-xl '>$45.99</h1>
                          <h1 className='bg-green-200  px-2 rounded-2xl'>Completed</h1>
                        </div>
                      </div>

                      <div className='flex gap-4'>
                        <div className='flex items-center gap-2 text-green-500 pt-5'>
                          <FaEyeSlash></FaEyeSlash>
                          <h1>View Order</h1>
                        </div>
                        <div className='flex items-center gap-2  pt-5'>
                          <FaArrowRotateRight></FaArrowRotateRight>
                          <h1>Tracking Order</h1>
                        </div>
                      </div>
                    </div>


                    <div className=' py-5  border border-gray-200 rounded hover:shadow-lg px-5'>
                      <div className='  flex justify-between '>
                        <div>
                          <h1 className='font-bold text-xl'>Order #1</h1>
                          <h1>Date: 2024-01-15</h1>
                        </div>
                        <div>
                          <h1 className='font-bold text-xl '>$45.99</h1>
                          <h1 className='bg-green-200  px-2 rounded-2xl'>Completed</h1>
                        </div>
                      </div>

                      <div className='flex gap-4'>
                        <div className='flex items-center gap-2 text-green-500 pt-5'>
                          <FaEyeSlash></FaEyeSlash>
                          <h1>View Order</h1>
                        </div>
                        <div className='flex items-center gap-2  pt-5'>
                          <FaArrowRotateRight></FaArrowRotateRight>
                          <h1>Tracking Order</h1>
                        </div>
                      </div>
                    </div>



                    <div className=' py-5  border border-gray-200 rounded hover:shadow-lg px-5'>
                      <div className='  flex justify-between '>
                        <div>
                          <h1 className='font-bold text-xl'>Order #1</h1>
                          <h1>Date: 2024-01-15</h1>
                        </div>
                        <div>
                          <h1 className='font-bold text-xl '>$45.99</h1>
                          <h1 className='bg-green-200  px-2 rounded-2xl'>Completed</h1>
                        </div>
                      </div>

                      <div className='flex gap-4'>
                        <div className='flex items-center gap-2 text-green-500 pt-5'>
                          <FaEyeSlash></FaEyeSlash>
                          <h1>View Order</h1>
                        </div>
                        <div className='flex items-center gap-2  pt-5'>
                          <FaArrowRotateRight></FaArrowRotateRight>
                          <h1>Tracking Order</h1>
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
                <div className='py-7 px-5 bg-white rounded-xl'>
                  <h1 className='text-xl font-bold'>  Order History</h1>
                  <div className='flex justify-between px-5 font-bold pt-10 '>
                    <h1>Order</h1>
                    <h1>Date</h1>
                    <h1>Status</h1>
                    <h1>Total</h1>
                    <h1>Actios</h1>
                  </div>
                  <hr className='mt-4'></hr >


                  <div className='flex justify-between px-5  py-2 '>
                    <h1>#1</h1>
                    <h1>	2024-01-15</h1>
                    <h1 >Completed</h1>
                    <h1 >	$45.99</h1>
                    <div>
                      <div >
                        <div className='flex items-center'>
                          <FaEyeSlash></FaEyeSlash>
                          <h1>View</h1>
                        </div>
                        <div className='flex items-center'>
                          <FaRotateRight></FaRotateRight>
                          <h1>Track</h1>
                        </div>
                      </div>

                    </div>

                  </div>

                  <hr className='mt-4'></hr >


                  <div className='flex justify-between px-5  py-2 '>
                    <h1>#1</h1>
                    <h1>	2024-01-15</h1>
                    <h1 >Completed</h1>
                    <h1 >	$45.99</h1>
                    <div>
                      <div >
                        <div className='flex items-center'>
                          <FaEyeSlash></FaEyeSlash>
                          <h1>View</h1>
                        </div>
                        <div className='flex items-center'>
                          <FaRotateRight></FaRotateRight>
                          <h1>Track</h1>
                        </div>
                      </div>

                    </div>

                  </div>

                  <hr className='mt-4'></hr >

                  <div className='flex justify-between px-5  py-2 '>
                    <h1>#1</h1>
                    <h1>	2024-01-15</h1>
                    <h1 >Completed</h1>
                    <h1 >	$45.99</h1>
                    <div>
                      <div >
                        <div className='flex items-center'>
                          <FaEyeSlash></FaEyeSlash>
                          <h1>View</h1>
                        </div>
                        <div className='flex items-center'>
                          <FaRotateRight></FaRotateRight>
                          <h1>Track</h1>
                        </div>
                      </div>

                    </div>

                  </div>

                  <hr className='mt-4'></hr >

                </div>
                :
                null
            }

            {
              show === 3 ?
                <div className='py-7 px-5 bg-white rounded-xl'>
                  <h1 className='text-2xl font-bold'>Addresses</h1>

                  <div className='grid grid-cols-2 gap-5'>
                    <div className='py-5 px-2 border border-gray-400  mt-8 '>
                      <div className='flex justify-between'>
                        <h1 className='font-bold'>billing Address</h1>
                        <div className='flex items-center gap-2 text-pink-500 font-bold'>
                          <FaEdit></FaEdit>
                          <h1>Edtit</h1>
                        </div>
                      </div>
                      <h1 className='pt-5'>Ram</h1>
                      <h1>100 main street</h1>
                      <h1>Moradabad</h1>
                      <h1>India</h1>
                    </div>
                    <div className='py-5 px-2 border border-gray-400  mt-8 '>
                      <div className='flex justify-between'>
                        <h1 className='font-bold'>billing Address</h1>
                        <div className='flex items-center gap-2 text-pink-500 font-bold'>
                          <FaEdit></FaEdit>
                          <h1>Edtit</h1>
                        </div>
                      </div>
                      <h1 className='pt-5'>Ram</h1>
                      <h1>100 main street</h1>
                      <h1>Moradabad</h1>
                      <h1>India</h1>
                    </div>

                  </div>

                  <button className='flex items-center py-2 mt-8 gap-5 bg-pink-700 px-4 rounded-xl hover:text-white hover:bg-pink-900'>
                    <FaEdit></FaEdit>
                    <h1>Add New Address</h1>
                  </button>


                </div>
                :
                null
            }

            {
              show === 4 ?
                <div className='py-7  px-5 bg-white rounded-xl'>
                  <h1 className='text-2xl font-bold'>Account Details</h1>

                  <div className='grid grid-cols-1 sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-2 gap-5 pt-7'>
                    <div className=''>
                      <h1 className=' pb-2'> First Name</h1>

                      <input
                        type="text"
                        className="w-full py-3 px-2 outline-none rounded-xl  focus:border-4 focus:border-pink-400  border-2 boder-pink-400  "
                      />

                    </div>

                    <div>
                      <h1 className=' pb-2'> Last Name</h1>

                      <input
                        type="text"
                        className="w-full py-3 px-2 outline-none rounded-xl  focus:border-4 focus:border-pink-400  border-2 boder-pink-400 "
                      />

                    </div>
                  </div>


                  <div>
                    <h1 className=' pb-2'> Email Address</h1>

                    <input
                      type="text"
                      className="w-full py-3 px-2 outline-none rounded-xl  focus:border-4 focus:border-pink-400  border-2 boder-pink-400 "
                    />

                  </div>

                  <div>
                    <h1 className=' pb-2'> Display Name</h1>

                    <input
                      type="text"
                      className="w-full py-3 px-2 outline-none rounded-xl  focus:border-4 focus:border-pink-400  border-2 boder-pink-400 "
                    />

                  </div>


                  <button className='flex items-center mt-4 py-4 mt-2 gap-5 bg-pink-700 px-4 rounded-xl hover:text-white hover:bg-pink-900 font-bold'>
                    <FaSave></FaSave>
                    <h1>Save new Change</h1>
                  </button>


                </div>
                :
                null
            }




            {
              show === 5 ?

                <div className='py-7  px-5 bg-white rounded-xl'>
                  <h1 className='text-2xl font-bold'>Change Password</h1>


              <div className='[&>*]:py-2 mt-5'>

                  <div>
                    <h1 className=' pb-2'>Current Password</h1>

                    <input
                      type="text"
                      className="w-full py-3 px-2 outline-none rounded-xl  focus:border-4 focus:border-pink-400  border-2 boder-pink-400 "
                    />

                  </div>

                  <div>
                    <h1 className=' pb-2'> Confirm New Password  </h1>

                    <input
                      type="text"
                      className="w-full py-3 px-2 outline-none rounded-xl  focus:border-4 focus:border-pink-400  border-2 boder-pink-400 "
                    />

                  </div>

                  <div>
                    <h1 className=' pb-2'> Display Name</h1>

                    <input
                      type="text"
                      className="w-full py-3 px-2 outline-none rounded-xl  focus:border-4 focus:border-pink-400  border-2 boder-pink-400 "
                    />

                  </div>


                  <button className='flex items-center mt-4 py-4 mt-2 gap-5 bg-pink-700 px-4 rounded-xl hover:text-white hover:bg-pink-900 font-bold'>
                    <FaSave></FaSave>
                    <h1>Updated Password</h1>
                  </button>

      </div>
                </div>


                :
                null






            }

          </div>





        </div>
      </div>



    </div>
  )
}

export default MyAccount
