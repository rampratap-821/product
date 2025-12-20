// import React from 'react'
// import { IoCloud } from "react-icons/io5";
// import { MdDelete, MdLanguage } from "react-icons/md";
// import { MdLockClock } from "react-icons/md";
// import { FaCalendarAlt } from "react-icons/fa";
// import { MdProductionQuantityLimits } from "react-icons/md";
// import { MdOutlinePriceChange } from "react-icons/md";
// import { FaShoppingCart } from "react-icons/fa";
// import { FaDeleteLeft, FaHeart, FaPersonRifle } from 'react-icons/fa6';
// import { Link } from 'react-router-dom';



// const WishList = ({ card,setCard }) => {
//     console.log("ram",card);

//     const handleDelete = (id)=>{
//       if(confirm("are you sure")) {
//         const handle = card.filter((item)=> item.id !== id)
//         setCard(handle)
//        }
    
//     }
    
//     return (
//         <div className='w-full py-10 px-5'>
//             {
//                 card.length !== 0 && (
//                     <>

//                         <div className='flex justify-between items-center bg-pink-200 py-5 px-5 rounded-2xl flex-wrap'>
//                             <div>
//                                 <h1 className='text-4xl font-bold text-pink-800 pb-2 '>My Wishlist</h1>
//                                 <h1>❤️{card.length}  items saved for late</h1>
//                             </div>
//                             <div className='flex -tems-center gap-4 text-green-400 font-bold flex-wrap' >
//                                 <div className='flex items-center  gap-2'>
//                                     <IoCloud></IoCloud>
//                                     <h1>27°C Cloudy</h1>
//                                 </div>

//                                 <div className='flex items-center  gap-2'>
//                                     <MdLanguage></MdLanguage>
//                                     <h1>Language</h1>
//                                 </div>

//                                 <div className='flex items-center  gap-2'>
//                                     <MdLockClock></MdLockClock>
//                                     <h1>8:30 Am </h1>
//                                 </div>
//                                 <div className='flex items-center  gap-2'>
//                                     <FaCalendarAlt></FaCalendarAlt>
//                                     <h1>7/Nov/2025</h1>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className=' pt-10 '>
//                             <div className='flex justify-between py-5 bg-red-200 px-10 pl-8 flex-wrap'>
//                                 <div className='flex items-center gap-2 text-blue-800 font-bold w-[30%] '>
//                                     <MdProductionQuantityLimits></MdProductionQuantityLimits>
//                                     <h1>Product</h1>
//                                 </div>
//                                 <div className='flex items-center gap-2 text-blue-800 font-bold '>
//                                     <MdOutlinePriceChange></MdOutlinePriceChange>
//                                     <h1>Price</h1>
//                                 </div> <div className='flex items-center gap-2 text-blue-800 font-bold '>
//                                     <FaShoppingCart></FaShoppingCart>
//                                     <h1>Stock</h1>
//                                 </div> <div className='flex items-center gap-2 text-blue-800 font-bold '>

//                                     <FaHeart></FaHeart>
//                                     <h1>Action</h1>
//                                 </div>
//                             </div>
//                             <hr></hr>

//                         </div>

//                     </>
//                 )
//             }

//             {
//                 card.length === 0 ?(
//                     <div className='flex justify-center items-center '>
//                         <div className='py-10 bg-pink-100 px-10  text-center shadow-lg rounded '>
//                          <div className='flex justify-center text-8xl text-pink-800 pb-5'>   <FaHeart ></FaHeart></div>
//                             <h1 className='text-4xl font-bold text-green-700'>Your Wishlist card is Empty</h1>
//                             <h1 className='py-3'>Start adding your favorite products to see them here!</h1>
//                            <h1 className='py-8'>
//                             <Link to={"/"} className='py-3 text-xl font-bold bg-pink-800  px-5 rounded text-white'>Start to shopping</Link>
//                             </h1> 
                           
//                         </div>
//                     </div>)
//                     :
//                  card.map((item)=>
//                 <div className='bg-red-200 py-5 px-5 flex justify-between items-center flex-wrap' key={item.id } >
//                   <div className='flex items-center gap-5 w-[30%] flex-wrap'>
//                     <img src={item.image} style={{width:100,height:100}}/>
//                     <div>
//                         <h1>⭐⭐⭐⭐⭐</h1>
//                         <div className='flex items-center gap-1  font-bold '>
//                             <FaPersonRifle></FaPersonRifle>
//                             <h1>By Customer</h1>
//                         </div>
//                     </div>
//                   </div>
//                   <h1>{item.price}</h1>
//                   <h1 className=''>in stock</h1>
//                   <div className='flex items-center gap-2 text-xl'>
//                     <div className='bg-pink-800 px-2 py-1 flex items-center rounded text-white'>
//                     <FaShoppingCart></FaShoppingCart>
//                     <h1>Add to card</h1>
//                     </div>
//                     <div  className='bg-red-600 px-2 py-1 rounded text-xl' onClick={()=>handleDelete(item.id)}>
//                      <MdDelete  className=' text-2xl'></MdDelete>
//                      </div>
//                   </div>
                  
//                 </div>
//                 )
//             }
//             {
//                 card.length !== 0 && ( 
//                     <>
//                     <div className='mt-5  py-5 text-black text-center'>
//                        <button className=' text-xl  bg-red-800 px-8 py-2 font-bold rounded' onClick={()=>setCard("")}>All clear card</button>
//                     </div>
//                     </>
//                 )
//             }
//         </div>
//     )
// }

// export default WishList
import React from "react";
import { IoCloud } from "react-icons/io5";
import {
  MdDelete,
  MdLanguage,
  MdLockClock,
  MdProductionQuantityLimits,
  MdOutlinePriceChange
} from "react-icons/md";
import { FaCalendarAlt, FaShoppingCart, FaHeart, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const WishList = ({ card, setCard }) => {

  const handleDelete = (id) => {
    if (confirm("Are you sure?")) {
      setCard(card.filter(item => item.id !== id));
    }
  };

  return (
    <div className="w-full min-h-screen  py-10 px-4 sm:px-6">

      {/* HEADER */}
      {card.length !== 0 && (
        <div className="bg-black border border-gray-700 rounded-2xl px-6 py-6 flex flex-col lg:flex-row gap-6 justify-between">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-pink-500 to-pink-700 bg-clip-text text-transparent">
              My Wishlist
            </h1>
            <p className="text-white mt-1 text-sm flex items-center gap-1">
              <FaHeart className="text-pink-500" />
              {card.length} items saved for later
            </p>
          </div>

          <div className="flex flex-wrap gap-5 text-white text-sm">
            <div className="flex items-center gap-2">
              <IoCloud /> 27°C Cloudy
            </div>
            <div className="flex items-center gap-2">
              <MdLanguage /> Language
            </div>
            <div className="flex items-center gap-2">
              <MdLockClock /> 08:30 AM
            </div>
            <div className="flex items-center gap-2">
              <FaCalendarAlt /> 07 Nov 2025
            </div>
          </div>
        </div>
      )}

      {/* TABLE HEADER (DESKTOP) */}
      {card.length !== 0 && (
        <div className="hidden lg:block mt-8 bg-black border border-gray-700 rounded-xl">
          <div className="grid grid-cols-[3fr_1fr_1fr_2fr] px-8 py-4 text-white font-bold text-sm">
            <div className="flex items-center gap-2">
              <MdProductionQuantityLimits /> Product
            </div>
            <div className="text-center flex items-center justify-center gap-2">
              <MdOutlinePriceChange /> Price
            </div>
            <div className="text-center flex items-center justify-center gap-2">
              <FaShoppingCart /> Stock
            </div>
            <div className="text-center">
              <FaHeart className="inline mr-1" /> Action
            </div>
          </div>
        </div>
      )}

      {/* EMPTY STATE */}
      {card.length === 0 ? (
        <div className="flex justify-center items-center mt-24">
          <div className="bg-black border border-gray-700 rounded-xl px-10 py-12 text-center">
            <div className="text-6xl text-pink-600 mb-4 flex justify-center">
              <FaHeart />
            </div>
            <h1 className="text-3xl font-bold text-white">
              Wishlist is Empty
            </h1>
            <p className="text-gray-400 mt-2">
              Start adding products you love
            </p>

            <Link
              to="/"
              className="inline-block mt-6 px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition"
            >
              Start Shopping
            </Link>
          </div>
        </div>
      ) : (

        /* PRODUCT LIST */
        <div className="mt-6 space-y-4">
          {card.map(item => (
            <div
              key={item.id}
              className="bg-black border border-gray-700 rounded-xl p-5 flex flex-col lg:grid lg:grid-cols-[3fr_1fr_1fr_2fr] gap-5 items-center"
            >

              {/* PRODUCT */}
              <div className="flex items-center gap-4 w-full">
                <img
                  src={item.image}
                  alt=""
                  className="w-[80px] h-[80px] rounded-lg border border-gray-600"
                />
                <div>
                  <div className="flex gap-1 text-pink-500">
                    {[1,2,3,4,5].map(i => <FaHeart key={i} />)}
                  </div>
                  <div className="flex items-center gap-1 text-sm text-white">
                    <FaUser />
                    <span>By Customer</span>
                  </div>
                </div>
              </div>

              {/* PRICE */}
              <div className="text-white font-bold text-center w-full">
                {item.price}
              </div>

              {/* STOCK */}
              <div className="text-green-400 font-semibold text-center w-full">
                In Stock
              </div>

              {/* ACTION */}
              <div className="flex gap-3 w-full justify-center lg:justify-end">
                <button className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition">
                  <FaShoppingCart /> Add to Cart
                </button>

                <button
                  onClick={() => handleDelete(item.id)}
                  className="px-3 py-2 bg-red-900/40 rounded-lg hover:bg-red-900/60 transition"
                >
                  <MdDelete className="text-xl text-red-500" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* CLEAR ALL */}
      {card.length !== 0 && (
        <div className="mt-10 text-center">
          <button
            onClick={() => setCard("")}
            className="px-10 py-3 bg-black text-white font-bold rounded-lg hover:bg-gray-900 transition"
          >
            Clear Wishlist
          </button>
        </div>
      )}

    </div>
  );
};

export default WishList;
