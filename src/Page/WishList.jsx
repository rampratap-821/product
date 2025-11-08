import React from 'react'
import { IoCloud } from "react-icons/io5";
import { MdDelete, MdLanguage } from "react-icons/md";
import { MdLockClock } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import { MdProductionQuantityLimits } from "react-icons/md";
import { MdOutlinePriceChange } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { FaDeleteLeft, FaHeart, FaPersonRifle } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const WishList = ({ card,setcard }) => {
    console.log("ram",card);
    
    return (
        <div className='w-full py-10 px-5'>
            {
                card.length !== 0 && (
                    <>

                        <div className='flex justify-between items-center bg-pink-200 py-5 px-5 rounded-2xl'>
                            <div>
                                <h1 className='text-4xl font-bold text-pink-800 pb-2 '>My Wishlist</h1>
                                <h1>❤️{card.length}  items saved for late</h1>
                            </div>
                            <div className='flex -tems-center gap-4 text-green-400 font-bold' >
                                <div className='flex items-center  gap-2'>
                                    <IoCloud></IoCloud>
                                    <h1>27°C Cloudy</h1>
                                </div>

                                <div className='flex items-center  gap-2'>
                                    <MdLanguage></MdLanguage>
                                    <h1>Language</h1>
                                </div>

                                <div className='flex items-center  gap-2'>
                                    <MdLockClock></MdLockClock>
                                    <h1>8:30 Am </h1>
                                </div>
                                <div className='flex items-center  gap-2'>
                                    <FaCalendarAlt></FaCalendarAlt>
                                    <h1>7/Nov/2025</h1>
                                </div>
                            </div>
                        </div>

                        <div className=' pt-10 '>
                            <div className='flex justify-between py-5 bg-red-200 px-5'>
                                <div className='flex items-center gap-2 text-blue-800 font-bold w-[30%] '>
                                    <MdProductionQuantityLimits></MdProductionQuantityLimits>
                                    <h1>Product</h1>
                                </div>
                                <div className='flex items-center gap-2 text-blue-800 font-bold '>
                                    <MdOutlinePriceChange></MdOutlinePriceChange>
                                    <h1>Price</h1>
                                </div> <div className='flex items-center gap-2 text-blue-800 font-bold '>
                                    <FaShoppingCart></FaShoppingCart>
                                    <h1>Stock</h1>
                                </div> <div className='flex items-center gap-2 text-blue-800 font-bold '>

                                    <FaHeart></FaHeart>
                                    <h1>Action</h1>
                                </div>
                            </div>
                            <hr></hr>

                        </div>

                    </>
                )
            }

            {
                card.length === 0 ?(
                    <div className='flex justify-center items-center '>
                        <div className='py-10 bg-pink-100 px-10  text-center shadow-lg rounded '>
                         <div className='flex justify-center text-8xl text-pink-800 pb-5'>   <FaHeart ></FaHeart></div>
                            <h1 className='text-4xl font-bold text-green-700'>Your Wishlist card is Empty</h1>
                            <h1 className='py-3'>Start adding your favorite products to see them here!</h1>
                           <h1 className='py-8'>
                            <Link to={"/"} className='py-3 text-xl font-bold bg-pink-800  px-5 rounded text-white'>Start to shopping</Link>
                            </h1> 
                           
                        </div>
                    </div>)
                    :
                 card.map((item)=>
                <div className='bg-red-200 py-5 px-5 flex justify-between items-center' key={item.id } >
                  <div className='flex items-center gap-5 w-[40%]'>
                    <img src={item.image} style={{width:100,height:100}}/>
                    <div>
                        <h1>⭐⭐⭐⭐⭐</h1>
                        <div className='flex items-center gap-1  font-bold'>
                            <FaPersonRifle></FaPersonRifle>
                            <h1>By Customer</h1>
                        </div>
                    </div>
                  </div>
                  <h1>{item.price}</h1>
                  <h1 className=''>in stock</h1>
                  <div className='flex items-center'>
                    <FaShoppingCart></FaShoppingCart>
                    <h1>Add to card</h1>
                  </div>
                  <div>
                    <MdDelete></MdDelete>
                  </div>
                </div>
                )
            }
        </div>
    )
}

export default WishList
